var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("Mention the task!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }



//-------------------------------------------------------------------------------


  var li1 = document.createElement("li");
  var inputValue1 = document.getElementById("mydes").value;

  var li2 = document.createElement("li");
  var inputValue2 = document.getElementById("mydead").value;

  var t1=document.createTextNode(inputValue1);
  var t2=document.createTextNode(inputValue2);

  li1.appendChild(t1);
  if(inputValue1 === '')
  {
    alert("write description!");
  }
  else{
    document.getElementById("myUL").appendChild(li1);
  }

  li2.appendChild(t2);
  if(inputValue2 === '')
  {
    alert("mention deadline..");
  }
  else{
    document.getElementById("myUL").appendChild(li2);
  }




//-----------------------------------------------------------------

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

//--------------------------------------------------------------------


//--------------------------------------------------------------------

document.getElementById("mydes").value = "";
document.getElementById("mydead").value = "";

var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\u00D7");

  var span2 = document.createElement("SPAN");
  var txt2 = document.createTextNode("\u00D7");

  span1.className = "close";
  span1.appendChild(txt1);
  li1.appendChild(span1);

  span2.className = "close";
  span2.appendChild(txt2);
  li2.appendChild(span2);

//------------------------------------------------------------------------

var close = document.getElementsByClassName("close");
var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}


function removeAll(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}