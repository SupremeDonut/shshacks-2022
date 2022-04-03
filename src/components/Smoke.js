import React from "react";
import smoke from "../assets/smoke.png";

class Smoke extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			x: props.x,
			opacity: 1
		}
		this.getPosition = this.getPosition.bind(this);
		this.move = this.move.bind(this);
		setInterval(this.move, 50);
		setTimeout(() => this.state.opacity = 0, 100);
	}

	move() {
		this.setState({ time: this.state.time + 2 });
	}

	getPosition() {
		const trans = `translate(${this.state.x - this.state.time * 5 - 80}px, ${220 - this.state.time}px)`
		return trans;
	}

	render() {
		return <img className="smoke" style={{ transform: this.getPosition(), opacity: this.state.opacity }} alt="smoke" src={smoke} ></img>
	}
}

export default Smoke;