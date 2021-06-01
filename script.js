let plustoadd = document.getElementById('addToDo');
let toContainer = document.getElementById('toContainer');
let datatoenter= document.getElementById('inputField');

plustoadd.addEventListener('click', function(){
    var paragraph = document.createElement('h1');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = datatoenter.value;
    toContainer.appendChild(paragraph);
    datatoenter.value=""
  

    paragraph.addEventListener('dblclick',function()
    {
         toContainer.removeChild(paragraph)
    })
})