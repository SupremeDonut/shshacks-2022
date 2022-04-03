import '../styles/Card.css';
import '../styles/Sea.css';

function Sea() {
	return (
	<div className="sea page" id="sea">
		<h2>Sea</h2>
		<div className='padding'>
		<div className="sea-info info">
			<div className="sea-card card">
			<h2>Shocking Fact</h2>
			</div>
			<div className="sea-card card">
			<h2>Shocking Fact</h2>
			</div>
			<div className="sea-card card">
			<h2>Shocking Fact</h2>
			</div>
		</div>
		<div className="subsection levels">
		<h1>Sea Levels</h1>
			<p>As the oceans warm due to an increasing global temperature, seawater expands—taking up more space in the ocean basin and causing a rise in water level.</p>
		</div>
		<div className="subsection marine">
		<h1>Global warming through sea</h1>
			<p> Global climate change has already had observable effects on the environment. Glaciers have shrunk, ice on rivers and lakes is breaking up earlier, plant and animal ranges have shifted and trees are flowering sooner.  
</p>
		</div>
		<div className="subsection plastic">
		<h1>Coral reefs</h1>
			<p>In the last 30 years, half of the world’s coral reefs have died due to climate change. In Jamaica, which lost 85% of its coral to hurricanes and pollution, “coral gardeners” are nurturing young corals.</p>
		</div>
		interactive thing that will feature plastic being dumped
		</div>
	</div>
	);
}

export default Sea;