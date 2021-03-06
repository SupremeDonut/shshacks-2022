import '../styles/Card.css';
import '../styles/Land.css';
import car from '../assets/car.png'

function Land() {
	return (
	<div className="land page" id="land">
		<h2>Land</h2>
		<div className="land-info info">
			<div className="land-card1 card">
				<h2>Shocking Fact</h2>
			</div>
			<div className="land-card2 card">
				<h2>Shocking Fact</h2>
			</div>
			<div className="land-card3 card">
				<h2>Shocking Fact</h2>
			</div>
		</div>
		<div className='padding'>
		<div className="subsection overuse" id="soil">
			<h1>Climate change affects soil</h1>
			<p> Soil moisture has significantly decreased in the Mediterranean region and increased in parts of northern Europe since the 1950s. Continuing declines in soil moisture can increase the need for irrigation in agriculture and lead to smaller yields and even desertification, with potentially dramatic impacts on food production.</p>
		</div>
		<div className="subsection land-pollution" id="global_warming">
			<h1>Why global warming is deadly throughout people</h1>
			<p>Heat waves caused by global warming present greater risk of heat-related illness and death, most frequently among people who have diabetes who are elderly or are very young.</p>
		</div>
		<div className="subsection deforestation" id="deforest">
			<h1> Rainforest destruction is a major cause of carbon dioxide release</h1>
			<p>When they are degraded or completely cleared, e.g. by fire - a process referred to as deforestation - this stored carbon has the potential to be released back into the atmosphere as carbon dioxide and contribute to climate change.</p>
		</div>
		</div>
	</div>
	);
}

export default Land;