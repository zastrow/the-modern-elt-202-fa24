<!-- .slide: class="layout-intro" -->
<div style="width:200px;margin-bottom:20px">
  <img src="assets/images/logo.svg">
</div>

# Introduction to HTML<!-- .element class="r-fit-text" -->

The building blocks of the Web

ELT 202<br>
Web Design II<!-- .element class="footer-content" -->


===

<!-- .slide: class="layout-half" -->

## The 3 Web Technologies

<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="-4 -4 530 412" height="406" width="525" style="margin:0 auto;">
	<g class="fragment">
		<path fill="color-mix(in srgb, #4ae7fd 20%, black)" stroke="#4ae7fd" stroke-width="4" d="M522.8 392.2 449 279.3a8.4 8.4 0 0 0-7-3.8H82.1a8.4 8.4 0 0 0-7 3.8L1.4 392.2c-3.7 5.5.3 13 7 13h507.4a8.4 8.4 0 0 0 7-13Z" />
		<path fill="color-mix(in srgb, #01f5ac 20%, black)" stroke="#01f5ac" stroke-width="4" d="M352.3 138H171.8a8.4 8.4 0 0 0-7 3.8l-69 105.7c-3.7 5.6.3 13 7 13h318.4a8.4 8.4 0 0 0 7-13l-69-105.7a8.4 8.4 0 0 0-7-3.7Z" />
		<path fill="color-mix(in srgb, #fe3cb0 20%, black)" stroke="#fe3cb0" stroke-width="4" d="M255 3.8 185.7 110c-3.6 5.5.4 13 7 13h138.9a8.4 8.4 0 0 0 7-13L269.1 3.8c-3.3-5-10.7-5-14 0Z" />
	</g>
	<g class="fragment">
		<text x="50%" y="345" fill="color-mix(in srgb, #4ae7fd 20%, white)" style="font-family:var(--r-main-font);font-size:56px;font-weight:900;transform:translateX(-49%)">HTML</text>
    <text x="50%" y="375" fill="white" style="font-family:var(--r-main-font);font-size:24px;font-weight:500;transform:translateX(-49%)">Foundation (Content)</text>
	</g>
	<g class="fragment">
		<text x="49%" y="205" fill="color-mix(in srgb, #01f5ac 20%, white)" style="font-family:var(--r-main-font);font-size:56px;font-weight:900;transform:translateX(-50%)">CSS</text>
    <text x="50%" y="235" fill="white" style="font-family:var(--r-main-font);font-size:24px;font-weight:500;transform:translateX(-49%)">Presentation</text>
	</g>
	<g class="fragment">
    <text x="49%" y="85" fill="color-mix(in srgb, #fe3cb0 20%, white)" style="font-family:var(--r-main-font);font-size:56px;font-weight:900;transform:translateX(-50%)">JS</text>
    <text x="50%" y="110" fill="white" style="font-family:var(--r-main-font);font-size:24px;font-weight:500;transform:translateX(-49%)">Interaction</text>
	</g>
</svg>

===

<!-- .slide: class="layout-left" data-background-image="assets/images/intro-to-html/Sir_Tim_Berners-Lee.jpg" -->

> The original idea of the web was that it should be a <mark>collaborative</mark> space where you can communicate through sharing information.
>
> ### Tim Burners-Lee<br>*Creator of the Web and HTML*

===

# What is HTML?

---

===

---

# <span class="hl-color-1">H</span>yper<span class="hl-color-1">T</span>ext<br><span class="hl-color-1">M</span>arkup<br><span class="hl-color-1">L</span>anguage

---

===

<dl>
	<dt>Hypertext</dt>
	<dd class="fragment">The links between documents, which creates the web of pages and sites. Links are the most crucial and essential aspect of HTML.</dd>
</dl>

===

<dl>
	<dt>Markup</dt>
	<dd class="fragment">A type of code language category consisting<br>of designated <strong><em>elements</em></strong> which convey<br>the meaning of their contents.</dd>
</dl>

===

# Anatomy of an HTML&nbsp;Element

---

===

<!-- .slide: class="layout-bottom" -->

<div class="text-center r-code-font d-flex flex-align-center flex-justify-center fragment" style="margin-bottom:4em">
  <div class="d-flex relative">
    <span class="hl-color-5">&lt;</span>
    <span class="hl-color-1">tagname</span>
    <span class="hl-color-5">&gt;</span>
    <div class="absolute r-main-font text-center fragment" style="top:100%;left:0; width:100%; font-size:0.75em">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      <br>
      Opening<br>Tag
    </div>
  </div>
  <div class="d-flex relative">
    <span>content</span>
  </div>
  <div class="d-flex relative">
    <span class="hl-color-5">&lt;/</span>
    <span class="hl-color-1">tagname</span>
    <span class="hl-color-5">&gt;</span>
    <div class="absolute r-main-font text-center fragment" style="top:100%;left:0; width:100%; font-size:0.75em">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      <br>
      Closing<br>Tag
    </div>
  </div>
</div>

<div>

### The building blocks of an HTML document are defined by ***tags***


</div>

===

<dl>
	<dt>Semantic Meaning</dt>
	<dd class="fragment">Tags define the type of content and with a <strong><em>specific meaning</em></strong> unassociated with how it looks.</dd>
</dl>

---
Note: This is something to be aware of, but we will cover it in more detail later. However, you will see it discussed in the exercises.

===

<!-- .slide: class="layout-left" -->

<div>

## Common Semantic Elements

---

</div>

<dl class="def-small">
  <dt class="def-term">
    <code>
      <span class="hl-color-5">&lt;</span><span class="hl-color-1">h1</span><span class="hl-color-5">&gt;</span>–<span class="hl-color-5">&lt;</span><span class="hl-color-1">h6</span><span class="hl-color-5">&gt;</span>
    </code>
  </dt>
  <dd>Section Heading elements</dd>
  <dt class="def-term">
    <code>
      <span class="hl-color-5">&lt;</span><span class="hl-color-1">p</span><span class="hl-color-5">&gt;</span>
    </code>
  </dt>
  <dd>Paragraph element</dd>
  <dt class="def-term">
    <code>
      <span class="hl-color-5">&lt;</span><span class="hl-color-1">blockquote</span><span class="hl-color-5">&gt;</span>
    </code>
  </dt>
  <dd>Block Quotation element</dd>
  <dt class="def-term">
    <code>
      <span class="hl-color-5">&lt;</span><span class="hl-color-1">a</span><span class="hl-color-5">&gt;</span>
    </code>
  </dt>
  <dd>Anchor element (a.k.a. Link)</dd>
</dl>

===

# Nonsemantic Elements

---

===

<dl>
	<dt>
    <code>
      <span class="hl-color-5">&lt;</span><span class="hl-color-1">div</span><span class="hl-color-5">&gt;</span>
    </code>
  </dt>
	<dd>Generic block layout element. In a block layout, boxes are laid out one after the other, vertically, beginning at the top of a containing block. Each box's left outer edge touches the left edge of the containing block.</dd>
</dl>

===

<dl>
	<dt>
    <code>
      <span class="hl-color-5">&lt;</span><span class="hl-color-1">span</span><span class="hl-color-5">&gt;</span>
    </code>
  </dt>
	<dd>Generic inline layout element. Within each line box, inline-level boxes are aligned to each other vertically or horizontally, depending on the writing mode. Typically, they are aligned by the baselines of their text.</dd>
</dl>

===

<!-- .slide: class="layout-bottom" -->

***Attributes*** are placed in an element’s opening tag, containing information such as where a link goes, or how an image is read to screen readers, among other possibilities.

<div>

```html [1]
<a href="https://example.com">
	My Website
</a>
```
<!-- .element: class="codeblock-large" -->

</div>

===

# Live coding!

---

Open up your text editor

===

###### Structure of a web page

```html[1-17]
 

















```

===

###### Doctype declares the markup style

```html[1]
<!doctype html>

















```

===

###### The `<html>` contains the document information

```html[2,17]
<!doctype html>
<html>














</html>
```

===

###### The `<head>` contains resources and info

```html[3,7]
<!doctype html>
<html>
  <head>



  </head>
  <body>







  </body>
</html>
```

===

###### A `<meta>` tag provides info about the page

```html[4]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    

  </head>
  <body>







  </body>
</html>
```

===

###### The `<title>` displays in the browser tab

```html[5]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>

  </head>
  <body>







  </body>
</html>
```

===

###### The `<link>` loads resource files from the server

```html[6]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>







  </body>
</html>
```

===

###### The `<body>` contains content

```html[8,16]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>







  </body>
</html>
```

===

###### Sample Web Page Content

```html[9-15]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1>Welcome To My Site</h1>
    </header>
    <main>
      <img src="/img/photo.jpg" alt="Man with white glasses">
      <p>Hi, I’m Philip! I <em>love</em> to make websites.</p>
    </main>
  </body>
</html>
```

===

###### Landmark Elements

```html[9,11,12,15]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1>Welcome To My Site</h1>
    </header>
    <main>
      <img src="/img/photo.jpg" alt="Man with white glasses">
      <p>Hi, I’m Philip! I <em>love</em> to make websites.</p>
    </main>
  </body>
</html>
```

===

###### Block Elements

```html[10,14]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1>Welcome To My Site</h1>
    </header>
    <main>
      <img src="/img/photo.jpg" alt="Man with white glasses">
      <p>Hi, I’m Philip! I <em>love</em> to make websites.</p>
    </main>
  </body>
</html>
```

===

###### Self-Closing Elements

```html[13]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1>Welcome To My Site</h1>
    </header>
    <main>
      <img src="/img/photo.jpg" alt="Man with white glasses">
      <p>Hi, I’m Philip! I <em>love</em> to make websites.</p>
    </main>
  </body>
</html>
```

===

###### Inline Elements

```html[13,14]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1>Welcome To My Site</h1>
    </header>
    <main>
      <img src="/img/photo.jpg" alt="Man with white glasses">
      <p>Hi, I’m Philip! I <em>love</em> to make websites.</p>
    </main>
  </body>
</html>
```

===

###### Save this as `index.html`

```html[1-17]
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Awesome Site</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1>Welcome To My Site</h1>
    </header>
    <main>
      <img src="/img/photo.jpg" alt="Man with white glasses">
      <p>Hi, I’m Philip! I <em>love</em> to make websites.</p>
    </main>
  </body>
</html>
```

===

<!-- .slide: class="layout-left" -->

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Web.Dev Learn HTML](https://web.dev/learn/html)

===

<!-- .slide: class="layout-title" -->
# Questions?
