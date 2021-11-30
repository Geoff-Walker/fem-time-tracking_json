// fetch('./data.json')
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => console.log(data));

// const data = fetch('./data.json')
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => console.log(data[0]));

// console.log(data);

// var data = JSON.parse(ajaxFunction('/data.json'));
// console.log(data);

// fetch('./data.json')
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((json) => {
// 		var jsonData = JSON.parse(json);
// 		console.log();
// 	});

// console.log(jsonData);

// let data;

// function getData(url, cb) {
// 	fetch(url).then((response) => response.json()).then((result) => cb(result));
// }

// const data = getData('./data.json', data);

// console.log({ data });

// getData('./data.json', (data) => console.log({ data }));

// async function getData(url) {
// 	const response = await fetch(url);

// 	return response.json();
// }

// const data = getData('./data.json');

// console.log({ data });

// let jsondata;
// fetch('./data.json')
// 	.then(function(u) {
// 		return u.json();
// 	})
// 	.then(function(json) {
// 		createjson(json);
// 	});

// function createjson(json) {
// 	jsondata = json.map(json);
// }
// console.log(jsondata);

// async function githubUsers() {
// 	let response = await fetch('./data.json');
// 	let jsonData = await response.json();
// 	console.log(jsonData);
// }

// githubUsers();

// console.log(jsonData);

async function getData() {
	const response = await fetch('./data.json');
	var data = await response.json();

	return data;
}

getData();
console.log(data);
