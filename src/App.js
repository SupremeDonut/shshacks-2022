import './styles/App.css';
import Land from './components/Land';
import Air from './components/Air';
import Sea from './components/Sea';

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
						<li><a href="#overuse">Land Overuse</a></li>
						<li><a href="#lpoll">Land Pollution</a></li>
						<li><a href="#deforest">Deforestation</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2><a href="#Air">Air</a></h2>
					<ul className="nav-hover">
						<li><a href="#apoll">Air Pollution</a></li>
						<li><a href="#ozone">Ozone</a></li>
						<li><a href="#temp">Temperature</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2><a href="#sea">Sea</a></h2>
					<ul className="nav-hover">
						<li><a href="#levels">Sea Levels</a></li>
						<li><a href="#marine">Marine Life</a></li>
						<li><a href="#plastic">Plastic in Ocean</a></li>
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
