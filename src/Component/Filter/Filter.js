import React, { Component } from "react";
import styles from "./Filter.module.css";
import { CSSTransition } from "react-transition-group";
import "./Filter.css";

class Filter extends Component {
  render() {
    const contactsLength = this.props.contacts.length;
    return (
      <CSSTransition
        in={contactsLength > 1}
        classNames="label"
        timeout={500}
        unmountOnExit
      >
        <label>
          <input
            className={styles.mainInput}
            name="filter"
            onChange={this.props.onHandleChange}
            value={this.props.filter}
          />
        </label>
      </CSSTransition>
    );
  }
}

export default Filter;
