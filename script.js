const currencyContainer = document.getElementById('currency-container');

async function fetchCurrencyRates() {
  try {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayCurrencyRates(data);
  } catch (error) {
    currencyContainer.textContent = 'Could not fetch currency rates';
  }
}

function displayCurrencyRates(rates) {
  const heading = document.createElement('h1');
  heading.textContent = 'Currency Rates';
  currencyContainer.appendChild(heading);
  
  rates.forEach(rate => {
    let currencyName = rate.txt;
    if (currencyName === 'Російський рубль') {
      currencyName = 'Валюта орків';
    }
    const currencyElement = document.createElement('p');
    currencyElement.textContent = `${currencyName}: ${rate.rate}`;
    currencyContainer.appendChild(currencyElement);
  });
}

fetchCurrencyRates();
