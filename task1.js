function sumUniqueElements(arr) {
    let uniqueElements = [...new Set(arr)]; // Создаем массив уникальных элементов
    let sum = 0;
    
    uniqueElements.forEach(element => {
        sum += element;
    });
    
    return sum;
}

// Ввод массива 
const readline = require('readline').createInterface(
    {
    input: process.stdin,
    output: process.stdout
    }
);

readline.question('Введите элементы массива через пробел: ', input => {
    const array = input.split(' ').map(Number); // Преобразуем введенную строку в массив чисел
    console.log('Введенный массив:', array);
    
    const result = sumUniqueElements(array);
    console.log('Сумма уникальных элементов массива:', result);
    
    readline.close();
});
