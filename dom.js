// console.dir(document)
// console.log(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.links);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[8]);
// var title = document.all[8];
// title.textContent = "DOM Manipulation"

//Selectors

//GETELEMENTBYID
// const headerTitle = document.getElementById('header-title');
// headerTitle.textContent = "Hello from textContent"
// headerTitle.innerText = "Hello from innerText"
// headerTitle.innerHTML = "Hello from innerHTML property"

//difference is innerText respects styling
// console.log(headerTitle.textContent); //Item Lister I AM SPAN
// console.log(headerTitle.innerText); //Item Lister
// console.log(headerTitle.innerHTML); //Item Lister <span style="display: none;">I AM SPAN</span>

//style ---> camelCase only !!IMPORTANT!!
// headerTitle.style.color = 'plum';
// headerTitle.style.border = '1px solid black';
// headerTitle.style.backgroundColor = 'white';
// headerTitle.style.fontWeight = 'bold';

//GETELEMENTBYCLASSNAME
// const listItems = document.getElementsByClassName('list-group-items');
// console.log(listItems);
// console.log(listItems[0].textContent);
// console.log(listItems[1])
// console.log(listItems[2])
// console.log(listItems[3])

// listItems[0].textContent = "ITEMS AT LEVEL 0";
// listItems[0].style.fontWeight = 'bold';

//error --> cannot set on HTMLCOLLECTION
// listItems.style.backgroundColor = "#f4f4f4";

// for(let i = 0; i < listItems.length; i++) {
//     listItems[i].style.backgroundColor = "#f4f4f4";
// }

// GETELEMENTSYTAGNAME
// const li = document.getElementsByTagName('li');
// // console.log(li);

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
//     li[i].style.fontWeight = 'bold';
// }

//QUERYSELECTOR
// const headerTitle = document.querySelector("#header-title");
// headerTitle.textContent = "Hello JS from QuerySelector";

// const input = document.querySelector('input');
// input.value = "Enter here";

// const submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// const item = document.querySelector('.list-group-items');
// // error bcuz querySelector returns only 1st matching result
// // console.log(listItems.length)

// item.style.backgroundColor = 'plum';

// // select last-child
// const lastItem = document.querySelector('.list-group-items:last-child');
// lastItem.style.backgroundColor = 'seagreen';


// //select first-child
// const firstItem = document.querySelector('.list-group-items:first-child');
// firstItem.style.color = '#fff';
// firstItem.style.fontWeight = 'bold';

// //select nth-child(n)
// const nTHChild = document.querySelector(".list-group-items:nth-child(2)");
// nTHChild.style.backgroundColor = "#f4f4f4";

//QUERYSELECTORALL
const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "#f4f4f4";
    even[i].style.backgroundColor = "#ccc";
}







