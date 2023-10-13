import { React, Component } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

class Directory extends Component {
  render() {
    const openUserDetails = (id) => {
      if (this.props.history) {
        this.props.history.push(`/userdetails/${id}`);
      } else {
        console.error("Having History Error.");
      }
    };

    return (
      <div>
        {this.props.data.map((user) => (
          <Link to={{ pathname : `/userdetails/${user.id}`, state : user}}>
            <Card
              key={user.id}
              data={user}
              numPosts={user.posts.length}
              onCardClick={() => openUserDetails(user.id)}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default Directory;
