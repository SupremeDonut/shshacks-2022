import React from "react"
class Smoke extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			x: props.x,
			render: true,
			opacity: 1
		}
		this.getPosition = this.getPosition.bind(this);
		this.move = this.move.bind(this);
		setInterval(this.move, 50);
		setTimeout(() => this.state.opacity = 0, 100);
		setTimeout(() => {this.state.render = false}, 1000);
	}

	move() {
		this.setState({ time: this.state.time + 2 });
	}

	getPosition() {
		const trans = `translate(${this.state.x - this.state.time * 5}px, ${280 - this.state.time}px)`
		return trans;
	}

	render() {
		if (this.state.render == false) return null;
		return <div className="smoke" style={{ transform: this.getPosition(), opacity: this.state.opacity }}>test</div>
	}
}

export default Smoke;