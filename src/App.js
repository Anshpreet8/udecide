import React from 'react';
import logo from './grad.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function App() {
  return (
    <div className="App">
      <div>
        <div className="App-logo">
        <div className="container">
          <div className="middle">
            <div className="menu-tab">
            // <ButtonGroup>
            //   <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
            //     <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            //     <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            //   </DropdownButton>
            // </ButtonGroup>
            <select>
            <option value="lmao">lmao</option>
            <option value="asjkd">askjdn</option>
            <option value="jfnueqoiufqepiuqnf">yeet</option>

            </select>
            <input name="firstname" type="text" />

            </div>
            </div>
        <img src={logo} className="App-logo" alt="logo" />
                <p>
                  UDecide!!
                </p>
                </div>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  //target="_blank"
                  rel="noopener noreferrer"
                >
                go here!
                </a>
                <div className="ABOUT-US">
                <Jumbotron>
              <h1>About us</h1>
              <p>
                ---------------------------------------------------------------
              </p>
              <p>
                <ButtonToolbar>
                <Button href="google.com">Register now!</Button>
                </ButtonToolbar>
              </p>
            </Jumbotron>
            </div>
      </div>
      </div>
    </div>

  );
}

export default App;
