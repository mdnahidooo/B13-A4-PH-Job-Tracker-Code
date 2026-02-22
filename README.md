<h2> 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h2>

getElementById: getElementById finds one element using its id. It is faster than others. It returns a single element object. No syntax selector (like #, .) needed. When it cannot find any id, it returns null. On the other hand,

querySelector: We can find it by id  (#name), class (.names), tag (div). It returns only the first match. It is also if it finds nothing it’s given null. It is slower than getElementById and getElemensByClassName.

getElemensByClassName: getElemensByClassName also uses CSS selectors. It returns a HTMLCollections(which is like a live list). We can loop through it. Very useful, if we want we can use a loop on it . It works fast.

querySelectorAll: querySelectorAll finds all elements that match CSS selectors. It returns a NodeList (which is a static list). We can forEach loop through it. Very useful, if we want we can use forEach on the nodeList loop. But it works slower than all. 


<h2>2. How do you create and insert a new element into the DOM?</h2>

Step-1:  Creates a new paragraph element:
const para = document.createElement("p");

Step-2: Add the content of  Attributes: After  creating, we need to add text or classes or styles etc.
const node = document.createTextNode("This is a new paragraph.");

Step-3: Then we need to append the text node to the paragraph element:
para.appendChild(node);

Step-4: Finally we must append the new element to an existing element. 
const element = document.getElementById("div1");

And this code appends the new element to the existing element:
element.appendChild(para);




<h2>3. What is Event Bubbling? And how does it work?</h2>


Event bubbling is when we click on a child element, and the click  “bubbles up” sequentially to its parent, then to the grandparent, and all the way up. 
We can think of it like a bubble in water. When we make a bubble at the bottom, it goes up to the top. Same with events, they start from the element we clicked and go up to the top.


How it works: When we click on something,
Step-1: First, the click happens on the elements we clicked(target).
Step-2: Then it goes to its parent.
Step-3: Then  to the parent’s parent.
Step-4: And it goes until it reaches the top html tag.




<h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>


Event Delegation is a trick where we put one element to listen on a parent element to handle events for many children. Instead of adding a click listener to every button, we can add just one listener to the parent container using event bubbling.


Why is Event Delegation useful:
Less code, better performance.
Uses less memory
Page loads faster
Works for future elements
Great for dynamic content.
It gives clear code
Easier to read and maintain.
Change one place insted of many.




<h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>


preventDefault(): preventDefault() method stops the browser’s normal behavior or default action. For example, clicking a link <a> goes to another page, or clicking the submit button sends to a form. preventDefault() stops these browser actions. So, it has no effect on parents.  On the other hand,


stopPropagation():  stopPropagation() method stops the event from bubbling up to parent elements. Events going to parent elements.  It affects parents.  We use it when elements need to be nested.
