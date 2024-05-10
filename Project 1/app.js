btn.addEventListener("click", function () {
  let inp = document.querySelector("#inp");
  let list = document.querySelector("#list");

  let li = document.createElement("li");

  li.className = "item";
  li.innerText = inp.value;
  list.appendChild(li);

  // Add delete button to each item
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "del-btn";
  li.appendChild(document.createTextNode(" ")); // add a space between the text and the button
  li.appendChild(delBtn);

  // Delete functionality for each item
  delBtn.addEventListener("click", function () {
    this.parentElement.remove();
  });
  inp.value = "";
});