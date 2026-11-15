// Frame-accurate export: node render.js <html> <out.mp4> [captions]
const {chromium}=require('playwright'); const {spawn}=require('child_process');
(async()=>{
  const [,,html,out,cap]=process.argv; const FPS=30;
  const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1080,height:1920}});
  await pg.goto('file://'+html);
  await pg.evaluate(c=>{document.body.classList.add('present');document.getElementById('hint').style.display='none';window.dispatchEvent(new Event('resize'));window.__setCaptions(!!c)},cap);
  const N=Math.round(75*FPS);
  const ff=spawn('ffmpeg',['-y','-v','error','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','medium','-crf','18','-pix_fmt','yuv420p',out],{stdio:['pipe','inherit','inherit']});
  for(let i=0;i<N;i++){
    await pg.evaluate(x=>window.__render(x), i/FPS);
    const buf=await pg.screenshot({type:'jpeg',quality:92});
    if(!ff.stdin.write(buf)) await new Promise(r=>ff.stdin.once('drain',r));
    if(i%300===0) console.log('frame',i,'/',N);
  }
  ff.stdin.end(); await new Promise(r=>ff.on('close',r)); await b.close(); console.log('done',out);
})();
