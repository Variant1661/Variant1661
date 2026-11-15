# The Moving Finish Line: voice

| File | What it is |
|---|---|
| `voice.wav` | 55.0 s, 48 kHz mono, 16-bit, −16 LUFS, peak −1.5 dBFS. This is the format `templates/audio/mix.py` expects. |
| `voice.mp3` | The same voice as an MP3, for listening. |
| `words.json` | 83 words as `{"w","s","e"}` in seconds on the film timeline. Every beat's alignment matched the script word for word. |
| `auditions/` | Beat 2 read by `bm_george` (used), `bm_lewis` and `bf_emma`, for comparison. |

The voice is Kokoro `bm_george` (calm UK male) at speed 0.9; beat 5 is at 0.97 so it fits its window. It was generated with the stickman skill's `tts.py`. Kokoro has no Indian-English voice. If you want Arjun's own voice, record the five lines below at the same start times, then re-run the word timing.

## Beats placed on the timeline

| Beat | Window | Voice starts | Voice ends | Line |
|---|---|---|---|---|
| 1 | 0–9 s | 0.8 | 6.1 | We came to build a life… knowing settlement had conditions. |
| 2 | 9–21 s | 9.2 | 20.9 | We worked. We paid our taxes. We planned to meet every requirement. Five years meant we could apply. Never that it was automatic. |
| 3 | 21–34 s | 21.6 | 31.9 | Then came plans to extend the journey… for many people already here. The future we'd planned suddenly felt uncertain. |
| 4 | 34–45 s | 35.0 | 42.3 | Behind every policy are people. Trying to plan a career, a family… a home. |
| 5 | 45–52 s | 44.9 | 51.9 | We're not asking for automatic settlement. We're asking for fair protection, to finish the path we joined. |
| 6 | 52–55 s | — | — | (music only) |

Beat 2 fills its window. If your 2c subtitle markers ("✔ English ✔ Life in the UK") need longer on screen, move the beat 3 cut later rather than speeding up the voice.

## Script and fact notes (checked 15 Nov 2026 against the Home Office response, 2 Nov 2026)

- **"Plans to extend the journey… for many people already here"** is accurate. The response confirms there is no general exemption for people already in the UK.
- **Your policy note's wording needs a fix.** It says "On 2 November 2026, the standard qualifying period … will increase". 2 November is the date the policy was *announced*; it is not in force. Your Scene 3 caption already says this correctly.
- **Commencement date.** Your note says the changes are "likely in force late Dec 2026 / early Jan 2027". The sources I checked say the rules will *start being laid* in the December 2026 Statement of Changes, with implementation "over the course of 2027". I did not open the Fragomen or DAC Beachcroft pages, so check them before quoting any date. Your suggested post line, "Based on the Government's settlement announcement of 2 November 2026", avoids the issue.
- **Protection is wider than your note says.** Besides the pre-April 2024 Skilled Worker extensions to 2035, the response keeps a five-year route for care workers who entered or switched in before May 2025, and for certain health and education workers below RQF6. Arjun works in HR and payroll at a care home but is not a care worker, so the story still holds. Just don't imply that nobody is protected.

## Departures from the skill's defaults (your instructions win)

- **Burned-in subtitles:** the skill's rules say "no captions". Your plan asks for subtitles plus the Scene 3 caption.
- **Music:** soft piano and strings instead of the march score. `templates/audio/music.py` needs a new cue, not the march.
- **Characters:** Arjun, Meera and the background workers (nurse, engineer, parent with child) are new characters in the skill's flat-card style, with no caricature.
- **Length:** 55 s, a little under the skill's 55–70 s norm.
