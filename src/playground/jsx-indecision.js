console.log('App.js running');

const app = {
	title: 'Indecision App',
	subtitle: 'Can\'t decide what to do?',
	options: ['Item One', 'Item Two']
};

function subtitle(subtitle) {
	return subtitle && <p>{subtitle}</p>
}

function options(options) {
	return (options && options.length > 0) ? 'Here are your options' : 'No Options'
}

const onFormSubmit = (e) => {
	e.preventDefault();

	const optionInput = e.target.elements.option.value;
	
	if (optionInput) {
		app.options.push(optionInput);
		e.target.elements.option.value = '';
		renderTemplate();
	}
};

const onRemoveAll = () => {
	app.options = [];
	renderTemplate();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

var appRoot = document.getElementById('app');

const renderTemplate = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{subtitle(app.subtitle)}
			<p>{options(app.options)}</p>
			<button disabled={!app.options.length > 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map((option) => <li key={option}>{option}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
}

renderTemplate();