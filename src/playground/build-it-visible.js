var appRoot = document.getElementById('app');

let show = false;

const toggleDetails = () => {
    show = !show
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{show ? 'Hide details' : 'Show Details'}</button>
            {show && (
                <div><p>Here are some details!</p></div>
            )}
        </div>
    )

    ReactDOM.render(template, appRoot);
};
render();