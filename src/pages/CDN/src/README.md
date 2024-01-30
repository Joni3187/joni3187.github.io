# Code Demo

## About

Code_Demo

Project used to "copy to clipboard" a demonstrated piece of code. 


## JAVASCRIPT

<!-- [ Previous Elemenet Sibling ] -->
Element: previousElementSibling property

The Element.previousElementSibling read-only property returns the Element immediately prior to the specified one in its parent's children list, or null if the specified element is the first one in the list.
<!-- [ / Previous Element Sibling / ] -->

``` js

const btns = document.querySelectorAll('.copyBtn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const txt = btn.previousElementSibling.innerText;
        copyToClipboard(txt);
    })
})

async function copyToClipboard(txt) {
    try {
        await navigator.clipboard.writeText(txt)
        console.log(`${txt} was copied successfully`);
    } catch(e) {
        console.error(`Copy failed: ${e}`);
    }
}

```

<!-- [ Next Element Sibling ]  -->
Element: nextElementSibling property

The Element.nextElementSibling read-only property returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list.
<!-- [ / Next Element Sibling / ]  -->

``` js

const btns = document.querySelectorAll('.copyBtn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const txt = btn.nextElementSibling.innerText;
        copyToClipboard(txt);
    })
})

async function copyToClipboard(txt) {
    try {
        await navigator.clipboard.writeText(txt)
        console.log(`${txt} was copied successfully`);
    } catch(e) {
        console.error(`Copy failed: ${e}`);
    }
}

```






## HTML

```html

    <section class="codeDemo">
        
        <code>
            <p>Code Demo</p>
        </code>
        
    </section>

```

## CSS



```css

.body {
    color: blue;
}


```
