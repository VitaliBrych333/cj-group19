document.querySelector(".search_form").addEventListener("keyup", search)
document.querySelector('select').addEventListener('change', startSearch);
window.addEventListener('load', getData);
const dataElements = {
  list: [],
  persons: [],
  places: [],
  select: '',
}

function getData() {
  dataElements.persons = document.querySelectorAll('[data-person]');
  dataElements.list = document.querySelectorAll('[data-list]');
  dataElements.places = document.querySelectorAll('[data-birth]');
  startSearch();
}

function startSearch() {
  const option = document.querySelectorAll('option');
  option.forEach(item => {
    if (item.selected) {
      dataElements.select = item.value;
    }
  })
}

function search() {
  const text = document.querySelector(".search_form input");
  const filter = text.value.toUpperCase();
  switch (dataElements.select) {
    case 'name':
      dataElements.persons.forEach((item) => {
        const i = item.dataset.person - 1;
        if (item.textContent.toUpperCase().indexOf(filter) > -1) {
          dataElements.list[i].style.display = '';
        } else {
          dataElements.list[i].style.display = 'none';
        }
      })
      break;
    case 'place':
      dataElements.places.forEach((item) => {
        const spanValue = dataElements.places[0].childNodes[0].nodeValue;
        const i = item.dataset.birth - 1;
        if (item.textContent.toUpperCase().indexOf(filter) > -1) {
          dataElements.list[i].style.display = '';
        } else {
          dataElements.list[i].style.display = 'none';
        }
      })
      break;
    default:
      dataElements.persons.forEach((item) => {
        const i = item.dataset.person - 1;
        if (item.textContent.toUpperCase().indexOf(filter) > -1) {
          dataElements.list[i].style.display = '';
        } else {
          dataElements.list[i].style.display = 'none';
        }
      })
      break;
  }
}