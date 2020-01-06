let formDom = document.getElementById('myForm');
let feildDom = document.getElementById('ourFeild');
let ourList = document.getElementById('ourList');

formDom.addEventListener("submit",(e)=>{
    e.preventDefault();
    createItem(feildDom.value);
})

function createItem(item) {
let itemHtml = `<li>${item} <button onclick="deleteItem(this)">Delete</button> </li>`;
ourList.insertAdjacentHTML('beforeend',itemHtml);
feildDom.value ="";
feildDom.focus();

}

function deleteItem(deletedItem){
    deletedItem.parentElement.remove();
}