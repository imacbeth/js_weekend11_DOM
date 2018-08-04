document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
      const city = event.target.city.value;
      const country = event.target.country.value;
      const season = event.target.season.value;

      const travellist = document.querySelector('#travel-list');
      const newPlace = document.createElement('li');

      newPlace.textContent = `${city}, ${country}, ${season}`

      newPlace.classList.add("place");

    travellist.appendChild(newPlace);
    form.reset();
  });


  const travellist = document.querySelector('#travel-list');
  const button = document.querySelector('#button');
  button.addEventListener('click', ()=> {
    while (travellist.firstChild) {
      travellist.removeChild(travellist.firstChild);
    }
  });

})
