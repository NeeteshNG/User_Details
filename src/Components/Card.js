import { React, Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div>
        <Link
          state={this.props.data}
          to={`/userdetails/${this.props.data.id}`}
          className="card-container"
          onClick={this.props.onCardClick}
        >
          <div className="card">
            <p>{this.props.data.username}</p>
            <p>Post: {this.props.numPosts}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
