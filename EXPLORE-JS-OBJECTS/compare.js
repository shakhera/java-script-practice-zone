const num1 = { a: 7 };
const num2 = { a: 7 };

if (num1 === num2)
    console.log('they are same');
else
    console.log('they are difference');
// diff hobe, simple solution holo stringify kore newya

const num1String = JSON.stringify(num1);
const num2String = JSON.stringify(num2);
if (num1String === num2String) {
    console.log('they are same');
}
else {
    console.log('they are difference');
}
