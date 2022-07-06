console.dir(document);
// gives domain of the web page
console.log(document.domain);
// gives the url of the web page
console.log(document.URL);

// The document attribute can access diferent element
// console.log(document.title);

// console.log(document.doctype);

// console.log(document.head);

// console.log(document.body);

// // console.log(document.all);

// console.log(document.all[10]);

// document.all[10].textContent = "i just change the header!"
// ///

// console.log(document.forms);

// console.log(document.link);
// console.log(document.images);

//////////
////GetElementById

console.log(document.getElementById('header-title'));

// 
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);

headerTitle.textContent = "changes the title again"
headerTitle.innerText = "hello"

headerTitle.style.color = "hotpink"

/////////////////////////////////
//////GeElementByClassName

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[1].style.fontWeight = 'bold';
// items[1].style.fontWeight= 'bold';
// items[1].textContent = 'Skee Wee';
// items[1].style.color = 'green';

// items[0].style.backgroundColor = 'red'; 
// items[0].style.fontWeight = 'bold'; 
// items[0].textContent = 'Ooooop'
// items[0].style.color = 'white';

// items[2].style.backgroundColor = 'blue'; 
// items[2].style.fontWeight = 'bold'; 
// items[2].textContent = 'Zeee Phi'
// items[2].style.color = 'white';



// // if it goes greater than 10 the loop wont work
// // for (let i = 1; i <=10 i++ ) {

// // console.log(i);

//  }


// 
// for (let i = 1; i <=20; i=+2){

//     console.log(i);
// }

// // 
// for (let i = 100; i >= 0; i-=2){

//     console.log(i);
// }
// instead of writing the code over and over again you can use a forloop



// const myDiamonds = ['Snacky','Scary','Lily','IttyBitty'];

// for (let i = 0; i < myDiamonds.length; i++) {
//     console.log(i, myDiamonds[1]);
// }

//changed the whole list color bg color to grey and text color to white//
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = "changing th elist items";
//     items[i].style.color = 'white';
// }


///////////////////////////////////
////////////GetElementByTagName


// selecting a specific array from the list 
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// li[1].textContent = "hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';
// li[1].style.color = 'white';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = " i cahnged the items from the dom";
//     li[i].style.color = 'white';
// }

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px hotpink'; 

// var input = document.querySelector('input');
// input.value = "I just changed the text value in the input box.";

// var submit = document.querySelector('input[type="submit"]');

// submit.value = "HELLO BUTTON";
// // calling the last child node of the index and changing the color 
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var otherItem = document.querySelector('.list-group-item:nth-child(2)');
// otherItem.style.color = 'green';

/////////////////////////////////////////////////////////////////////
// Selecting only the titles to change whatever you want by selecting the title class
var title = document.querySelectorAll('.title');
console.log(title);

title[0].textContent = 'Hello Buddy';
// 
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
// 
for (var i = 0; i < odd.length; i++) {

    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';

}