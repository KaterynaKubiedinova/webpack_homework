export function createList(data) {
	const userList = document.querySelector('.users');

	for(let user of data){
		userList.innerHTML += `<li>${user.id}, ${user.name}, ${user.age}, ${user.email}, ${user.country}, ${user.company}, ${user.birthday}</li>`
	}
}