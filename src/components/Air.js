import '../styles/Card.css';
import '../styles/Air.css';
import car from '../assets/car.png'
import Smoke from './Smoke.js';
import React from 'react';

class Air extends React.Component {
	constructor() {
		super()
		this.state = {
		smokeList: [],
		running: false
		}

		this.fartGas = this.fartGas.bind(this);
		this.createSmoke = this.createSmoke.bind(this);
	}

	async fartGas() {
		if (this.state.running) return;
		this.setState({ running: true });
		let interval = setInterval(this.createSmoke, 60);
		const car = document.getElementById("car");
		car.style.animation = "rev 120ms 6";
		await new Promise(r => setTimeout(r, 800));
		car.style.left = "-150px";
		car.style.animation = "run 1s ease-in";
		await new Promise(r => setTimeout(r, 2000));
		car.style.animation = "return 2s ease-out";
		await new Promise(r => setTimeout(r, 2000));
		car.style.animation = "";
		car.style.left = "";
		this.setState({ running: false });
		clearInterval(interval);
		await new Promise(r => setTimeout(r, 1000));
		this.setState({ smokeList: [] });
	}

	createSmoke() {
		const x = document.getElementById("car").getBoundingClientRect().left;
		this.setState({ smokeList: [...this.state.smokeList, <Smoke x={x} />] });
	}

	render() {
		return (
		<div className="air page">
			<h2>Air</h2>
			<div className="air-info info">
				<div className="air-card card">
					<h2>Shocking Fact</h2>
				</div>
				<div className="air-card card">
				<h2>Shocking Fact</h2>
				</div>
				<div className="air-card card">
				<h2>Shocking Fact</h2>
				</div>
			</div>
			<div className='padding'>
			<div className="subsection air-pollution" id="greenhouse_gases">
				<h1>Greenhouse gases</h1>
				<p> Global warming is the increase of Earth's average surface temperature due to greenhouse gases that collect in the atmosphere like a thickening blanket, trapping the sun's heat and causing the planet to warm up.</p>
			</div>
			<div className="subsection ozone" id="pollution">
			<h1> Pollution</h1>
				<p> Based on today’s insufficient global commitments to reduce climate polluting emissions, a rebound in greenhouse gases from a return to high-carbon societies after the pandemic may push 2030 emissions even higher – up to 60 GtCO2e.</p>
			</div>
			<div className="subsection temp" id="atmosphere">
			<h1> Atmosphere effects</h1>
				<p>While heat waves and droughts are becoming more common and intense, rainstorms are also becoming more powerful, sometimes provoking dangerous floods.</p>
			</div>
			<div className="minigame">
				<div className="smokes">{this.state.smokeList}</div>
				<img className="minicar" src={car} id="car" alt="car" onClick={this.fartGas}></img>
			</div>
			</div>
		</div>
		);
	}
}

export default Air;