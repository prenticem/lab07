# Problem Domain, Objects, and the DOM
This topic is important to me because I've been wanting to learn how to implement changes to HTML through JS
## References
<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics>.
<https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction>.
<http://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming>.
<https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b>.
## JavaScript Object Basics
**An Object** is an collection of related data and/or functionality.
(Usually consist of several variables and functions).
(Called properties and methods when they are inside objects.)
Objects can contain multiple members, seperated by commas.
**object literal** - writing out the object contents as we've come to create it.
You access objects properties and methods using **dot notation**.
**Bracket notation** provides an alternative way to access object properties.
Ex..   
        Person.age;
        person.name.first;
        bracket notation
        person["age"];
        person["name"]["first"];
Objects are sometimes called associative arrays.
### Javascript Questions
1. Objects store data, for named containers so we can call and find out the data.
2. Write out object contents as we've come to create it.
3. Objects represent things with properties and arrays create and store lists of data in a variable.
4. Bracket notation is prefered when you want to use a variable to access a property.
5. This refers to name, and uses the name used in the const. Its good to quickly use the object prefereed.
## Introduction to the DOM
**DOM** is the data representation of the objects that comprise the structure and content of a document on the web.
DOM allows web pages to be manipulated.
Object orientated representation of web page, modified using javascript.
    const paragraphs = document.querySelectorAll("p");
    // paragraphs[0] is the first <p> element
    // paragraphs[1] is the second <p> element, etc.
    alert(paragraphs[0].nodeName);
This returns all p tags in an element, and puts it in an object.

DOM is a web API.

### DOM Questions

1. DOM is an web API that helps manipulate the HTML in your web page.
2. DOM is independent from JavaScript, it can be used in it however to make changes in your page.

## Things I want to know morea bout

I want to learn more syntax for using DOM.
How do you make more complicated fields for DOM.