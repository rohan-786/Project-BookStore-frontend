import React from 'react';
import {connect} from 'react-redux';
import Header from '../Redux/component/Desktop/Header/Header';
import Overlay from '../Redux/component/core/CustomOverlay/overlay';


class HomePage extends React.Component {
    
    render() { 
        return (
            <div>
                <Header/>
                <Overlay color={'black'}/>
            </div>
          );
    }
}

export default HomePage;