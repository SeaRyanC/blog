To build:
```
npx eleventy
```

Or build and host locally for local development
```
npx eleventy --serve
```

Make an image:
```
cwebp.exe -q 60 -resize 800 0 input.jpeg -o \github\blog\img\output.webp
```

Default header is
```
title: REPLACE ME
permalink: REPLACE-ME/index.html
description: 
date: 2099-01-21
tags:
 - sample
layout: layouts/post.njk
eleventyExcludeFromCollections: true
```
