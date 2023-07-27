import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
        <Navbar  expand="lg">
        <Container >
        <Navbar.Brand className="fs-4">
              <img
                src="https://static.ybox.vn/2023/2/2/1676954251751-van-lang-education-group-avatar.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="My Website Logo"
              />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="fs-5" >
              <Nav.Item><Nav className="mx-3"><Link to="/admin/home">Home</Link></Nav></Nav.Item>
              <Nav.Item><Nav className="mx-3"><Link to="/admin/category">Category</Link></Nav></Nav.Item>
              <Nav.Item><Nav className="mx-3"><Link to="/admin/product">Product</Link></Nav></Nav.Item>
              <Nav.Item><Nav className="mx-3"><Link to="/admin/order">Order</Link></Nav></Nav.Item>
              <Nav.Item><Nav className="mx-3"><Link to="/admin/customer">Customer</Link></Nav></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
        <div className="float-right">
          Hello <b>{this.context.username}</b> | <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
        </div>
        <div className="float-clear" />
        </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;