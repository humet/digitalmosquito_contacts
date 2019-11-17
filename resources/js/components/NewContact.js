// resources/assets/js/components/NewContact.js

import axios from 'axios'
import React, { Component } from 'react'

class NewContact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      telephone: '',
      errors: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateNewContact = this.handleCreateNewContact.bind(this)
    this.hasErrorFor = this.hasErrorFor.bind(this)
    this.renderErrorFor = this.renderErrorFor.bind(this)
  }

  handleFieldChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewContact (event) {
    event.preventDefault()

    const { history } = this.props

    const contact = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      telephone: this.state.telephone
    }

    axios.post('/api/contact', contact)
      .then(response => {
        // redirect to the homepage
        history.push('/')
      })
      .catch(error => {
        this.setState({
          errors: error.response.data.errors
        })
      })
  }

  hasErrorFor (field) {
    return !!this.state.errors[field]
  }

  renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
      return (
        <span className='invalid-feedback'>
          <strong>{this.state.errors[field][0]}</strong>
        </span>
      )
    }
  }

  render () {
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>Add new contact</div>
              <div className='card-body'>
                <form onSubmit={this.handleCreateNewContact}>
                  <div className='form-group'>
                    <label htmlFor='first_name'>First name</label>
                    <input
                      id='first_name'
                      type='text'
                      className={`form-control ${this.hasErrorFor('first_name') ? 'is-invalid' : ''}`}
                      name='first_name'
                      value={this.state.first_name}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('first_name')}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='last_name'>Last name</label>
                    <input
                      id='last_name'
                      type='text'
                      className={`form-control ${this.hasErrorFor('last_name') ? 'is-invalid' : ''}`}
                      name='last_name'
                      value={this.state.last_name}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('last_name')}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <input
                      id='email'
                      type='email'
                      className={`form-control ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
                      name='email'
                      value={this.state.email}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('email')}
                  </div>
                  <div className='form-group'>
                    <label htmlFor='telephone'>Telephone</label>
                    <input
                      id='telephone'
                      type='tel'
                      className={`form-control ${this.hasErrorFor('telephone') ? 'is-invalid' : ''}`}
                      name='telephone'
                      value={this.state.telephone}
                      onChange={this.handleFieldChange}
                    />
                    {this.renderErrorFor('telephone')}
                  </div>
                  <button className='btn btn-primary'>Add contact</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewContact