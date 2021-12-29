const myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function displayBooks() {
	const books = myLibrary

	books.forEach(book => addBook(book));
}

function addBook(book) {
	const list = document.querySelector('#book-list');

	const row = document.createElement('tr');

	row.innerHTML = `
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.pages}</td>
	<td><input type="checkbox"></td>
	<td><a href="#" class="delete">X</a></td>
	`;

	list.appendChild(row);
}

function removeBook(book) {
	if(book.classList.contains('delete')) {
		book.parentElement.parentElement.remove()
	}
}
function clearFields() {
	document.querySelector('#title').value = '';
	document.querySelector('#author').value = '';
	document.querySelector('#pages').value = '';
}


document.addEventListener('DOMContentLoaded', displayBooks())

document.querySelector('#book').addEventListener('submit', e => {
	e.preventDefault();

	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const pages = document.querySelector('#pages').value;

	if (title == '' || author == '' || pages == '') {
		alert('Fields can not be empty');
	}

	const book = new Book(title, author, pages);

	myLibrary.push(book);
	addBook(book);
	clearFields();
})

document.querySelector('#book-list').addEventListener('click', e => {
	removeBook(e.target);
})

