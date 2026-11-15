# Settlement was never automatic: a 75-second explainer

A vertical (1080 × 1920) animated explainer making one argument: *settlement was never automatic, so why change the pathway for people already following it?*

Information checked: **15 November 2026**.

## Files

| File | What it is |
|---|---|
| `settlement-explainer.html` | Self-contained animation. Play, Pause, Restart, scrub, Present (full screen, controls hidden), optional guide voice and captions. Keys: Space, R, F, Esc, ← / →. |
| `export/settlement-explainer_silent.mp4` | 75 s, 1080 × 1920, 30 fps, no audio. Use this under your own narration. |
| `export/settlement-explainer_guide-voice.mp4` | The same video with a synthetic UK guide voice (Kokoro `bf_emma`, via the stickman skill). Use it for timing reference only. |
| `export/guide-voiceover.mp3` | Guide voice on its own. |
| `export/captions.srt` | Captions timed to the scenes. |
| `src/` | Template, frame-accurate renderer (`render.js`), and the guide-voice line texts are in `src/vo/`. |

To screen-record, open the HTML in Chrome, click **Present** and record the window. It plays from 0 after 0.8 s. A frame-exact MP4 is already in `export/`, so recording is optional.

---

## Voiceover script (timed)

Speak calmly and firmly. Pauses are marked with `/`. The start times match the animation. Keep each line inside its window.

| Scene | Window | Start | Say |
|---|---|---|---|
| 1 | 0:00–0:08 | 0:00.6 | Five years never guaranteed settlement. / It meant we could apply… if we met the requirements. |
| 2 | 0:08–0:20 | 0:09.0 | We already had to meet residence, salary, sponsorship and suitability rules, / and demonstrate English, and knowledge of life in the UK. |
| 3 | 0:20–0:31 | 0:21.0 | Now, many existing migrants face a longer pathway, / after building their careers and family plans around the published rules. |
| 4 | 0:31–0:45 | 0:31.6 | The Migration Advisory Committee estimated a positive lifetime fiscal contribution for general Skilled Worker main applicants. / That is a modelled cohort average. Not a promise about every person. |
| 5 | 0:45–0:59 | 0:46.0 | The real question is what changes when the same people must wait another five years. / That needs evidence on earnings, public spending, job mobility, and people leaving. |
| 6 | 0:59–1:09 | 0:59.8 | Publish the full impact assessment. / Explain the alternatives. / Give everyone already on a five-year route fair transitional protection. |
| 7 | 1:09–1:15 | 1:09.8 | We followed the rules. / Let us complete the pathway. *(then hold silence to 1:15)* |

Guide-voice lengths: 6.6 s, 7.7 s, 7.4 s, 12.9 s, 9.9 s, 8.4 s and 3.6 s. Scene 4 has the least spare time, so do not slow down there.

### Changes from the brief and why

- **Scene 4: the full source is the Annual Report 2025, Table 1.3.** The table gives +£689,000 per person and +£47.7bn for the 2022/23 general Skilled Worker main-applicant cohort. The method is set out in the MAC's separate paper *The Fiscal Impact of Immigration: Static and Dynamic Estimates for the UK* (Dec 2025, p.31). On screen I added "2022/23 arrivals · present value at a 3% real discount rate" and "…not a measure of any settlement policy".
- **Scene 5:** "That requires evidence about…" became "That needs evidence on…" so the line fits its window. I also added an on-screen note. The Home Office response itself lists these effects: a delay in access to public funds, effects on earnings and job mobility, and people leaving. The response says waiting longer "has a fiscally positive impact" through delayed access to public funds, and calls the salary effect "ambiguous". The full impact assessment has **not** been published. The script asks for that evidence and does not claim what it will show.
- **Scene 6:** "Publish the full impact assessments" is now singular. The response promises "a full Impact Assessment" to accompany implementation. "Give people already following the five-year route…" is now "Give everyone already on a five-year route…". The response already gives targeted protection to some cohorts, so the ask is for everyone else on a five-year route.
- **Scene 3:** the screen says **"Announced policy — detailed rules pending"**. It also notes that targeted transitional protection covers *some groups only*, so the video does not imply that nobody is protected.
- **Scene 7:** the voice speaks the closing line. The brief had no voiceover for this scene, so cut the line if you prefer silence.

---

## Accuracy check (as of 15 Nov 2026)

| Claim | Status | Primary source |
|---|---|---|
| A five-year qualifying period means you can apply, not that settlement is automatic. Requirements include residence, salary and continuing sponsorship, suitability, English and Life in the UK | ✅ This matches current Skilled Worker settlement rules. The government response (p.37) says "Being in the UK does not give someone an automatic right to settle". | Gov response, Ch. 8 |
| The 10-year standard pathway is **announced, not in force** | ✅ The Government response was published on 2 Nov 2026. No Statement of Changes implementing it has been laid. HC 584 (Sept 2026) does not include it. Commentators expect the rules to start in the December 2026 Statement of Changes, with implementation during 2027. | Gov response; EIN commentary |
| Existing migrants are affected | ✅ The response says people's applications are ordinarily decided under the rules in force at the decision date, unless transitional provisions apply. Targeted protection covers care workers who entered or switched in before May 2025, certain health and education workers below RQF6, and visa extensions for the pre-April 2024 cohort until 2035. There is no general protection. | Gov response, Ch. 8 |
| Impact assessment published? | ❌ **Not yet.** The response says a full Impact Assessment "will be prepared to accompany the implementation". Check again before you post, and if it has been published, change Scenes 5–6. | Gov response, "Fiscal modelling" section |
| +£689,000 | ✅ This is a modelled cohort mean for 2022/23 general Skilled Worker main applicants, excluding Health & Care, in present value. It is **not** every migrant: H&C main applicants are +£54,000 and Family (Partner) applicants are −£109,000 in the same table. The video does not claim all migrants are net contributors. | MAC Annual Report 2025, Table 1.3 |

Things the video deliberately avoids: claiming the courts have blocked the reforms, attributing political motives, saying all migrants are net contributors, and describing care workers or dependants negatively.

**Not verified:** the "committee email" mentioned in the brief was not included. If it cites anything beyond the sources below, check it separately.

---

## Post caption (paste-ready)

> Settlement was never automatic. After five years we could *apply*, and only if we met the residence, salary, sponsorship, suitability, English and Life in the UK requirements.
>
> The Government has announced a 10-year standard pathway (response published 2 Nov 2026). The detailed Immigration Rules have not yet been laid, and the full impact assessment has not yet been published.
>
> We're asking for three things: publish the full evidence, explain the alternatives, and give fair transitional protection to everyone already on a five-year route.
>
> The £689,000 figure is a modelled average lifetime net fiscal contribution for 2022/23 general Skilled Worker main applicants, excluding Health & Care, in present value. It is not a guarantee for any individual and not an estimate of any settlement policy.
>
> Policy position checked 15 November 2026.
>
> Sources:
> • Home Office, A Fairer Pathway to Settlement: Government response (2 Nov 2026): https://www.gov.uk/government/consultations/earned-settlement/outcome/a-fairer-pathway-to-settlement-government-response-to-the-consultation
> • Earned settlement consultation page: https://www.gov.uk/government/consultations/earned-settlement
> • Migration Advisory Committee, Annual Report 2025, Table 1.3: https://www.gov.uk/government/publications/migration-advisory-committee-annual-report-2025
> • MAC, The Fiscal Impact of Immigration: Static and Dynamic Estimates for the UK (Dec 2025): https://assets.publishing.service.gov.uk/media/6938108633c7ace9c4a41e42/The_Fiscal_Impact_of_Immigration_Final__1_.pdf

---

## Credits

- Guide voice: Kokoro-82M (Apache-2.0) via kokoro-onnx (MIT), generated with the stickman skill's `tts.py` (github.com/krishnagoswami52/stickman-skill, MIT).
- Graphics: original typography and SVG icons. No AI-generated people, no government branding.
