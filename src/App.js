import './styles/App.css';
import Land from './components/Land';
import Air from './components/Air';
import Sea from './components/Sea';

function App() {
	return (
	<div className="App">
		<header>
			<h1>Climate Change</h1>
			<nav>
				<div className="nav-item">Land</div>
				<div className="nav-item">Air</div>
				<div className="nav-item">Sea</div>
			</nav>
		</header>
		<Land />
		<Air />
		<Sea />
		<footer>
			Made by Daniel, Luke, Rishi, Shreepad, and Jayesh
		</footer>
    </div>
	);
}

export default App;
