// Adat osztály, amely egy adatot reprezentál
class DataItem {
  constructor(id, name, category) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}

// Kezelő osztály, amely a táblázatot és az adatokat kezeli
class DataManager {
  constructor() {
    this.data = []; // Az adatok tárolására szolgáló tömb
    this.nextId = 1; // Az új adat objektumok számára automatikusan generált ID
  }

  // Adat hozzáadása a listához
  addData(name, category) {
    const newItem = new DataItem(this.nextId, name, category);
    this.data.push(newItem);
    this.nextId++; // Frissítjük az ID-t, hogy ne legyenek ütközések
  }

  // Adatok lekérése
  getData() {
    return this.data;
  }

  // Táblázat frissítése
  renderTable() {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Töröljük az előző tartalmat

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

// Létrehozzuk a DataManager példányt
const dataManager = new DataManager();

// Form kezelése az új adatok hozzáadásához
const form = document.querySelector('#add-item-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Ne frissüljön az oldal

  const name = document.querySelector('#name').value;
  const category = document.querySelector('#category').value;

  if (name && category) {
    dataManager.addData(name, category); // Új adat hozzáadása
    dataManager.renderTable(); // Táblázat frissítése
    form.reset(); // Űrlap törlése
  } else {
    alert('Minden mezőt ki kell tölteni!');
  }
});
