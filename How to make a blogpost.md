# How to make a blogpost

1. Create a file in the src/pages/blog directory with the name of the page you want to create. (will show up as kodamasoft.com/blog/[page name]) 
2. Fill the metadata at the top of the file following this template : 

```
---
layout: ../../layouts/BlogPostLayout.astro 
title: 
date: // 
author:
---
```

> ⚠️ Don't change the `layout` part unless told to (in case of special layout for a specific blog post). <br>
> ℹ️ You can use https://timestampgenerator.com/ to generate an ISO 8601 timestamp for the `date` field

3. Just write your content in the file using Markdown. https://www.markdownguide.org/basic-syntax/