// var headerTitle = document.getElementById('header-title');
// headerTitle.style.borderBottom = 'solid 3px #000';


// var titleAdd = document.getElementsByClassName('title');
// for (var i = 0; i < titleAdd.length; i++) {
//   titleAdd[i].style.color = 'green';
  
// }
// var li=document.getElementsByClassName('list-group-item');
// for (var i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = 'bold';
//   li[i].style.color = 'red';
// }
//   li[2].style.backgroundColor = 'green'; 


// var li = document.getElementsByTagName('li'); 

// var odd = document.querySelectorAll('li:nth=child(odd)');
// for(var i=0;i<odd.length;i++){
//   odd[i].style.backgroundColor = 'green';
// }
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1'

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4'

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className = 'hello';
newDiv.id = 'hello1';
console.log(newDiv);

var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

