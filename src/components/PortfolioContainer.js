import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import API from "./utils/API";

class PortfolioContainer extends Component {
  state = {
    currentPage: "home",
    result: {},
    friends: 0
  };

  componentDidMount() {
    this.searchRandom("reject");
  }

  searchRandom (swipe) {
      API.search("Random", "dog")
        .then(function (res){
          if(res.data.status === "success"){
            this.setState({ result: {message: res.data.message} });
            if(swipe === "like"){
              let num = Math.floor(Math.random() * 5);
              console.log(num);
              if(num === 0){
                this.setState({ friends: this.state.friends + 1 });
              }
            }
          }
        }.bind(this))
        .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <Router>
        <NavTabs/>
        <Switch>
          <Route path="/discover"> <Discover title="random" src={this.state.result.message} newFriend={this.searchRandom.bind(this)} friends={this.state.friends}/> </Route>
          <Route path="/search"> <Search /> </Route>
          <Route exact path="/"> <About /> </Route>
          <Route path="*"> <About /> </Route>

        </Switch>
        </Router>
      </div>
    );
  }
}

export default PortfolioContainer;
