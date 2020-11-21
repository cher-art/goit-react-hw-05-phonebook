import React from "react";
import styles from "./ContactList.module.css";
import "./ContactList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    // <ul>
    <TransitionGroup component="ul" className="list">
      {contacts.map((contact) => (
        <CSSTransition classNames="list__item" timeout={800}>
          <li className={styles.contactList} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={styles.contactBtn}
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
      {/* {contacts.map((contact) => (
          <li className={styles.contactList} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={styles.contactBtn}
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))} */}
    </TransitionGroup>
    // </ul>
  );
};

export default ContactList;
