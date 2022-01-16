const url = require('url');
const myurl = new URL('http://mywebsite.com/hello.html?id=100&status=acitve');

//Serialized URL
console.log(myurl.href)
// Host (root domain)
console.log(myurl.host) 
// Hostname
console.log(myurl.hostname) // does not get port
// pathname
console.log(myurl.pathname)
// Serialized query
console.log(myurl.search)
// Params object
console.log(myurl.searchParams)
myurl.searchParams.forEach((value, name)=> console.log(`${name}: ${value}`))