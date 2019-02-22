

const array = [1 ,2 ,5 ,7 ,8, 11, 23]

const mapArray = array.map(e => e * e);
console.log(mapArray);

const filterArray = array.filter(e => e > 7)
console.log(filterArray);

const reduceArray = array.reduce((a, e) => a += e, 0)
console.log(reduceArray);