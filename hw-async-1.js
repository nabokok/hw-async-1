console.log('start'); 
const promise1 = new Promise((resolve, reject) => {
console.log(1)
resolve(2)
})
promise1.then(res => {
console.log(res)
})

console.log('end');

// Результат виклику:
// start - синхронний код
// 1 - колбек промісу потрапляє в стек і виконується одразу
// end - синхронний код
// 2 - колбек методу then асинхронний, потрапляє в чергу, виконується останнім


Promise.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error('My Error') })
		.catch(() => 1)
		.then((x) => x + 1)
		.then((x) => console.log(x))
		.catch(console.error)

// Результат виклику: 2
// Перший then додає 1 до аргументу resolve
// Другий then прокидує помилку
// Перший catch не приймає жодних параметрів, повертає 1
// Третій then обробляє promise, який повернений попереднім catch - отримуємо 2
// Четвертий then виведе результат - 2
// Останній catch не відпрацює, бо обробляє лише 2 then, які знаходяться над ним

const promise = new Promise(res => res(2));
	promise.then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .finally(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	    });

// Результат виклику: 
// 2 - 1-ий then приймає аргументом значення функції res і виводить його
// 4 - 2-ий then приймає аргументом значення, яке було повернуте першим then
// undefined - finally метод не приймає аргументів і не передає нічого далі
// 8 - останній then отримує аргументом значення, яке було передане другим then

