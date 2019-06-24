'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
	const ulEl = document.createElement('ul');
	friends.forEach(friend => {
		const liEl = document.createElement('li');
		liEl.innerHTML =`${friend.firstName} ${friend.lastName}`;
		ulEl.appendChild(liEl);
	});
		return ulEl;
	}

 
