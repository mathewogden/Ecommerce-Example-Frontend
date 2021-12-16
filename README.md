# Ecommerce Frontend Example

## Table of Contents

- [Description](#Description)
- [Technologies](#Technologies)
- [Code](#Code)
- [Author](#Author)
- [Additional Credits](#Credits)
- [License](#License)

## Description

Here's the frontend to my ecommerce example platform!

![Gif](https://media.giphy.com/media/8SghqtX3VC8Cj9YbxR/giphy.gif)

## Technologies

<!-- left examples here put edit to put your technologies -->

- [JavaScript](https://www.w3schools.com/js/)
- [ReactJs](https://reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Material UI](https://mui.com)
- [Bootstrap](https://getbootstrap.com)
- [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)
- [MySQL](https://www.mysql.com)

## Code

### The Dashboard

- One feature of this application is that a user can not just purchase items, but also create listings of their own for others to purchase. A user can manage their listings in the user dashboard.
  Here's what we're all importing:

```
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRouteMatch, withRouter } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import CreateListing from '../../components/CreateListing';
import ManageListings from '../../components/ManageListings';
import UserOrders from '../../components/UserOrders';
import './Dashboard.css';
```

-All within the dashboards constant, we'll check if the user is logged in with a token that is being stored in local storage. If so, we'll use axios to retrieve that users information.

```
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      props.history.push('/');
    }

    const options = {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    };
    const url = `http://localhost:3001/user/dashboard`;
    axios.get(url, options).then(
      (res) => {
        let user = {
          firstName: res.data.userInfo.firstName,
          lastName: res.data.userInfo.lastName,
          username: res.data.userInfo.username,
        };
        localStorage.setItem('user', JSON.stringify({ user }));
        setUser(res.data.userInfo);
      },
      (err) => {
        localStorage.removeItem('token');
        props.history.push('/signin');
        console.error(err);
      }
    );
  }, [props.token, props.history]);

  const { path, url } = useRouteMatch();
```

-Then, we display our dashboard with all the corresponding user information. This contains routes for our user to perform crud operations for their listings, and also view their past orders they've made.

```
return (
    <div>
      <Container fluid className='main text-center'>
        <h2 className='mt-5 font-weight-bold text-uppercase'>
          {user.firstName}'s Dashboard
        </h2>
        <div className='nav pt-3 '>
          <ul>
            <li>
              <Link className='link' to={`${url}`}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link className='link' to={`${url}/create-listing`}>
                Create Listing
              </Link>
            </li>
            <li>
              <Link className='link' to={`${url}/manage-listings`}>
                Manage Listings
              </Link>
            </li>
            <li>
              <Link className='link' to={`${url}/user-orders`}>
                View Orders
              </Link>
            </li>
          </ul>
        </div>

        <div className='profile'>
          <h3 style={{ fontSize: '50px' }}>Profile</h3>
          <p>username: {user.username} </p>
          <p>first name: {user.firstName}</p>
          <p>last name: {user.lastName} </p>
          <p>email address: {user.email}</p>
        </div>
      </Container>

      <Switch>
        <Route path={`${path}/create-listing`} component={CreateListing} />
        <Route path={`${path}/manage-listings`} component={ManageListings} />
        <Route path={`${path}/user-orders`} component={UserOrders} />
      </Switch>
    </div>
  );
```

## Author

Mathew Ogden

- [GitHub](https://github.com/mathewogden)
- [linkedIn](https://www.linkedin.com/in/mathew-ogden-b85688220/)
- [Instagram](https://www.instagram.com/matogden_/?hl=en)

## Additional Credits

- Ben Von Achen & Alexa Hayes

## License]

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)
