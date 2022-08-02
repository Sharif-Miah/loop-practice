let arrayItems = ['pen', 'notebook', 'book', 'mobile', 'laptop', 'charger']

for (let i = 0; i < arrayItems.length; i++) {
    if (arrayItems[i] === 'mobile') {
        continue;
    }
    console.log(arrayItems[i]);
}