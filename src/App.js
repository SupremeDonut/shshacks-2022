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
						<li><a href="#soil">Climate in soil</a></li>
						<li><a href="#global_warming">Deadly</a></li>
						<li><a href="#deforest">Rainforest</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2><a href="#air">Air</a></h2>
					<ul className="nav-hover">
						<li><a href="#greenhouse_gases">Greenhouse gases</a></li>
						<li><a href="#pollution">Pollution</a></li>
						<li><a href="#atmosphere">Atomosphere</a></li>
					</ul>
				</div>
				<div className="nav-item">
					<h2><a href="#sea">Sea</a></h2>
					<ul className="nav-hover">
						<li><a href="#levels">Sea Levels</a></li>
						<li><a href="#sea_warming">Global warming</a></li>
						<li><a href="#coral_reefs">Coral reefs</a></li>
					</ul>
				</div>
			</nav>
			</div>
		</header>
		<div id = 'land'></div>
		<div className = 'content'>
		<Land />
		<div id = 'air'></div>
		<Air />
		<div id = 'sea'></div>
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
