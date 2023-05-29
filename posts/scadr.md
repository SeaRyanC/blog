---
title: "scadr: renders multi-part OpenSCAD files"
permalink: posts/scadr/index.html
description: Makefiles are so 1987. Use `scadr` to make .stl files without the mess.
date: 2023-05-27
tags:
 - 3d
 - typescript
 - openscad
layout: layouts/post.njk
---

This solves a few very annoying problems:

> Given an OpenSCAD file that produces multiple parts, how do I get an `.stl` file for each of them?

and

> How do I easily make an OpenSCAD file that renders in low resolution in preview, but high resolution in output?

This solution doesn't require any awkward makefiles or other scripts and can just use a module naming convention. I like it.

Now live at https://github.com/SeaRyanC/scadr#readme
