import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends Component {
render() {
return (
<div>
    <Link to="sing-up"> Sing Up</Link>
    <Link to="sing-in"> Sing In</Link>
</div>
);
}
}

export default Header;