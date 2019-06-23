'use strict';

function getImages() {
    const number = $('.number').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log('Something went wrong.  Try again later.'));

    
}

function displayResults(responseJson) {
    console.log(responseJson);
    
    let images = responseJson.message;
    console.log(images);
    let dogPic = ``;

    for(let i=0; i<images.length; i++) {
        dogPic = `<img src="${images[i]}" class="results-img" alt="dog picture">`;
        console.log(dogPic);

        $('.results').append(dogPic);
    };
}

function watchForm() {
    $('form').submit(e => {
        e.preventDefault();
        $('.results').html("");
        getImages();
    });
}

$(function() {
    console.log("Ok, let's look at some dogs!");
    
    watchForm();
});