/*
Truthy
1. true
2. any number (+ve,-ve) will be truthy other than 0
3. any string ----- truthy without empty string
4. '0', 'false'
5. {}, []
6.

Falsy
1. false
2. 0
3. empty string
4. undefined
5. null
*/

const x = {};
if (x) {
    console.log('value of x is truthy');
}

else {

    console.log('value of x is falsy');
}
// check falsy directly
// y true valye ta ke ! kore false kore felbe
const y = null;
if (!y) {
    console.log('valye is falsy');
}
// check true directly
const z = { class: 9 }
if (!!z) {
    console.log('value is truthy');
}

console.log(true + false);