import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import API from "./utils/API";

class PortfolioContainer extends Component {
  state = {
    currentPage: "about",
    result: {},
    results: {},
    friends: 0,
    friendList: [],
    breedList: [],
    searchedBreed: ""
  };

  componentDidMount() {
    this.searchRandom("reject");
    this.searchAll();
  }

  searchRandom (swipe) {
    if(swipe === "like"){
      let num = Math.floor(Math.random() * 5);
      console.log(num);
      if(num === 0){
        this.setState({ friends: this.state.friends + 1 });
        let friendArray = this.state.friendList;
        friendArray.push(this.state.result.message);
        this.setState({ friendList: friendArray });
      }
    }
      API.search("Random", "dog")
        .then(function (res){
          if(res.data.status === "success"){
            this.setState({ result: {message: res.data.message} });
          }
        }.bind(this))
        .catch(err => console.log("error :", err));
  }

  searchBreed (event) {
    event.preventDefault();
    API.search("breed", this.state.searchedBreed)
        .then(function (res){
          if(res.data.status === "success"){
            this.setState({ results: res.data.message });
          }
        }.bind(this))
        .catch(err => console.log("error :", err));
  }

  searchAll () {
    API.search("all", "dog")
        .then(function (res){
          if(res.data.status === "success"){
            this.setState({ breedList: res.data.message });
          }
        }.bind(this))
        .catch(err => console.log("error :", err));
  }

  handleInputChange (event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log(this.state.searchedBreed);
  }

  pageState (page) {
    this.setState({ currentPage: page, results: {}, searchedBreed: "" });
  }


  render() {
    return (
      <div>
        <Router>
        <NavTabs currentPage={this.state.currentPage} newPage={this.pageState.bind(this)}/>
        <Switch>
          <Route path="/discover"> <Discover title="random" src={this.state.result.message} newFriend={this.searchRandom.bind(this)} friends={this.state.friends} /> </Route>
          <Route path="/search"> <Search newFriends={this.searchBreed.bind(this)} breeds={this.state.breedList} searchedBreed={this.state.searchedBreed} results={this.state.results} handleInputChange={this.handleInputChange.bind(this)} /> </Route>
          <Route exact path="/"> <About /> </Route>
          <Route path="*"> <About /> </Route>

        </Switch>
        </Router>
      </div>
    );
  }
}

export default PortfolioContainer;
