const list = document.querySelector("#messages");

const listItem1 = document.createElement('section');
listItem1.className = "message";
listItem1.textContent = "Ayyyyyyyy";

const listItem2 = document.createElement('section');
listItem2.className = "message";
listItem2.textContent = "Yoooo";

const listItem3 = document.createElement('section');
listItem3.className = "message";
listItem3.textContent = "How are ya?";

const listItem4 = document.createElement('section');
listItem4.className = "message";
listItem4.textContent = "Good, you?";

const listItem5 = document.createElement('section');
listItem5.className = "message";
listItem5.textContent = "Great!";

list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);
list.appendChild(listItem5);

console.log(list);