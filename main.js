// --------Приклад fetch з promices для отримання даних по API---------

// --------------- Курси валют ------------

// --- 1. Отримання даних з сервера ---

// const response = fetch('https://www.cbr-xml-daily.ru/daily_json.js')
// console.log(response);

// async function getCurrencies () {

// }


// --- 1.Example ---
// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     .then(function(data) {
//         return data.json()
//     }).then(function(data) {
//         console.log(data);
//     })


// --- 2.Example ---
async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();

    console.log(data);
    // console.log(data.Valute.UAH.Name, data.Valute.UAH.Value.toFixed(2));
    // console.log(data.Valute.USD.Name, data.Valute.USD.Value.toFixed(2));
    const uahRate = data.Valute.UAH.Value.toFixed(2);
    const usdRate = data.Valute.USD.Value.toFixed(2)

    const usdElement = document.querySelector('#usd');
    const uahElement = document.querySelector('#uah');

    usdElement.innerText = usdRate;
    uahElement.innerText = uahRate;
}

getCurrencies();