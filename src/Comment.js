//const { Component } = require("react")

//your code here
//import BlogPost from './BlogPost';

import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return <div className='comment'>{this.props.commentText}</div>;
  }
}

export default Comment;