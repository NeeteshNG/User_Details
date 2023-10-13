import {React, Component} from 'react';

class PostPopUp extends Component {
  render() {
    return (
      <div className="post-details-popup">
        <div className="post-details">
          <h3>Post Details</h3>
          <img alt='A Post Content' src={this.props.post.url} />
          <p>{this.props.post.content}</p>
          <button className="buttons" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default PostPopUp;