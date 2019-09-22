import React from 'react';
import {connect} from "react-redux";
import { isEmpty } from '../../../utility/utility';
import SearchScreen from '../Search/SearchScreen';

 

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() { 

        const {userSearchData} = this.props;
    
        return (<div>
            {!isEmpty(userSearchData) &&<SearchScreen searchData={userSearchData}/>}

        </div>  );
    }
}

const mapStateToProps=state=>{
    const {header:{userSearchData=[]}={}} = state;

    return {
        userSearchData
    }

}

const mapDispatchToProps=dispatch=>({

})
 
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);