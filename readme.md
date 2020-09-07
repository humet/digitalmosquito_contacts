# Mosquito Digital Technical Challenge

## Final Spec

- Uses Laravel for the backend and React + Bootstrap for the front end. 
- The list is searchable with email and name via a text search field. 
- Each contact includes first and last name, email and telephone. 
- There is a form where the user can add new contacts. 
- All the data is pulled in to React via an API. Here are the endpoints:
  - List all contacts: `GET http://127.0.0.1:8000/api/contacts/`
  - Fetch one contact: `GET http://127.0.0.1:8000/api/contacts/{{ EMAIL ADDRESS }}`
  - Create new contact: `POST http://127.0.0.1:8000/api/contact?first_name={{ FIRST NAME}}&last_name={{ LAST NAME }}&email={{ EMAIL }}&telephone={{ TELEPHONE }}`
- Form validation is done server-side using the Laravel validations. The error messages pull through to the front end. There are checks for all fields completed, the email address is correct format and the telephone number is between a min/max number of digits. 
- As it is the app should perform well with thousands of entries. I’d move the search filtering from the front-end to the back-end if we were scaling up to millions of entries. 

## Original Brief

Using the Laravel framework for the back-end and Bootstrap (or your choice of library - React etc) for front-end styling, create a simple web application that displays a list of contacts. There needs to be a simple text search field to filter contacts by name or email.

Each contact needs to have the following fields:

- First name
- Last name
- Email
- Telephone

In addition to this, there needs to be a form to create new contacts.

To further extend, allowing the data to be available by a REST API. Returning all data when an email address is sent through. JSON Response.

Best practice should be used for form validation, etc. Also, any code approach that acknowledges how it can be scaled to larger data sets would be advantageous. 
