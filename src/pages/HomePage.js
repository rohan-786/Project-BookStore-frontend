import React from 'react';
import {connect} from 'react-redux';
import Header from '../Redux/component/Desktop/Header/Header';
import Overlay from '../Redux/component/core/CustomOverlay/overlay';
import HomeScreen from '../Redux/component/Desktop/HomeScreen/HomeScreen';
import style from './homepage.scss';


class HomePage extends React.Component {
    
    render() { 
        return (
            <div>
                <Header/>
                <Overlay color={'black'}/>
                <HomeScreen/>
            </div>
          );
    }
}

const mapStateToProps=state=>{
    console.log(state);
}
export default connect(mapStateToProps , null )(HomePage);