// resources/assets/js/components/ContactsList.js

    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
    import BootstrapTable from 'react-bootstrap-table-next';
    import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

    import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

    const { SearchBar } = Search;
    const columns = [{
      dataField: 'first_name',
      text: 'First Name'
    }, {
      dataField: 'last_name',
      text: 'Last Name'
    }, {
      dataField: 'email',
      text: 'Email'
    }, {
      dataField: 'telephone',
      text: 'Telephone',
      searchable: false
    },];

    class ContactsList extends Component {
      constructor () {
        super()
        this.state = {
          contacts: []
        }
      }

      componentDidMount () {
        axios.get('/api/contacts').then(response => {
          this.setState({
            contacts: response.data
          })
        })
      }

      render () {
        const { contacts } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>All contacts</div>
                  <div className='card-body'>
                    <ToolkitProvider
                        keyField="id"
                        data={ contacts }
                        columns={ columns }
                        search
                      >
                        {
                          props => (
                            <div>
                              <SearchBar classes="w-100" { ...props.searchProps } />
                              <hr />
                              <BootstrapTable
                                { ...props.baseProps }
                                striped
                                hover
                                noDataIndication="No contacts"
                                headerClasses="thead-dark"
                                classes="table-responsive-sm"
                              />
                            </div>
                          )
                        }
                      </ToolkitProvider>
                      <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                      Add new contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    export default ContactsList