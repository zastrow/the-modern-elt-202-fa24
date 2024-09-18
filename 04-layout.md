<!-- .slide: class="layout-intro" -->
<div style="width:200px;margin-bottom:20px">
  <img src="assets/images/logo.svg">
</div>

# Web Layout

Designing for the Browser

ELT 202<br>
Web Design II<!-- .element class="footer-content" -->

===

# Web Layout Has A Sordid History

---

Tables, Floats, and Flex, oh my!

===

<!-- .slide: class="layout-right" -->

<div>

# Tables

---

Meant for tabular data

</div>

<div>
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hot Dog</td>
        <td>$2.50</td>
      </tr>
      <tr>
        <td>Nachos</td>
        <td>$3.00</td>
      </tr>
      <tr>
        <td>Hamburger</td>
        <td>$4.00</td>
      </tr>
    </tbody>
  </table>
</div>

===

<!-- .slide: class="layout-right" -->

<div>

# Floats

---

Content for text to wrap around

</div>

<div style="color:black">
  <div>
    <p style="font-size:0.875em">This is a great example of some text that is <img src="assets/images/web-layout/coffee.webp" style="float:right;margin-block:0.5em;margin-left: 0.5em;height:200px;width:200px;" alt=""> long enough that a floating content can cause it to wrap around the item. This method works similar to images you may find in print layouts.</p>
  </div>
</div>

===

<!-- .slide: class="layout-right" -->

<div>

# Flexbox

---

A great single axis layout tool

</div>

<div style="display:flex;gap:40px;align-items:center">
  <style>.flex-slide{display:flex;gap:10px}.flex-item{height:40px;width:40px;background:var(--bg)}</style>
  <div>
    <p style="font-size:0.5em">Row</p>
    <div class="flex-slide">
      <div class="flex-item" style="--bg:deeppink"></div>
      <div class="flex-item" style="--bg:gold"></div>
      <div class="flex-item" style="--bg:lime"></div>
      <div class="flex-item" style="--bg:dodgerblue"></div>
      <div class="flex-item" style="--bg:purple"></div>
    </div>
  </div>
  <div>
    <p style="font-size:0.5em">Column</p>
    <div class="flex-slide" style="flex-direction:column">
      <div class="flex-item" style="--bg:deeppink"></div>
      <div class="flex-item" style="--bg:gold"></div>
      <div class="flex-item" style="--bg:lime"></div>
      <div class="flex-item" style="--bg:dodgerblue"></div>
      <div class="flex-item" style="--bg:purple"></div>
    </div>
  </div>
</div>

===

<!-- .slide: class="layout-right" -->

<div>

# Grid

---

The most versatile layout option

</div>

<div>
  <style>
  .grid-slide{
    display:grid;
    gap:10px;
    height: 50vh;
    grid-template-rows:repeat(5,1fr);
    grid-template-columns:repeat(4,1fr);
    grid-template-areas:"h h h h" "s c c c"  "s c c c" "s f f f" "g g g g";
  }.grid-item{background:var(--bg);grid-area:var(--a)}</style>
  <div class="grid-slide">
    <div class="grid-item" style="--bg:deeppink;--a:h"></div>
    <div class="grid-item" style="--bg:orange;--a:s"></div>
    <div class="grid-item" style="--bg:dodgerblue;--a:c"></div>
    <div class="grid-item" style="--bg:lime;--a:f"></div>
    <div class="grid-item" style="--bg:purple;--a:g"></div>
  </div>
</div>


===

<!-- .slide: class="layout-bottom" -->

## `display: grid`

Sets the parent container to create a grid layout with the immediate children

===

<!-- .slide: class="layout-bottom" -->

## `grid-template-columns`

Defines the columns of the grid in a space separated list

===

<!-- .slide: class="layout-bottom" -->

## `grid-template-rows`

Defines the rows of the grid in a space separated list

===

<!-- .slide: class="layout-bottom" -->

## `grid-template-area`

Allow assigning names to easily set a child container to specific row and column span

===

<!-- .slide: class="layout-bottom" -->

## `grid-area`

Used on the child container to specify the area from the parent

===

<!-- .slide: class="layout-bottom" -->

## `gap`

Defines the spacing between rows and columns

===

<!-- .slide: class="layout-bottom" -->

## `row-gap`

Defines the spacing between rows only

===

<!-- .slide: class="layout-bottom" -->

## `column-gap`

Defines the spacing between columns only

===

## There are many, many more grid-related properties

---

Check them out on [mdn.io/grid](https://mdn.io/grid)

===

# Code Together

---




