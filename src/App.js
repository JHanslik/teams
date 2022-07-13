import React from "react";
import "./App.css";
import TeamInfo from "./components/TeamInfo";
import teams from "./teams.json"
import Counter from "./components/Counter";

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      counter: 1,
    }

}


handleClickMinus = (e) => {
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter -1
      })  
    }
}
handleClickPlus = (e) => {
    if (this.state.counter < 48) {
      this.setState({
        counter: this.state.counter + 1
      })  
    }
}


  render() {
    return (
      <main className="d-flex flex-column align-items-center">
        <Counter
          counter={this.state.counter}
          increment={this.handleClickPlus}
          substract={this.handleClickMinus}
        />
        <div className="teams container mt-5">
          <section className="d-flex flex-wrap">
            {teams.filter((team, i) => i < this.state.counter).map(team => ( 
              <TeamInfo
                  logo={team.crestUrl}
                  shortName={team.shortName}
                  venue={team.venue}
                  address={team.address}
                  email={team.email}
                  phone={team.phone}
                  founded={team.founded}
                />
            ))}
            
          </section>
        </div>
      </main>

    );
  }
}

export default App;