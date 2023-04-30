import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import './Main.css';
const logo = require("./res/auto_logo.png");

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
      super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true, loggedin: "-1"
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    async isUserLoggedIn() {
        fetch("/api/Login").then((response) => (
            response.json()
        )).then((user) => (this.setState({ loggedin: user[0] })));
    }

    componentDidMount() {
        this.isUserLoggedIn();
    }

  render() {


      return (
          < header class="fixed" style={{padding:0,paddingTop:10, height:80}}>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-none mb-3" container light>

                  <NavbarBrand tag={Link} to="/" style={{color:'#FFFFFF'}}>OmniBook</NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                          </NavItem><h3 style={{ color: '#454545' }} >|</h3>

              {this.state.loggedin !== "-1" ?  
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/book">Book Ride</NavLink>
                              </NavItem> : <div></div> }

                          <h3 style={{ color: '#454545' }} >|</h3>


              {this.state.loggedin !== "-1" ?  
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/fetch-data">Ride History</NavLink>
                              </NavItem> : <div></div> }
                          <h3 style={{ color: '#454545' }} >|</h3>
              {this.state.loggedin !== "-1" ?  
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/logout">Logout</NavLink>
                              </NavItem> : <div></div> }
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
