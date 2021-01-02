//your code here
import React, { component } from 'react'

export default class X extends React.Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

// Create a Comment component in the file, Comment.js within src /
// don't forget to: import React, { Component } from 'react' at the top of our file
// Use the class X extends Component {} syntax
// export the class so it can be used in other files
// import the class in BlogPost
// It should expect a single prop(the text of a comment), which can be used in the component via: this.props.commentText.This prop is passed in src / BlogPost.js
// It should have a single < div > in its render() method
// 
