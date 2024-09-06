<!-- .slide: class="layout-intro" -->
<div style="width:200px;margin-bottom:20px">
  <img src="assets/images/logo.svg">
</div>

# Box Model<!-- .element class="r-fit-text" -->

The structure and space around elements

ELT 202<br>
Web Design II<!-- .element class="footer-content" -->

===

## Every visual object in a web page is an equiangular parallelogram

---

<span>Which is a verbose way of saying a rectangle</span> <!-- .element class="fragment" --><br>
<span>…or in web parlance, a box</span> <!-- .element class="fragment" -->

===

> “I’ll turn him into a flea, a harmless, little flea, and then I’ll put that flea in a box, and then I’ll put that box inside of another box, and then I’ll mail that box to myself, and when it arrives… I’ll smash it with a hammer!”
>
> ### Eartha Kitt<br>*Yzma, **The Emperor’s New Groove***

===

# Four Components of the Box Model*

---

\* Safari includes a fifth in their Box Model display

===

<style>
  .box-model-demo {
    --p: 2em;
    --s: calc(var(--p) * 2.5);
    font-family: var(--r-code-font);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    position: relative;
    font-size: 24px;
    margin: var(--s) auto;
    padding: var(--p);
    border: calc(var(--p) * 0.25) solid var(--bc, transparent);
    box-shadow: inset 0 0 0 var(--p) var(--pc, transparent), 0 0 0 var(--p) var(--mc, transparent);
    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 1;
      inset: var(--p);
      background-color: var(--cc, transparent);
    }
  }
  .box-model-demo-text {
    display: block;
    position: relative;
    z-index: 2;
  }
</style>

#### Content <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 20%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

<p><code>width</code> and <code>height</code> properties change content size</p> <!-- .element class="text-center fragment" style="font-size:0.75em" -->

&nbsp; <!-- .element class="text-center" style="font-size:0.6em" -->


===

#### Padding <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 60%); --pc: color-mix(in srgb, lime, transparent 20%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

<p>Interior spacing around the edges of the box</p> <!-- .element class="text-center fragment" style="font-size:0.75em" -->

&nbsp; <!-- .element class="text-center" style="font-size:0.6em" -->


===

#### Border <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 60%); --pc: color-mix(in srgb, lime, transparent 60%);--bc: color-mix(in srgb, yellow, transparent 20%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

<p>The edge of the box, which can have its own size</p> <!-- .element class="text-center fragment" style="font-size:0.75em" -->

&nbsp; <!-- .element class="text-center" style="font-size:0.6em" -->


===

#### Margin <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 60%); --pc: color-mix(in srgb, lime, transparent 60%);--bc: color-mix(in srgb, yellow, transparent 60%);--mc: color-mix(in srgb, orange, transparent 20%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

<p>The outer edge of the box, defining space between boxes</p> <!-- .element class="text-center fragment" style="font-size:0.75em" -->

&nbsp; <!-- .element class="text-center" style="font-size:0.6em" -->

===

#### Box Model <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 40%); --pc: color-mix(in srgb, lime, transparent 40%);--bc: color-mix(in srgb, yellow, transparent 40%);--mc: color-mix(in srgb, orange, transparent 40%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

Content &nbsp;|&nbsp; Padding &nbsp;|&nbsp; Border &nbsp;|&nbsp; Margin <!-- .element class="text-center" style="font-size:0.75em" -->

Safari includes Position as its fifth component <!-- .element class="text-center fragment" style="font-size:0.6em" -->

===

# Things to know when working with these boxes

---

And somethings to know about working in web design and development

===

# 1

---

The web will err on the side of showing content

===

<div style="display:grid;grid-template-columns:50% 50%;width:100%;gap:2em;">

```css[]
div {
  height: 170px;
  width: 170px;
  font-family: sans-serif;
  font-size: 50px;
  border: 2px solid black;
}
```

<iframe width="100%" height="100%" sandbox srcdoc="<style>body{background:white}div {
  height: 170px;
  width: 170px;
  font-family: sans-serif;
  font-size: 50px;
  border: 2px solid black;
}</style><div>CSS IS AWESOME</div>">

</div>

===

# 2

---

<p class="text-wrap-unset">Height is not your friend!<br>
Only use the <code>height</code> property when it makes sense, otherwise let the content dictate the height of the element</p>

===

# 3

---

The display size of an element is a dimensional property (`height` or `width`) + `padding` values

===

<div>

```css
.element {
  width: 120px;
  padding: 30px 50px;
}
```
<!-- .element: class="codeblock-large" -->

</div>

<div>

### The display width of this element is actually `220px`

</div>

===

# 4

---

The display size can be forced to be the same as dimensional properties value with `box-sizing`

===

<div>

```css[2]
.element {
  box-sizing: border-box;
  width: 120px;
  padding: 30px 50px;
}
```
<!-- .element: class="codeblock-large" -->

</div>

<div>

### The display width of this element is forced to stay `120px`

</div>

===

# 5

---

Margins overlap and the largest margin wins

===

<div style="display:grid;grid-template-columns:50% 50%;width:100%;gap:2em;">

```css[]
h1 {
  font-size: 96px;
  padding: 144px 0;
}

p {
  font-size: 18px;
  padding: 24px 0;
}
```

```html[]
<html>
  <head>...</head>
  <body>
    <h1>My Homepage</h1>
    <p>
      Welcome to my website!
    </p>
  </body>
</html>
```

</div>

===


# 6

---

Paddings compound and can cause issues<br><br>

===

<div style="display:grid;grid-template-columns:50% 50%;width:100%;gap:2em;">

```
<style>
  div {
    padding: 40px;
  }
</style>

<div>
  <div>
    <div>
      Nested content
    </div>
  </div>
</div>
```

<iframe width="100%" height="100%" sandbox srcdoc="<style>body{background:white}div{padding:40px}</style><div><div><div>Nested content</div></div></div>">

</div>

===

<div style="display:grid;grid-template-columns:50% 50%;width:100%;gap:2em;">

```
<style>
  div {
    padding: 40px;
  }
</style>

<div>
  <div>
    <div>
      Nested content
    </div>
  </div>
</div>
```

<iframe width="100%" height="100%" sandbox srcdoc="<style>body{background:white}div{padding:40px;outline:2px solid deeppink;}</style><div><div><div>Nested content</div></div></div>">

</div>

===

<div style="display:grid;grid-template-columns:50% 50%;width:100%;gap:2em;">

```
<style>
  div {
    margin: 40px;
  }
</style>

<div>
  <div>
    <div>
      Nested content
    </div>
  </div>
</div>
```

<iframe width="100%" height="100%" sandbox srcdoc="<style>body{background:white}div{margin:40px;outline:2px solid deeppink;}</style><div><div><div>Nested content</div></div></div>">

</div>

===

<div style="display:grid;grid-template-columns:50% 50%;width:100%;gap:2em;">

```
<style>
  div {
    padding: 40px;
    margin: 40px;
  }
</style>

<div>
  <div>
    <div>
      Nested content
    </div>
  </div>
</div>
```

<iframe width="100%" height="100%" sandbox srcdoc="<style>body{background:white}div{padding:40px;margin:40px;outline:2px solid deeppink;}</style><div><div><div>Nested content</div></div></div>">

</div>

===

# 7

---

The box model is affected by the value of the `display` property.

More on that next week

===

# 8

---

There are lots of ways to do the same thing. Some are more right, depending on the context.

===

<!-- Instructor Note: This is my opinion and perspective. –Philip Zastrow -->

# My Philosophy

---

Web design is an illusion.<br>You are not creating the thing, you are creating something that looks like the thing.

===

#### For Example <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 40%); --pc: color-mix(in srgb, lime, transparent 40%);--bc: color-mix(in srgb, yellow, transparent 40%);--mc: color-mix(in srgb, orange, transparent 40%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

===

```css
  .box-model-demo {
    position: relative;
    margin: 80px auto;
    padding: 32px;
    border: 8px solid yellow;
    box-shadow: inset 0 0 0 32px lime, 0 0 0 32px orange;

    &::before {
      content: "";
      display: block;
      position: absolute;
      inset: 32px;
      background-color: dodgerblue;
    }
  }
```

\* Code simplified from the original <!-- .element style="font-size:0.5em" -->

===

# Assignment

---

Code Together
