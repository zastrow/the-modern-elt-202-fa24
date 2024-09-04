<!-- .slide: class="layout-intro" -->
<div style="width:200px;margin-bottom:20px">
  <img src="/assets/images/logo.svg">
</div>

# Introduction to CSS<!-- .element class="r-fit-text" -->

The visual side of the Web

ELT 202<br>
Web Design II<!-- .element class="footer-content" -->


===

<!-- .slide: class="layout-half" -->

## The 3 Web Technologies

<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="-4 -4 530 412" height="406" width="525" style="margin:0 auto;">
	<g>
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

<!-- .slide: class="layout-half" -->

## The 3 Web Technologies

<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="-4 -4 530 412" height="406" width="525" style="margin:0 auto;">
	<g>
		<path style="opacity:0.3" fill="color-mix(in srgb, #4ae7fd 20%, black)" stroke="#4ae7fd" stroke-width="4" d="M522.8 392.2 449 279.3a8.4 8.4 0 0 0-7-3.8H82.1a8.4 8.4 0 0 0-7 3.8L1.4 392.2c-3.7 5.5.3 13 7 13h507.4a8.4 8.4 0 0 0 7-13Z" />
		<path fill="color-mix(in srgb, #01f5ac 20%, black)" stroke="#01f5ac" stroke-width="4" d="M352.3 138H171.8a8.4 8.4 0 0 0-7 3.8l-69 105.7c-3.7 5.6.3 13 7 13h318.4a8.4 8.4 0 0 0 7-13l-69-105.7a8.4 8.4 0 0 0-7-3.7Z" />
		<path style="opacity:0.3" fill="color-mix(in srgb, #fe3cb0 20%, black)" stroke="#fe3cb0" stroke-width="4" d="M255 3.8 185.7 110c-3.6 5.5.4 13 7 13h138.9a8.4 8.4 0 0 0 7-13L269.1 3.8c-3.3-5-10.7-5-14 0Z" />
	</g>
	<g style="opacity:0.3">
		<text x="50%" y="345" fill="color-mix(in srgb, #4ae7fd 20%, white)" style="font-family:var(--r-main-font);font-size:56px;font-weight:900;transform:translateX(-49%)">HTML</text>
    <text x="50%" y="375" fill="white" style="font-family:var(--r-main-font);font-size:24px;font-weight:500;transform:translateX(-49%)">Foundation (Content)</text>
	</g>
	<g>
		<text x="49%" y="205" fill="color-mix(in srgb, #01f5ac 20%, white)" style="font-family:var(--r-main-font);font-size:56px;font-weight:900;transform:translateX(-50%)">CSS</text>
    <text x="50%" y="235" fill="white" style="font-family:var(--r-main-font);font-size:24px;font-weight:500;transform:translateX(-49%)">Presentation</text>
	</g>
	<g style="opacity:0.3">
    <text x="49%" y="85" fill="color-mix(in srgb, #fe3cb0 20%, white)" style="font-family:var(--r-main-font);font-size:56px;font-weight:900;transform:translateX(-50%)">JS</text>
    <text x="50%" y="110" fill="white" style="font-family:var(--r-main-font);font-size:24px;font-weight:500;transform:translateX(-49%)">Interaction</text>
	</g>
</svg>

===

<!-- .slide: class="layout-left" data-background-image="/assets/images/intro-to-css/zeldman.webp" -->

> Content precedes design. Design in the absence
> of content is not design, it’s decoration.
>
> ### Jeffery Zeldman<br>*Author of **Designing With Web Standards***

===

# What is CSS?

---

===

---

# <span class="hl-color-1">C</span>ascading<br><span class="hl-color-1">S</span>tyle<span class="hl-color-1">s</span>heets

---

===

# <span class="hl-color-1">CSS</span> Terminology<br><br>

===

<dl>
	<dt>Cascade</dt>
	<dd>The order in which a browser reads and applies styles to the DOM.<br><br><br></dd>
</dl>

===

<dl>
	<dt><span class="hl-color-1">D</span>ocument <span class="hl-color-1">O</span>bject <span class="hl-color-1">M</span>odel</dt>
	<dd>A representation the page so that a browser can change the document structure, style, and content.<br><br></dd>
</dl>

===

<dl>
	<dt>Specificity</dt>
	<dd>How the browser decides which styles to apply to the elements of the DOM.<br><br><br></dd>
</dl>

===

<dl>
	<dt>Reuse</dt>
	<dd>The ability for styles to be applied on like elements for consistency and simplicity.<br><br><br></dd>
</dl>

===

# Anatomy of the CSS syntax

===

<!-- .slide: class="layout-bottom" -->

<div class="r-code-font d-flex flex-align-center flex-justify-center" style="margin-block-end: 3em">
	<div class="relative">
		<span class="hl-color-1">p</span> <span class="hl-color-5">{</span>
		<span class="hl-color-4">font-size:</span> <span>24px</span><span class="hl-color-4">;</span>
		<span class="hl-color-5">}</span>
		<div class="absolute r-main-font d-flex fragment" style="top:100%; right:100%; font-size:0.75em">
      Selector <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    </div>
		<div class="absolute r-main-font text-center fragment" style="top:calc(100% + 48px); left:1.5ch; right:0">
			<div style="height:24px;width:100%;border: 2px solid currentcolor;border-block-start:unset"></div>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up" style="translate:0 -50%"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      <div style="font-size:0.75em;translate:0 -70%">Selector Block</div>
    </div>
		<div class="absolute r-main-font text-center fragment" style="bottom: 100%; left:3ch; right:1.5ch">
      <div style="font-size:0.75em;translate:0 50%">Declaration</div>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
			<div style="height:24px;width:100%;border: 2px solid currentcolor;border-block-end:unset"></div>
    </div>
		<div class="absolute r-main-font text-center fragment" style="top:100%;left:4.5ch;translate:0 -20%">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      <div style="font-size:0.75em;translate:0 -50%">Property</div>
    </div>
		<div class="absolute r-main-font text-center fragment" style="top:100%;right:2.5ch;translate:0 -20%">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      <div style="font-size:0.75em;translate:0 -50%">Value</div>
    </div>
	</div>
</div>

<div>

### The CSS ***ruleset*** consists of selectors, selector blocks, declarations, properties, and values

</div>

===

```css[]
h1 {
	font-size: 36px;
	font-weight: bold;
	color: red;
	margin-block: 1em;
}
```
<!-- .element: class="codeblock-large" -->

===

# HTML <span class="hl-color-1 flex-justify-center flex-align-center" style="display:inline-flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" style="height:1em;width:1em;" stroke="currentColor" stroke-width="3" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span> CSS
<!-- .element: class="d-flex" -->

---

How do these technologies work together?

===

<!-- .slide: class="layout-bottom" -->

<div>

# HTML Attribute

High specificity, low reuse

</div>

<div>

```html
<p style="font-size: 20px">Hello</p>
```
<!-- .element: class="codeblock-large" -->

</div>

===

<!-- .slide: class="layout-bottom" -->

<div>

# Style Element

Medium specificity, medium reuse

</div>

<div>

```html
<style>
  p { font-size: 20px; }
</style>
```
<!-- .element: class="codeblock-large" -->

</div>

===

<!-- .slide: class="layout-bottom" -->

<div>

# External File

Low specificity, high reuse

</div>

<div>

```html
<head>
  <link href="css/styles.css" rel="stylesheet">
</head>
```
<!-- .element: class="codeblock-large" -->

</div>

===

# Common Selectors

---

===

<!-- .slide: class="layout-left"  -->

<div>

### Type Selectors

Also known as Element Selectors as they are directly the name of HTML elements<br><br>

</div>

<div>

```css
body {...}
h1 {...}
a {...}
```
<!-- .element: class="codeblock-large" -->

```html
<body>...</body>
<h1>...</h1>
<p>...</p>
```
<!-- .element: class="codeblock-large" -->

</div>

===

<!-- .slide: class="layout-left" -->

<div>

### ID Selectors

Indicated by a hash/pound sign `#` followed by a custom&nbsp;name without any spaces<br><br>

</div>

<div>

```css
#main { ... }
```
<!-- .element: class="codeblock-large" -->

```html
<div id="main">
```
<!-- .element: class="codeblock-large" -->

<small>***Note:*** the ID must be a unique name and there cannot be more than one ID of the same name on a page</small>

</div>

===

<!-- .slide: class="layout-left" -->

<div>

### Class Selectors

Indicated by a<br>period `.` followed<br>by a custom name<br><br><br><br>

</div>
<div>

```css
.myclass { ... }
```
<!-- .element: class="codeblock-large" -->

```html
<p class="myclass">
```
<!-- .element: class="codeblock-large" -->

<small>***Note:*** HTML elements can have multiple classes working together. This allows them to be reusable and versatile</small>

</div>

===

<!-- .slide: class="layout-half" data-visibility="hidden" -->

```html
<ul class="produce-list">
	<li class="item highlight">
		Apples
	</li>
	<li class="item">
		Oranges
	</li>
	<li class="item">
		Mangos
	</li>
</ul>
```

```css
.produce-list {
	list-style: square;
}

.item {
	color: navy;
	font-size: 1.25rem;
}

.highlight {
	background-color: yellow;
}
```

===

<!-- .slide: class="layout-left" -->

<div>

### Selector List

A comma separated list of selectors that will have the same styles applied to matching elements on the page

</div>

<div>

```css
h1, p, .myclass {...}
```
<!-- .element: class="codeblock-large" -->

</div>

===

# Warnings!

---

Some red flags in CSS that need thoughtful consideration before using.

===

<!-- .slide: class="layout-top" -->

<div>

### Universal Selector

Selects all HTML elements on the page

</div>

```css[]
* {
	color: deeppink;
}
```
<!-- .element: class="codeblock-large" -->

===

<!-- .slide: class="layout-top" -->

<div>

### !important

This keyword forces the browser to use only this property and ignore all others despite the cascade order.

</div>

```css[]
.my-class {
	color: red !important;
}
```
<!-- .element: class="codeblock-large" -->

===

<!-- .slide: class="layout-left" -->

## Resources

- [Web.dev](https://web.dev)
- [MDN’s CSS Page](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Can I Use](https://caniuse.com)
- [Digital Ocean CSS Tutorial Series](https://www.digitalocean.com/community/tutorial_series/how-to-style-html-with-css)

===

# Let’s build something!

---

[paz.cc/do-3](https://paz.cc/do3)
