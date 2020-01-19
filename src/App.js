import React from 'react';
import logo from './grad.jpg';
import './App.css';

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
 }

export default Header;