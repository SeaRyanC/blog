---
title: "scadr: renders multi-part OpenSCAD files"
permalink: posts/scadr/index.html
description: makefiles are so 1987
date: 2023-05-28
tags:
 - 3d
 - typescript
 - openscad
layout: layouts/post.njk
---

This solves a very annoying problem:

> Given an OpenSCAD file that produces multiple parts, how do I get an `.stl` file for each of them?

This solution doesn't require any awkward makefiles or other scripts and can just use a module naming convention. I like it.

Now live at https://github.com/SeaRyanC/scadr#readme
