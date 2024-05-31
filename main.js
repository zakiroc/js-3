let a = Math.floor(Math.random() *100)
alert(`random orqali chiqgan son : ${a}`)


if (a % 15 == 0){
    alert(`${a}: FizzBuzz`);
} else if (a % 5 == 0) {
    alert(`${a}: Buzz`);
} else if (a % 3 == 0) {
    alert(`${a}: Fizz`);
} else {
    alert(`${a}: bu son Fizz, Buzz va FizzBuzz ham emas`);
}


