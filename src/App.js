import './styles/App.css';
import Land from './components/Land';
import Air from './components/Air';
import Sea from './components/Sea';
import learn_more from './components/learn_more';
import 'tachyons';

function App() {
	return (
	<div className="App">
		<header>
			<h1>Climate Change</h1>
			<nav>
				<div className="nav-item">
					<h2><a href="#land">Land</a></h2>
					<ul className="nav-hover">
						<li><a href="#">Land Overuse</a></li>
						<li><a href="#">Land Pollution</a></li>
						<li><a href="#">Deforestation</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2><a href="#air">Air</a></h2>
					<ul className="nav-hover">
						<li><a href="#">Air Pollution</a></li>
						<li><a href="#">Ozone</a></li>
						<li><a href="#">Temperature</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2><a href="#sea">Sea</a></h2>
					<ul className="nav-hover">
						<li><a href="#">Sea Levels</a></li>
						<li><a href="#">Marine Life</a></li>
						<li><a href="#">Plastic in the Ocean</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2>Learn More</h2>
				</div>
			</nav>
		</header>
		<Land />
		<Air />
		<Sea />
		<learn_more />
		<footer>
			Made by Daniel, Luke, Rishi, Shreepad, and Jayesh
		</footer>
    </div>
	);
}

export default App;
