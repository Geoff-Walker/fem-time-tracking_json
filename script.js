/////Selectors

const chronoSelector = document.querySelectorAll('.chrono');
chronoSelector.forEach((element) => {
	element.addEventListener('click', chronoOnClick);
});

//// Variables
let timeframe = 'daily'; /// default starting value;

/////  Get Json Data
let data = {};

fetch('./data.json').then((resp) => resp.json()).then((jsonData) => {
	jsonData.forEach((element) => {
		createRegularCard(element, timeframe);
	});
});

function chronoOnClick(event) {
	timeframe = event.target.innerText.toLowerCase();
	chronoSelector.forEach((element) => {
		element.classList.remove('chrono-active');
	});

	event.target.classList.add('chrono-active');
}

// function updateCards(timeframe);

function createRegularCard(element, timeframe) {
	let title = element['title'];
	let current = element['timeframes'][timeframe]['current'];
	let previous = element['timeframes'][timeframe]['previous'];

	console.log(title, current, previous);
	return;

	` <div class="item item-${title}">
    <div class="block">
      <div class="heading">
        <h3>${title}</h3>
        <img class="options" src="images/icon-ellipsis.svg" alt="Options">
      </div>
    <div class="data">
      <h1>${current}${hrs}</h1>
      <p>Last Last ${timeframe} - ${previous}hrs</p>
    </div>
    </div>
  </div>`;
}
