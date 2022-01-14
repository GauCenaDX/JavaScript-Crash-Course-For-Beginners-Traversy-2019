// Note: comment out the item list in html.index

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//-- addEventListener('<event>', <function>)
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value);

    // Make sure all fields are filled before submit
    if (nameInput.value === '' | emailInput.value === '') {
        //alert('Please enter all fields.');
        msg.classList.add('error'); //-- class from style.css
        msg.innerHTML = 'Please enter all fields';

        // Make alert msg disappear after 3 seconds
        // . setTimeOut(<function>, <milliseconds>)
        // . () means no parameter
        setTimeout(() => msg.remove(), 3 * 1000);
    } else {
        //console.log('Success.');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
