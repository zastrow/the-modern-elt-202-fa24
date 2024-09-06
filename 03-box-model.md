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
    --s: calc(var(--p) * 3);
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

&nbsp; <!-- .element class="text-center" style="font-size:0.75em" -->

&nbsp; <!-- .element class="text-center" style="font-size:0.5em" -->


===

#### Padding <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 60%); --pc: color-mix(in srgb, lime, transparent 20%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

&nbsp; <!-- .element class="text-center" style="font-size:0.75em" -->

&nbsp; <!-- .element class="text-center" style="font-size:0.5em" -->


===

#### Border <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 60%); --pc: color-mix(in srgb, lime, transparent 60%);--bc: color-mix(in srgb, yellow, transparent 20%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

&nbsp; <!-- .element class="text-center" style="font-size:0.75em" -->

&nbsp; <!-- .element class="text-center" style="font-size:0.5em" -->


===

#### Margin <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 60%); --pc: color-mix(in srgb, lime, transparent 60%);--bc: color-mix(in srgb, yellow, transparent 60%);--mc: color-mix(in srgb, orange, transparent 20%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

&nbsp; <!-- .element class="text-center" style="font-size:0.75em" -->

&nbsp; <!-- .element class="text-center" style="font-size:0.5em" -->

===

#### Box Model <!-- .element class="text-center" -->

<div class="box-model-demo" style="--cc: color-mix(in srgb, dodgerblue, transparent 40%); --pc: color-mix(in srgb, lime, transparent 40%);--bc: color-mix(in srgb, yellow, transparent 40%);--mc: color-mix(in srgb, orange, transparent 40%);">
	<span class="box-model-demo-text">This content sets the size</span>
</div>

Content &nbsp;|&nbsp; Padding &nbsp;|&nbsp; Border &nbsp;|&nbsp; Margin <!-- .element class="text-center" style="font-size:0.75em" -->

Safari includes Position as its fifth component <!-- .element class="text-center" style="font-size:0.5em" -->

===

# Things to know about working with these boxes

---

And somethings to know about working in web design and development

===

# 1

---

<p class="text-wrap-unset">Height is not your friend!<br>
Only use the <code>height</code> property when it makes sense, otherwise let the content dictate the height of the element</p>

===

# 2

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

# 3

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

# 4

---

Margins overlap and the largest wins<br><br>

===


# 5

---

Paddings compound<br><br>

===

# 6

---

The box model is affected by the value of the `display` property.

===

# 7

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
    margin: 96px auto;
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

# Code Together

---