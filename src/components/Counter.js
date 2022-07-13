import React from "react";

class Counter extends React.Component {
    render(){
        return (
                <div className="counter d-flex justify-content-center align-items-center w-10 border m-2 bg-light">
                    <button className="bg-danger m-2 btn-lg" onMouseDown={this.props.substract}>
                        <i class="bi bi-dash-circle-fill"></i>
                    </button>
                    <h2>{this.props.counter}</h2>
                        <button className="bg-success m-2 btn-lg" onClick={this.props.increment}>
                    <i class="bi bi-plus-circle-fill"></i>
                    </button>
                    <h3>{this.props.title}</h3>
                </div>
        )
    }
}

export default Counter