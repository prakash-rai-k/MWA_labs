const { fetch, Params } = require('fetch-nodejs');
const fetchUrl = "http://jsonplaceholder.typicode.com/users/";

const params = new Params()
    .set('page_index', 1)
    .set('page_size', 10)
 
// const users = fetch(fetchUrl, { params: params }).then(res => res.json());
const users = [];
// console.log(users);
fetch(fetchUrl, { params: params })
.then(res => res.json())
.then(
    res => {
        users = res;
    }
)
.catch(err => console.log(err));
console.log(users);
//module.exports = users;