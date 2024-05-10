const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mergeArrays(...arrays) {
    const mergedArray = [].concat(...arrays); // Объединение всех массивов в один массив
    
    mergedArray.sort((a, b) => b - a); // Сортировка массив по убыванию
    
    return mergedArray.join(' '); // Преобразование массива в строку, разделяя элементы пробелами
}

// Функция для ввода массива
function inputArray() {
    return new Promise((resolve, reject) => {
        rl.question('Введите массив цифр через пробел: ', (input) => {
            const array = input.split(' ').map(Number);
            resolve(array);
        });
    });
}

// функция для объединения массивов, введенных пользователем
async function mergeUserArrays() {
    const arrays = [];
    let mergeAgain = 'да';

    while (mergeAgain.toLowerCase() === 'да') {
        const array = await inputArray();
        arrays.push(array);

        mergeAgain = await new Promise((resolve, reject) => {
            rl.question('Хотите ввести еще один массив? (да/нет): ', (answer) => {
                resolve(answer);
            });
        });
    }

    const result = mergeArrays(...arrays);
    console.log('Результат объединения и сортировки: ', result);

    rl.close();
}

mergeUserArrays();
