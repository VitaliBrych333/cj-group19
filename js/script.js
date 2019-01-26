function load() {
  let myInterface;

  fetch('../JSON/interfaceTranslate.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      myInterface = myJson;
    })  

  function handleClickTranslate(e) {
    let objTranslate = myInterface.filter(obj => obj[`${e.target.innerHTML}`])[0][`${e.target.innerHTML}`];
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
    document.querySelector('#name').innerHTML = '';
    document.querySelector('#main').innerHTML = '';
    document.querySelector('#list').innerHTML = '';
    document.querySelector('#about').innerHTML = '';
    document.querySelector('#name').innerHTML = objTranslate.name;
    document.querySelector('#main').innerHTML = objTranslate.main;
    document.querySelector('#list').innerHTML = objTranslate.list;
    document.querySelector('#about').innerHTML = objTranslate.about;  
  }

  function moveNav(e) {
    event.preventDefault()
    document.querySelector('.active').classList.remove('active');
    e.target.parentNode.classList.add('active')
  }

  document.querySelectorAll('#langs a').forEach(i => i.addEventListener('click', handleClickTranslate)
  )

  document.querySelectorAll('nav a').forEach(i => i.addEventListener('click', moveNav) )


}


