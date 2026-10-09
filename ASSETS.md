# Assets

Every asset used in the game, with its source and licence. Only CC0 or clearly licensed assets.

| Asset | Source | Licence | Notes |
| --- | --- | --- | --- |
| public/favicon.png | Phaser Vite TypeScript template | MIT | |
| Fredoka font, weight 600 (the game's font) | Google Fonts: https://fonts.google.com/specimen/Fredoka. Bundled since 2026-10-08: public/assets/fonts/fredoka-600-*.woff2 (Latin and Latin Extended), declared in public/fonts.css; licence text in public/assets/fonts/OFL.txt | SIL Open Font License 1.1 | Rounded font for the cozy look prototype. |
| Bebas Neue font | Google Fonts: https://fonts.google.com/specimen/Bebas+Neue. Bundled: public/assets/fonts/bebas-neue-400-*.woff2, public/fonts.css, licence in OFL.txt | SIL Open Font License 1.1 | Tall poster lettering for the summer-poster screens (day title cards). |
| Caveat font, weight 600 (album captions) | Google Fonts: https://fonts.google.com/specimen/Caveat. Bundled: public/assets/fonts/caveat-600-*.woff2, public/fonts.css, licence in OFL.txt | SIL Open Font License 1.1 | A handwriting face for the family album's captions (Josh, 2026-10-07: "let's try the other font"). |
| Cozy people (src/game/cozyCharacter.ts, preview at ?people=1) | Drawn in code for this game, 2026-10-02 | Original work, no third-party asset | Painted with the browser's 2D canvas from each outfit in src/data/rivals.json; screenshots in docs/research/people/. |
| public/assets/audio/porch.* | "Gone Fishin'" by Memoraphile (You're Perfect Studio): https://opengameart.org/content/gone-fishin. Downloaded 2026-10-06. | CC0 (also offered as CC-BY 4.0 and OGA-BY 3.0; we use CC0) | Loudness-normalised (-18 LUFS), re-encoded as Opus (.ogg) and AAC (.m4a). The porch loop. |
| public/assets/audio/win.* | "The Reel Winner" by Memoraphile, same page | CC0 | Re-encoded. The match-won jingle. |
| public/assets/audio/champion.* | "Victory" by celestialghost8, https://opengameart.org/content/victory (downloaded 2026-10-08) | CC0 | Trimmed to 4 s with a 0.3 s fade, mono, normalised to -18 LUFS, re-encoded as Opus and AAC. The County win's fanfare. |
| public/assets/audio/lawn.*, final.* | "Stage 1" and "Boss Fight" from "4 Chiptunes (Adventure)" by Juhani Junkala (SubspaceAudio): https://opengameart.org/content/4-chiptunes-adventure | CC0 (also stated in the pack's INFO.txt) | Normalised, re-encoded. Lawn and final loops. |
| public/assets/audio/reward.* | "Stage Select" from the same pack | CC0 | Normalised, re-encoded. The reward screen. |
| public/assets/audio/dayWon.* | "bgm_stage_final" (Retro Sports) from "12 Music Loops" by Juhani Junkala: https://opengameart.org/content/12-music-loops | CC0 | Normalised, re-encoded. The won day's postcard. |
| public/assets/audio/fanfare.* | sfx_sounds_fanfare1 from "The Essential Retro Video Game Sound Effects Collection [512 sounds]" by Juhani Junkala: https://opengameart.org/content/512-sound-effects-8-bit-style | CC0 | Mono, re-encoded. A special fired. |
| public/assets/audio/lose.* | jingles_PIZZI07 from "Music Jingles" by Kenney: https://kenney.nl/assets/music-jingles. Downloaded 2026-10-06. | CC0 | Re-encoded. The match-lost jingle. |
| public/assets/audio/knock*, kubbFall*, grass*, road*, toss*, kingHit*, plank*, bell.* | "Impact Sounds" by Kenney: https://kenney.nl/assets/impact-sounds (impactWood_medium, impactSoft_heavy, footstep_grass, footstep_concrete, impactSoft_medium, impactWood_heavy, impactPlank_medium, impactBell_heavy_001) | CC0 | Mono 22 kHz, re-encoded as Opus and AAC. |
| public/assets/audio/click*, confirm* | "Interface Sounds" by Kenney: https://kenney.nl/assets/interface-sounds (click_001-004, confirmation_001-004) | CC0 | Mono, re-encoded. |
| public/assets/audio/coins*, cloth* | "RPG Audio" by Kenney: https://kenney.nl/assets/rpg-audio (handleCoins, handleCoins2, cloth1-3) | CC0 | Mono, re-encoded. |
| public/assets/audio/cardSlide*, cardPlace* | "Casino Audio" by Kenney: https://kenney.nl/assets/casino-audio (card-slide-1-3, card-place-1-3) | CC0 | Mono, re-encoded. |
| public/assets/audio/shopBell.* | bell_01 from "100 CC0 SFX" by rubberduck: https://opengameart.org/content/100-cc0-sfx | CC0 | Mono, re-encoded. The game plays it three times, softer each time, for a spring bell (src/game/sound.ts `shopBell`). |
| public/assets/audio/kingRoll.* | "Drum Roll, Concert Band" (Esprit de Corps, 1997, track 10) by the United States Air Force Band: https://commons.wikimedia.org/wiki/File:Drum_Roll_-_Concert_Band_-_United_States_Air_Force_Band.mp3 | Public domain (work of the US federal government, PD-USGov-Military-Air Force) | 2.5 s cut from 0:10 with a swell-in, looped under a throw at the king. |
| public/assets/portraits/*.png (album portraits) and public/assets/photos/ice-cream*.png (the ice cream run) | Drawn in code for this game by the visual designers, 2026-10-07 (docs/album/portraits/*.py, docs/album/photos/ice_cream.py), exported by scripts/portraits_export.py | Original work, no third-party asset | Pixel art in the game's own palette. |
| Made-in-code sounds (whoosh, tick, hop, sparkler, firecracker, low boom, earthquake, wind, early-king "wah", Shield bwomp and pop, turn notes, "not allowed" tap, the grandstand cheer, fireworks) | Made in code for this game (src/game/sound.ts), settings from Josh's sound board picks | Original work | No files. |
