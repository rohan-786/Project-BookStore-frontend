import React from 'react';
import {isEmpty , validateField} from '../../../utility/utility';
import PropTypes from 'prop-types';
import style from './customInput.scss';

class CustomInput extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:'',
            isHover:false
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
        constraints : PropTypes.object,
        fieldName : PropTypes.string
    }

    handleChange=(event)=>{
        const {fieldName , passToParent , errorConstraints , constraints , errorString} = this.props;
        
        let elem = {'name':fieldName , 'value' : event.target.value};
        
        let response = validateField(elem , errorConstraints , constraints);
        if(!isEmpty(response)) {
            !isEmpty(errorString) ?
             this.setState({error:errorString}) :
              this.setState({error : response[[fieldName]]})
        }
        else{
            this.setState({error:''})
            passToParent(fieldName , event.target.value);
        }
    }

    handleOnHover=(event)=>{
        this.setState({
            isHover: !this.state.isHover
        })
    }
    
    render() { 

        const {label , passToParent , inputType, placeHolder ,name ,errorConstraints , fieldName} = this.props;
        const {error ,isHover} = this.state;
         
        if(isEmpty(name)||isEmpty(passToParent) || isEmpty(inputType) 
        || isEmpty(errorConstraints) || isEmpty(fieldName) ) return null;

        return (<div className={`customInput${name}`}>
            {!isEmpty(label) && <span>{label}</span> }
            <input type={inputType} placeholder={!isEmpty(placeHolder) ? placeHolder : ''}
            onChange={event=>this.handleChange(event)}
            onMouseEnter={() => this.handleOnHover()}
            onMouseOut={() => this.handleOnHover()}
            className={isHover ? `onHover` : '' }
            ></input>

            {!isEmpty(error) && <div className={`error`}>{error}</div>}
        </div>);
    }
}
 
export default CustomInput;