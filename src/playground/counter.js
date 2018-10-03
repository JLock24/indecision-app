let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};
const minusOne = () => {
	count--;
	renderCounterApp();
};
const reset = () => {
	count = 0;
	renderCounterApp();
};


var appCounter = document.getElementById('counter');

// As these are last everything above is already done, i.e. count doesn't increment without re-rendering

const renderCounterApp = () => {
	const counterTemplate = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>Plus One</button>
			<button onClick={reset}>Reset</button>
			<button onClick={minusOne}>Minus One</button>
		</div>
	);
	ReactDOM.render(counterTemplate, appCounter);
}

renderCounterApp();