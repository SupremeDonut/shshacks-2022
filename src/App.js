import './styles/App.css';
import Land from './components/Land';
import Air from './components/Air';
import Sea from './components/Sea';
import learn_more from './components/learn_more';
import 'tachyons';
import './scroll';

function App() {
	return (
	<div className="App">
		<header>
			<div className='navbar'>
			<label className='logo'>Climate Change</label>
			<nav>
				<div className="nav-item">
					<h2><a href="#land">Land</a></h2>
					<ul className="nav-hover">
						<li><a href="#">Land Overuse</a></li>
						<li><a href="#">Land Pollution</a></li>
						<li className = 'corner'><a href="#">Deforestation</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2><a href="#Air">Air</a></h2>
					<ul className="nav-hover">
						<li><a href="#">Air Pollution</a></li>
						<li><a href="#">Ozone</a></li>
						<li className = 'corner'><a href="#">Temperature</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2><a href="#sea">Sea</a></h2>
					<ul className="nav-hover">
						<li><a href="#">Sea Levels</a></li>
						<li><a href="#">Marine Life</a></li>
						<li className = 'corner'><a href="#">Plastic in Ocean</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2>Learn More</h2>
				</div>
			</nav>
			</div>
		</header>
		<div className = 'content'>
		<Land />
		<Air />
		<Sea />
		<learn_more />
		</div>
		<footer>
			Made by Daniel, Luke, Rishi, Shreepaad, and Jayesh
		</footer>
    </div>
	);
}

export default App;
