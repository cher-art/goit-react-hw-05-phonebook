import React, { Component } from "react";
import styles from "./Form.module.css";

const initialState = {
  name: "",
  number: "",
};

class Form extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    this.props.isError && this.props.onSetError();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.state.name === "" || this.state.number === ""
      ? this.props.onSetError()
      : this.props.addContact({ ...this.state });
    this.setState({ ...initialState });
  };

  render() {
    return (
      <form className={styles.contactForm} onSubmit={this.onHandleSubmit}>
        <label className={styles.mainLabel}>
          Name
          <input
            className={styles.mainInput}
            onChange={this.onHandleChange}
            name="name"
            value={this.state.name}
          />
        </label>
        <label className={styles.mainLabel}>
          Number
          <input
            className={styles.mainInput}
            onChange={(e) => this.onHandleChange(e)}
            name="number"
            value={this.state.number}
          />
        </label>
        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
