const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
//
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
//
const listUL = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

const listItems = document.getElementsByTagName('li');
const lis = listUL.children;
const firstListItem = listUL.firstElementChild;
const lastListItem = listUL.lastElementChild;
firstListItem.style.backgroundColor = 'coral';
lastListItem.style.backgroundColor = 'lime';


//sets button rules
function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className="up";
  up.textContent="up";
  li.appendChild(up);
  let down = document.createElement('button');
  down.className="down";
  down.textContent="down";
  li.appendChild(down);
  let remove = document.createElement('button');
  remove.className="remove";
  remove.textContent="remove";
  li.appendChild(remove);
}

//adds buttons in HTML
for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);

}

//Makes Down/Up/Remove buttons work
listUL.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className=="remove") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className=="up") {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
    }}
    if (event.target.className=="down") {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
    }}

  }
});



//Toggles The List On and Off
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent ='Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent ='Show List';
    listDiv.style.display = 'none';
  }
});

//Writes to Paragraph the contents of the TEXT Field for List Description
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = "";
});

//Add HTML Items to a list (button)
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});
