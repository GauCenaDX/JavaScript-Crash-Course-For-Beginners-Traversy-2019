// DOM

// Note: uncomment the item lists in index.html

// - window is the top-level hierarchy object
// - DOM is from the document object in window
//console.log(window);

// # is for id, . is for class

// Single element selector
const form = document.getElementById('my-form');
console.log(form);

//-- Using JQuery. This only select the first encountered element
console.log(document.querySelector('h1'));

// Multiple elements selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item')); //-- Can't use array method
console.log(document.getElementsByTagName('li'));

// * Generally, we want to use Query Selector

// Loop through objects
const items = document.querySelectorAll('.item');
items.forEach(item => console.log(item));

// Manipulate DOM object
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'How are you?';
ul.lastElementChild.innerHTML = '<h1>Tifa</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

//-- addEventListener('<event>', <function>)
//-- Some button events: 'click', 'mouseover', 'mouseout'
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);

    document.querySelector('#my-form').style.background = 'pink';

    document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Leon</h1>';
});