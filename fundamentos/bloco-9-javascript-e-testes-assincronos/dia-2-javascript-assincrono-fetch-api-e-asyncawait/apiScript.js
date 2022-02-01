// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = ({ joke }) => {
  const h2 = document.getElementById('jokeContainer');
  h2.append(joke);
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const res = fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => appendJoke(data));
  console.log(res);
};

window.onload = () => fetchJoke();
