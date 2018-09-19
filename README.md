# getPreviousUntil
This is a packaged version of the [Chris Ferdinandi](https://gomakethings.com) utility function that gets all previous siblings of an element in the DOM until a selector is found.

## Installation
```
npm i getpreviousuntil
```

## Usage
Given the following markup:
```
<ul>
	<li>Item 1</li>
	<li class="stop-here">Item 2</li>
	<li>Item 3</li>
	<li class="skip-me">Item 4</li>
	<li id="find-me">Item 5</li>
	<li class="skip-me">Item 6</li>
	<li>Item 7</li>
	<li class="stop-here">Item 8</li>
	<li>Item 9</li>
</ul>
```

```
import getnextuntil from 'getnextuntil'

var findMe = document.querySelector('#find-me');

// Returns '<li class="skip-me">Item 4</li>'
var prev = getPreviousSibling(findMe);

// Returns '<li class="stop-here">Item 2</li>'
var prevStop = getPreviousSibling(findMe, '.stop-here');

// Returns '<li>Item 3</li>'
var prevSkip = getPreviousSibling(findMe, ':not(.skip-me)');
```

The `matches()` method was implemented inconsistently with vendor prefixes across many browsers for a while. You should [include a polyfill](https://vanillajstoolkit.com/polyfills/matches/) for it to make sure these work properly.