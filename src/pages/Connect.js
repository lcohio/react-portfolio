import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import emailjs from 'emailjs-com';

export default class Connect extends Component {

  state = {
    firstName: "",
    lastName: "",
    msg: "",
    success: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      "fn": this.state.firstName,
      "ln": this.state.lastName,
      "userInput": this.state.msg,
    }
    let service_id = "gmail";
    let template_id = "portfolio_form";
    let key = process.env.REACT_APP_EMAIL_API_KEY;
    
    emailjs.send(service_id, template_id, templateParams, key)
    .then(response => {
      if(response.status === 200) {
        this.setState({
          success: true
        })
      }
    }).catch(err => console.error('Failed...', err));
  }

  render() {
    return (
      <React.Fragment>
        { !this.state.success ?
        <div id="form">
          <h1 id="connect-headline">get in touch</h1>
          <form id="connect">
            <div id="form-row">
              <label></label>
              <input onChange={ e => this.setState({ firstName: e.target.value }) } type="text" placeholder="First Name" required></input>
              <label></label>
              <input onChange={ e => this.setState({ lastName: e.target.value }) } type="text" placeholder="Last Name" required></input>
            </div>
            <textarea onChange={ e => this.setState({ msg: e.target.value }) } rows="5" placeholder="Type your message." required></textarea>

            { this.state.firstName.length > 0 
              && this.state.lastName.length > 0 
              && this.state.msg.length > 0 
              ?
              <button onClick={ this.handleSubmit } id="submit-btn" type="submit">submit</button>
              :
              <p id="submit-warn">make sure all fields are populated.</p>
            }
            
          </form>
      </div>
      :
      <Redirect to="connect/success"></Redirect>
      }
    </React.Fragment>
    )
  }
}