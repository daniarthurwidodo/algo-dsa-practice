const array = [1, 2, 3, 4, 5];
const mappedArray = array.map((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
    return element * 2;
});
console.log('Mapped Array:', mappedArray);