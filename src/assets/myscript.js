const bulmaCollapsibleInstances = bulmaCollapsible.attach('.is-collapsible');
bulmaCollapsibleInstances.forEach(bulmaCollapsibleInstance => {
    console.log(bulmaCollapsibleInstance.collapsed());
});
const modal = document.querySelector('.modal');
const addBtn = document.querySelector('.add-button');
const deleteBtn = document.querySelector('.delete');
addBtn.addEventListener('click', () => {
    modal.classList.toggle('is-active');
});
deleteBtn.addEventListener('click', () => {
    modal.classList.toggle('is-active');
});