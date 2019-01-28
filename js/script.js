function load() {
    let myInterface;

    fetch('../JSON/interfaceTranslate.json')
        .then(response => response.json())
        .then((myJson) => {
            myInterface = myJson;
        });

    function handleClickTranslate(e) {
        const objTranslate = myInterface.filter(obj => obj[`${e.target.innerHTML}`])[0][`${e.target.innerHTML}`];
        document.querySelector('.selected').classList.remove('selected');
        e.target.classList.add('selected');
        ['#name', '#main', '#list', '#name-text', '#about', '#target', '#author', '#article'].map(i => document.querySelector(`${i}`).innerHTML === '');
        document.querySelector('#name').innerHTML = objTranslate.name;
        document.querySelector('#main').innerHTML = objTranslate.main;
        document.querySelector('#list').innerHTML = objTranslate.list;
        document.querySelector('#name-text').innerHTML = objTranslate.nameText;
        document.querySelector('#about').innerHTML = objTranslate.textOne;
        document.querySelector('#target').innerHTML = objTranslate.textTwo;
        document.querySelector('#author').innerHTML = objTranslate.author;
        document.querySelector('#article').innerHTML = objTranslate.article;
    }

    function moveNav(e) {
        event.preventDefault();
        document.querySelector('.active').classList.remove('active');
        e.target.parentNode.classList.add('active');
    }

    document.querySelectorAll('#langs a').forEach(i => i.addEventListener('click', handleClickTranslate));

    document.querySelectorAll('nav a').forEach(i => i.addEventListener('click', moveNav));
}
