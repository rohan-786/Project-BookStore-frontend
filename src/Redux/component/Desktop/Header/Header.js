import React from 'react';
import style from './header.scss';

class Header extends React.Component {
    
    render() { 
        return ( 
            <div class={`siteHeader`}>
                <i className='siteLogo'></i>
                <span className="siteName"><i>bookOverFLow</i></span>
                <button className="signIn">sign in</button>

            </div>
         );
    }
}
 
export default Header;