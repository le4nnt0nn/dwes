const got = require("got");

// https://gorest.co.in/public/v1/users
// https://gorest.co.in/public/v1/posts
// https://gorest.co.in/public/v1/comments
// https://api.m3o.com/v1/address/LookupPostcode
// https://api.m3o.com/v1/holidays/Countries
// https://pokeapi.co/api/v2/names

async function init(){
    const response = await got('https://gorest.co.in/public/v1/users', { responseType: 'json'});
    console.log(response);
}
 
init();