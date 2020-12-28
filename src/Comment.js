import React, { Component } from 'react';

export default class Comment extends Component {

    componentDidMount() {
        require("./BlogPost.js")
    }

    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}