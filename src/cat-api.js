import axios from "axios";
import Notiflix from 'notiflix';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
axios.defaults.headers.common["x-api-key"] = "live_XvwZhwf1mIADtV7Au2XWcCdIZQ9MgAzOmtaH5XvZbhRfFKGr65AKBduyHTeHTjiX";
const errorMessage = document.querySelector('.error');
const loaderMessage = document.querySelector('.loader');

// Notiflix.Notify.failure(
//     'Oops! Something went wrong! Try reloading the page!',
//     {
//       timeout: 8000,
//     },
//   );


export const fetchBreeds =()=>{
    console.log('fetchBreeds')
    return axios.get(BASE_URL)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log('error', error);
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        loaderMessage.classList.add('hide');
        // errorMessage.classList.remove('hide');
    })
};

export const fetchCatByBreed = (breedId) =>{
    
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((response) => {
        return response.data;
        })
    .catch((error) => {
        console.log('error', error);
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        loaderMessage.classList.add('hide');
        // errorMessage.classList.remove('hide');
    })
};

// export const fetchCatByBreed = (breedId) =>{
//     return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`).then(
//         (response) => {
//             console.log(response);
//             if (!response.status === 200){
//                 errorMessage.remove('hide');
//                 throw new Error(response.statusText);
//             } 
//             return response.data;
//         }
//     );
// }

// export const fetchBreeds =()=>{
//     console.log('fetchBreeds')

//     return axios.get(BASE_URL).then(
//         (response) => {
//             console.log(response.statusText);
//             if (!response){
//                 errorMessage.remove('hide');
//                 loaderMessage.classList.add('hide');
//                 throw new Error(response.statusText);
//             } 
//             return response.data;
//         }
//     );
// };
