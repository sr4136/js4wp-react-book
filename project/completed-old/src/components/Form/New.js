import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";

class NewPostForm extends Component {
  state = {
    title: "",
    content: "",
    saved: false
  };

  handleAddNewPost = e => {
    e.preventDefault();
    if (this.state.title) {
      this.props.addNewPost({
        title: this.state.title,
        content: this.state.content
      });
      this.setState({ saved: true });
    } else {
      alert("Title required");
    }
  };
  render() {
    if (this.state.saved === true) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.handleAddNewPost}>
        <h1>Add a New Post</h1>
        <p>
          <label htmlFor="form-title">Title:</label>
          <br />
          <input
            id="form-title"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="form-content">Content:</label>
        </p>
        <Quill
          onChange={(content, delta, source, editor) => {
            this.setState({ content: editor.getContents(), editor });
          }}
        />
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    );
  }
}
export default NewPostForm;
