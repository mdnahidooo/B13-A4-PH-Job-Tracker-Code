1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: getElementById finds one element using its id. It is faster than others. It returns a single element object. No syntax selector (like #, .) needed. When it cannot find any id, it returns null. On the other hand,

querySelector: We can find it by id  (#name), class (.names), tag (div). It returns only the first match. It is also if it finds nothing it’s given null. It is slower than getElementById and getElemensByClassName.

getElemensByClassName: getElemensByClassName also uses CSS selectors. It returns a NodeList (which is like a list, similar to HTMLCollections). We can loop through it. Very useful, if we want we can use forEach on the nodeList loop. It works fast.

querySelectorAll: querySelectorAll also similar to getElemensByClassName. We can also use CSS selectors. It returns a NodeList (which is like a list, similar to HTMLCollections). We can loop through it. Very useful, if we want we can use forEach on the nodeList loop. But it works slower than all. 
