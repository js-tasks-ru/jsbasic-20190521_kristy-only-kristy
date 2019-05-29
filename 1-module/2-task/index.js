'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (text) {
	if (text === null) {
		return false;
	}
	const textArray = text.split('');
	if (textArray.length >= 4 && !textArray.includes(' '))
	{
		return true;
	}
	else {
		return false;
	}
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}



