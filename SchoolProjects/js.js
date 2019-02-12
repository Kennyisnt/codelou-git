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


//hover to uppercase!
listUL.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    // event.target.textContent = event.target.textContent.toUpperCase();
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});

//unhover to unuppercase
// listDiv.addEventListener('mouseout', (event) => {
//   if (event.target.tagName == 'LI') {
//     event.target.textContent = event.target.textContent.toLowerCase();
//     }
// });






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
  ul.appendChild(li);
  addItemInput.value = '';
});
