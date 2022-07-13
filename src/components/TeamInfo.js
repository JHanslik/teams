import React from "react";

class TeamInfo extends React.Component {

    render() {
        return (
            <article className="card mb-3 ms-0 p-5">
                <div className="mobile d-flex align-items-center mb-4">
                    <img src={this.props.logo} alt="Team's Logo" className="col-5 me-4"/>
                    <div>
                        <h2 className="card-title">{this.props.shortName}</h2>
                        <p>Venue: {this.props.venue}</p>
                        <p>Address: {this.props.address}</p>
                        <p>Email: {this.props.email}</p>
                        <p>Phone: {this.props.phone}</p>
                        <p>Founded in {this.props.founded}</p>
                    </div>
                </div>
            </article>
        );
      }
}    

export default TeamInfo;