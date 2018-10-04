import React, { Component } from 'react';
import '../styles/Postform.css';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '' 
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value} );
    }
    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                <h4>Add Post</h4>
                <form id="postForm" name="postForm" onSubmit={this.onSubmit}>
                <label>Title:</label>
                    <input id="title" className="form-control" type="text" name="title" onChange={this.onChange} value={ this.state.title } />
                    <textarea className="form-control" name="body" onChange={this.onChange} value= { this.state.body }></textarea>
                    <div className="form-group">
                        <button form="postForm" type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default PostForm;
