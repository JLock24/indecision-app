class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			}
		});
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		});
	}
	handleReset() {
		// Don't need prevState in this one
		this.setState(() => {
			return {
				count: 0
			}
		});
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// OLD VERSION BELOW

// let count = 0;
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };
// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };
// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// };


// var appCounter = document.getElementById('counter');

// // As these are last everything above is already done, i.e. count doesn't increment without re-rendering

// const renderCounterApp = () => {
// 	const counterTemplate = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>Plus One</button>
// 			<button onClick={reset}>Reset</button>
// 			<button onClick={minusOne}>Minus One</button>
// 		</div>
// 	);
// 	ReactDOM.render(counterTemplate, appCounter);
// }

// renderCounterApp();