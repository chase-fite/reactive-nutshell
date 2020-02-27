import React, { Component } from "react";
import FriendCard from "./FriendCard";
import { ListGroup } from "react-bootstrap";
import FriendSearch from "./FriendSearch";
import "./Friend.css";

class FriendList extends Component {
  state = {
    loadingStatus: true
  };
  componentDidMount() {
    this.props.getFriends();
    this.setState({ loadingStatus: false });
  }
  render() {
    return (
      <>
      <div className="friend-search-container">
        <h4>Add a Friend:</h4>
        <FriendSearch addFriend={this.props.addFriend} displayNewAlert={this.props.displayNewAlert} {...this.props} />
        </div>
          <div className="friends-flex">
        <ListGroup className="list-group">
          {this.props.friends.map(friend => {
            return (
              <FriendCard
                className="friends__card"
                key={friend.id}
                friend={friend.user}
                deleteFriend={this.props.removeFriend}
              />
            );
          })}
        </ListGroup>
          </div>
      </>
    );
  }
}

export default FriendList;
