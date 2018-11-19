const axios = require('axios');

const getExchangeRate = async (from,to) => {
    try {
        const response = await axios.get('http://daa.fixer.io/api/latest?access_key=878ac73323456b9fa6db85cf6c578b79&format=1');
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];

        if (isNaN(rate)) {
            throw new Error('Rate is NaN')
        }

        return rate;
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}.`)
    }    
};

const getCountries = async (currencyCode) => {
    currencyCode = 'QQQ'
    try {        
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map((country) => country.name);   
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}.`)
    } 
};


// const convertCurrency = (from,to,amount) => {
//     let convertedAmount;
//     return getExchangeRate(from,to).then((rate) => {
//         convertedAmount = (amount*rate).toFixed(2);              
//         return getCountries(to);
//     }).then((countries) => {
//         return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries.join(', ')}.`
//     });
// };

const convertCurrency = async (from, to, amount) => {
    const rate= await getExchangeRate(from,to);
    convertedAmount = (amount*rate).toFixed(2);
    const countries = await getCountries(to);
    return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries.join(', ')}.`
}

const add = async (a,b) => a+b+c;

const doWork = async () => {
    try {
        const result = await add(12,13);
        return result;
    } catch (e) {
        return 10
    }
   
};

doWork().then((data)=> {
    console.log(data);
}).catch((e)=>{
   console.log("Something went wrong", e.stack); 
});

getExchangeRate('USD','QQQ').then((result)=> {
    console.log(result);
}).catch((e)=> {
    console.log(e);
})