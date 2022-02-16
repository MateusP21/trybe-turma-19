const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCrypto = async () => {
  try {
    const response = await fetch(API_URL, { mode: 'cors' });
    const coins = await response.json();
    return coins;
  } catch (error) {
    console.log(error);
  }
};

const appendCoins = async () => {
  const container = document.getElementsByClassName('container');

  const coins = await fetchCrypto();

  const tenCoins = coins.slice(0, 10);

  tenCoins.forEach((coin) => {
    const li = document.createElement(li);
    const p = document.createElement(p);

    p.innerText = `hello`;
    li.appendChild(li);
    container.appendChild(li);
  });
};

window.onload = appendCoins;
