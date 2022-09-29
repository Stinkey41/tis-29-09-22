
let div = document.querySelector('div');
let button = document.querySelector('button');

a.addEventListener('click', function() {
	fetch('./first.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});

b.addEventListener('click', function() {
	fetch('./second.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});

c.addEventListener('click', function() {
	fetch('./third.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});