var listItems = document.querySelectorAll("li");
//loop through all  list-items and add a close btn[default tasks]
listItems.forEach((del) => {
  var span = document.createElement("span");
  span.className = "close-btn";
  var spanValue = document.createTextNode("\u00D7");
  span.appendChild(spanValue);
  del.appendChild(span);
});

//close button to delete task[default tasks]

const closeBtn = document.querySelectorAll(".close-btn");
closeBtn.forEach((close) => {
  close.onclick = function () {
    let parent = this.parentNode;
    parent.style.display = "none";
  };
});

// Adding tasks functions

var add = document.getElementById("addBtn");
add.onclick = function () {
  var list = document.createElement("li");
  var lab = document.createElement("label");
  var inpt = document.createElement("input");
  var inputVal = document.getElementById("input").value;
  inpt.setAttribute("type", "checkbox");
  inpt.setAttribute("id", inputVal);
  lab.setAttribute("for", inputVal);
  var cont = document.createTextNode(inputVal);
  lab.className = "new";
  lab.appendChild(cont);
  list.appendChild(inpt);
  list.appendChild(lab);
  var conc = document.getElementsByTagName("ul")[0];
  inputVal === "" || inputVal === null
    ? alert("Please Fill The Input Field")
    : conc.appendChild(list);

  //Reset Value To Empty
  document.getElementById("input").value = "";

  var listItems = document.querySelectorAll("li");
  //loop through all  list-items and add a close btn[newly Created tasks]
  listItems.forEach((del) => {
    var span = document.createElement("span");
    span.className = "close-btn";
    var spanValue = document.createTextNode("\u00D7");
    span.appendChild(spanValue);
    del.appendChild(span);
  });

  //close button to delete task[newly Created tasks]
  const closeBtn = document.querySelectorAll(".close-btn");
  closeBtn.forEach((close) => {
    close.onclick = function () {
      let parent = this.parentNode;
      parent.style.display = "none";
    };
  });
};
