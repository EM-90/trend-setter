import { useState } from "react";
import styles from './contactPage.module.css';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const [formErrors, setFormErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
      case 'subject':
      case 'body':
        return value.length < 3 ? `${name} must be at least 3 characters long` : '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address with @';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'body':
        setBody(value);
        break;
      default:
        break;
    }
    setFormErrors({
      ...formErrors,
      [name]: validateField(name, value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = {
      firstName: validateField('firstName', firstName),
      lastName: validateField('lastName', lastName),
      subject: validateField('subject', subject),
      email: validateField('email', email),
      body: validateField('body', body)
    };
    setFormErrors(newFormErrors);
    if (Object.values(newFormErrors).every(error => error === '')) {
      console.log('Form data:', { firstName, lastName, subject, email, body });
      setFirstName('');
      setLastName('');
      setSubject('');
      setEmail('');
      setBody('');
    } else {
      console.log('Form is not valid');
    }
  };

  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          /></label>
                   {formErrors.firstName && (
    <span className={styles.inputError}>{formErrors.firstName}</span>
  )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          /></label>
                   {formErrors.lastName && (
    <span className={styles.inputError}>{formErrors.lastName}</span>
  )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject:
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={handleChange}
            required
          /></label>
            {formErrors.subject && (
    <span className={styles.inputError}>{formErrors.subject}</span>
  )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          /></label>
                   {formErrors.email && (
    <span className={styles.inputError}>{formErrors.email}</span>
  )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="body">Body:
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={handleChange}
            required
          ></textarea></label>
                   {formErrors.body && (
    <span className={styles.inputError}>{formErrors.body}</span>
  )}
        </div>
        <div className={styles.buttonContainer}>
         <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
