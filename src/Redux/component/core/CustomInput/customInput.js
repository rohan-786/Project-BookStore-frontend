import React from 'react';
import {isEmpty , validateField} from '../../../utility/utility';
import PropTypes from 'prop-types';
import style from './customInput.scss';

class CustomInput extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:'',
        }
    }
    static propTypes ={
        label : PropTypes.string,
        inputType : PropTypes.string,
        passToParent : PropTypes.func,
        placeHolder : PropTypes.string,
        errorString : PropTypes.string,
        name : PropTypes.string,
        errorConstraints : PropTypes.array,
        constraints : PropTypes.object
    }

    handleChange=(event)=>{
        const {name , passToParent , errorConstraints , constraints , errorString} = this.props;
        
        let elem = {'name':name , 'value' : event.target.value};
        
        let response = validateField(elem , errorConstraints , constraints);
        if(!isEmpty(response)) {
            !isEmpty(errorString) ?
             this.setState({error:errorString}) :
              this.setState({error : response[[name]]})
        }
        else{
            this.setState({error:''})
            passToParent(name , event.target.value);
        }
    }
    
    render() { 

        const {label , passToParent , inputType, placeHolder ,name ,errorConstraints} = this.props;
        const {error} = this.state;
         
        if(isEmpty(name)||isEmpty(passToParent) || isEmpty(inputType) || isEmpty(errorConstraints) ) return null;

        return (<div className={`customInput${name}`}>
            {!isEmpty(label) && <span>{label}</span> }
            <input type={inputType} placeholder={!isEmpty(placeHolder) ? placeHolder : ''}
            onChange={event=>this.handleChange(event)}></input>

            {!isEmpty(error) && <div className={`error`}>{error}</div>}
        </div>);
    }
}
 
export default CustomInput;