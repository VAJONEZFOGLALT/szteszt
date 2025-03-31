<<<<<<< HEAD
=======

>>>>>>> 8dbc2ddfeb2d6d5c37c51bc4d556de289c6029de
class DataItem {
  constructor(id, name, category) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}

class DataManager {
  constructor() {
    this.data = [];
    this.nextId = 1;
  }
  addData(name, category) {
    const newItem = new DataItem(this.nextId, name, category);
    this.data.push(newItem);
    this.nextId++;
  }

  getData() {
    return this.data;
  }

  renderTable() {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = '';

    this.data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.category}</td>
      `;
      tableBody.appendChild(row);
    });
  }
}

const dataManager = new DataManager();

const form = document.querySelector('#add-item-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const category = document.querySelector('#category').value;

  if (name && category) {
    dataManager.addData(name, category);
    dataManager.renderTable();
    form.reset();
;
  }
});
