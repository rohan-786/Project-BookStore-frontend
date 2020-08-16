import React from 'react';
import {connect} from 'react-redux';
import Header from '../Redux/component/Desktop/Header/Header';
import Overlay from '../Redux/component/core/CustomOverlay/overlay';
import UserInfo from "../Redux/component/Desktop/UserInfo/UserInfo";
import ActivtiyPanel from "../Redux/component/Desktop/UserActivityPanel/ActivityPanel";


class HomePage extends React.Component {
    
    render() { 
        
        return (
            <div>
                <Header/>
                <UserInfo/>
                 <ActivtiyPanel/>
                <Overlay color={'black'}/>
            </div>
          );
    }
}

const mapStateToProps=state=>{
    
    console.log(state);
}
export default connect(mapStateToProps , null )(HomePage);