import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'Vue'
        }
    }

    handleUsernameChange = (prop) => {
        this.setState({
            username: prop.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        const {username, comments, topic} = this.state;
        return (
            <form>
                <div>
                    <label>Username </label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments </label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Form
