# How to make a blogpost

1. Create a file in the src/pages/blog/\[lang\] directory with the name of the page you want to create. (will show up as kodamasoft.com/blog/[lang]/[page name])
2. Fill the metadata at the top of the file following this template :

```
---
layout: ../../../layouts/BlogPostLayout.astro 
title: 
date: // 
author:
twin: //
---
```

> ⚠️ Don't change the `layout` part unless told to (in case of special layout for a specific blog post). <br>


> ℹ️ You can use https://timestampgenerator.com/ to generate an ISO 8601 timestamp for the `date` field


> ℹ️ Put *true* in the `twin` field if you'll have a blogpost with the same filename on the website. Else put false.
3. Just write your content in the file using Markdown. https://www.markdownguide.org/basic-syntax/