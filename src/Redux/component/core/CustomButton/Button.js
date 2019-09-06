import React from 'react';
import {isEmpty} from '../../../utility/utility';


class CustomButton extends Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnHover = this.handleOnHover.bind(this);
    }

    handleOnHover(event){

    }
    handleOnClick(event){

    }

    render() { 
        const {theme , label , passToParent}= this.props;
        
        if(isEmpty(label) || isEmpty(theme) || isEmpty(passToParent)) return null;

     
        
        return ( 
            <button onClick={()=>this.handleOnClick}
            onMouseOver={()=>this.handleOnHover}
          
            >{label}</button>

         );
    }
}
 
export default CustomButton;