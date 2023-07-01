var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000';


var titleAdd = document.getElementsByClassName('title');
for (var i = 0; i < titleAdd.length; i++) {
  titleAdd[i].style.color = 'green';
  
}
var li=document.getElementsByClassName('list-group-item');
for (var i = 0; i < li.length; i++) {
  li[i].style.fontWeight = 'bold';
  li[i].style.color = 'red';
}
  li[2].style.backgroundColor = 'green';


var li = document.getElementsByTagName('li'); 