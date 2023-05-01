// Задание 2

const obj = { name: 'Ayazhan' };

const jsonString = JSON.stringify(obj);

const parsedObj = JSON.parse(jsonString);

const user = { name: 'Olzhas', age: 22 };

localStorage.setItem('user', JSON.stringify(user));

const newUser = JSON.parse(localStorage.getItem('user'));

