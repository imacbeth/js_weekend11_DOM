document.addEventListener('DOMContentLoaded', () => {


const form = document.querySelector('#new-item-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const travellist = document.querySelector('ul');
  const newPlace = document.createElement('li');
    const city = event.target.city.value;
    const country = event.target.country.value;
    const season = event.target.season.value;

    newPlace.textContent = `${city}, ${country}, ${season}`

  travellist.appendChild(newPlace);
  form.reset();


})

})
