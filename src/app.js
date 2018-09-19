console.log('App.js running');

const app = {
	title: 'Indecision App',
	subtitle: 'Can\'t decide what to do?',
	options: ['One', 'Two']
};

function subtitle(subtitle) {
	return subtitle && <p>{subtitle}</p>
}

function options(options) {
	return (options && options.length > 0) ? 'Here are your options' : 'No Options'
}

const template = (
	<div>
		<h1>{app.title}</h1>
		{subtitle(app.subtitle)}
		<p>{options(app.options)}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

const user = {
	name: 'Joe',
	age: 25,
	location: 'London'
};

function getName(name) {
	return <h1>{name ? name : 'Anonymous'}</h1>
}

function getAge(age) {
	return (age && age >= 18) && <p>Age: {age}</p>
}

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	}
}

const personalInfo = (
	<div>
		{getName(user.name)}
		{getAge(user.age)}
		{getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');
var personalRoot = document.getElementById('personal-info');

ReactDOM.render(template, appRoot);
ReactDOM.render(personalInfo, personalRoot);
