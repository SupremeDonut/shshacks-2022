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
	}

	createSmoke() {
		const x = document.getElementById("car").getBoundingClientRect().left;
		this.setState({ smokeList: [...this.state.smokeList, <Smoke x={x} />] });
	}

	render() {
		return (
		<div className="air page" id="air">
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
			<div className="subsection air-pollution">
				<h1>Title</h1>
				<p>Info</p>
			</div>
			<div className="subsection ozone">
			<h1>Title</h1>
				<p>Info</p>
			</div>
			<div className="subsection temp">
			<h1>Title</h1>
				<p>Info</p>
			</div>
			<div className="minigame">
				<div className="smokes">{this.state.smokeList}</div>
				<img className="minicar" src={car} id="car" alt="car" onClick={this.fartGas}></img>
			</div>
		</div>
		);
	}
}

export default Air;