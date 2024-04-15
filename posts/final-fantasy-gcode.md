---
title: Final Fantasy Victory G-code
permalink: victory-g-code/index.html
description: Celebrate your 3D prints properly
date: 2023-05-27
tags: 3d
layout: layouts/post.njk
---

Almost every 3D printer supports monophonic beeps. You can use this to have it play a little tune when your print is done. Of course, the best song you can play is the opening riff from the [Final Fantasy victory fanfare](https://www.youtube.com/watch?v=PZ_7ipJ6Cx8).

In Cura, go here:

 * Preferences
 * Printers
 * (Your printer)
 * Machine Settings
 * End G-code

and append these commands to the bottom:

```
M300 P68 S156
M300 P63 S196
M300 P68 S233
M300 P68 S156
M300 P68 S196
M300 P68 S233
M300 P63 S311
M300 P68 S392
M300 P68 S466
M300 P68 S622
M300 P68 S784
M300 P63 S932
M300 P135 S1245
M300 P135 S1245
M300 P130 S1245
M300 P401 S1245
M300 P401 S988
M300 P401 S1109
M300 P266 S1245
M300 P130 S1109
M300 P1203 S1245
G04 10
```

I used [this converter](https://alexyu132.github.io/midi-m300/) with [this MIDI file](https://thefinalfantasy.net/ff1/music-midi.html). The `G04 10` (10ms delay) at the end prevents the speaker from glitching out during the last held note.
