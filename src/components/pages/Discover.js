import React from "react";

function Discover(props) {

  return (
    <div>
      <h1>Make New Friends</h1>
      <h2> Thumbs up on any pups you'd like to meet! </h2>
      <img alt={props.title} className="img-fluid" src={props.src} style={{ height: "300px", width: "300px"}} />
      <br />
      <button onClick={props.newFriend.bind(this, "reject")} className="btn btn-primary" style={{ margin: "20px"}}>
          reject
      </button>
      <button onClick={props.newFriend.bind(this, "like")} className="btn btn-primary" style={{ margin: "20px"}}>
          like
      </button>
      <h2> You have made {props.friends} friends </h2>
    </div>
  );
}

export default Discover;
