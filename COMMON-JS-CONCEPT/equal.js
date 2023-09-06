// tai always triple(===)use korbo
//equal comparisn doesn't work for non-premitive
const n1 = [1, 2];
const n2 = [1, 2];
// double equal num-num, string-string check kore (2--'2' not same) bt
// triple equal num-string o check kore( 2==='2' are same)

if (n1 === n2) {
    console.log('they are equal');
}
else {
    console.log('they are not equal')
}