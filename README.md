# Eleventy Project

Dit is een klein Eleventy-project, gebaseerd op Markdown en Nunjucks includes.  
Het doel is het opzetten van een simpele blogstructuur met minimale styling.



## Project Structuur

```
eleventy-project/
│
├─ src/
│  ├─ _includes/
│  │  └─ base.njk          # basis nunjucks template
│  ├─ _site/               # build output eleventy
│  ├─ about/
│  │  └─ index.html        # about pagina output
│  ├─ about.md             # md voor about
│  ├─ index.html           # home pagina output
│  └─ index.md             # md voor home
├─ .eleventy.js            # configuratie van eleventy
├─ .gitignore              # git ignore 
├─ package.json         
└─ package-lock.json       
```



## _includes/base.njk

- Bevat de basis HTML-structuur van elke pagina  
- Wordt ingeladen in Markdown-bestanden via `layout: base.njk`

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>
</head>
<body>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <a href="/index.html">Home</a> |
      <a href="/about.html">About</a> |
      <a href="/blog.html">Blog</a>
    </nav>
  </header>

  <main>
    {{ content }}
  </main>

  <footer>
    <p>My 11ty Project</p>
  </footer>
</body>
</html>

```
## Voorbeeld markdown

```
---
title: Home
layout: base.njk
---

11ty-project! Hier komt de homepage content.

```

## Onderzoek Tech-Stack

_Hier zijn de links:_

### User experience (UX): Bekijk Gist

### Developer experience (DX): Bekijk Gist

### Content Management experience (CMX): Bekijk Gist


