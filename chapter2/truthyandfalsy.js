console.log(null == undefined); // true
console.log(null === undefined); // false
// Are these all falsy?
if (!false) {
console.log('falsy_1');
}

else{ console.log('truthy_1'); }

if (!null) {
console.log('falsy_2');
}

else{ console.log('truthy_2'); }

if (!undefined) {
console.log('falsy_3');
}

else{ console.log('truthy_3'); }