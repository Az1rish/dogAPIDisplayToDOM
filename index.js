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
}

function watchForm() {
    $('form').submit(e => {
        e.preventDefault();
        getImages();
    });
}

$(function() {
    console.log("Ok, let's look at some dogs!");
    watchForm();
});