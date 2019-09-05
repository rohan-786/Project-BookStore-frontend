import React from 'react';
import style from './header.css';

class Header extends React.Component {
    
    render() { 
        return ( 
            <div class={`siteHeader siteHeader2`}>
                <i className="siteLogo">bookOverFLow</i>

            </div>
         );
    }
}
 
export default Header;