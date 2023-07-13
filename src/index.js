import {fetchBreeds, fetchCatByBreed} from "./cat-api";

const bredSelect = document.querySelector('.breed-select');
const loaderMessage = document.querySelector('.loader');
const catContainer = document.querySelector('.cat-info');
const errorMessage = document.querySelector('.error');

errorMessage.classList.add('hide');
bredSelect.classList.add('hide');

fetchBreeds()
    .then((data) => {
        // errorMessage.classList.add('hide');

        bredSelect.insertAdjacentHTML('afterbegin', createMarkup(data))
        loaderMessage.classList.add('hide');
        bredSelect.classList.remove('hide');
    });

const createMarkup = (data) =>{
    // console.log('data', data)
    return data.map(({id, name}) => 
        `<option value=${id}>${name}</option>`
    ).join('');
};

const createCatMarkup = (data) =>{
    catContainer.classList.remove('hide');
    loaderMessage.classList.add('hide');
    console.table('createCatMarkup data',Object.keys(data))
    console.log('first', data[0].breeds[0].url)
    console.table('createCatMarkup data', typeof data)
    return `
        <img class="catImg" src=${data[0].url} alt=${data[0].breeds[0].name}>
        <div class="cat-about">
            <h2 class="catTitle">${data[0].breeds[0].name}</h2>
            <p class="cat-description">${data[0].breeds[0].description}</p>
            <p class="cat-description"><b>Temperament</b>: ${data[0].breeds[0].temperament}</p>
        </div>`
};

const onOptionClick =(e)=>{
    catContainer.classList.add('hide');
    loaderMessage.classList.remove('hide')
    fetchCatByBreed(e.currentTarget.value).then((data)=>{
        console.log('qqqqqqqq', data)
        catContainer.innerHTML = createCatMarkup(data);
    });
};

bredSelect.addEventListener('change', onOptionClick);


