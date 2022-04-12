const notes = document.getElementById("textbook");

notes.oninput=function(){
  setValue();
}

window.onload=function(){
  notes.value=localStorage.getItem("input");

}

clearButton.onclick=function(){
  notes.value='';
  setValue();
}

function setValue(){
  localStorage.setItem("notes",inInput.value)
}