

// for (i = 0; i <= 10; i++) {

//     if (i > 7) {
//         break;
//     }
//     console.log(i);
// }


// let array = 1;

// while (array < 10) {

//     if (array > 5) {
//         break
//     }
//     console.log(array);
//     array++;
// }


let arrayItems = ['pen', 'notebook', 'book', 'mobile', 'laptop', 'charger']

for (let i = 0; i < arrayItems.length; i++) {
    if (arrayItems[i] === 'mobile') {
        break;
    }
    console.log(arrayItems[i]);
}