import React from 'react';
import CustomInput from '../../core/CustomInput/customInput';
import CustomButton from '../../core/CustomButton/Button';
import style from './login.scss'
class LoginForm extends React.Component {
    constructor(props){
        super(props);
    }

    setFieldValue(name , value){
        
        console.log(name," ",value);
        
    }
    render() { 
        return (<div className={`loginForm`}> 
            <CustomInput placeHolder={'Username'}  inputType={'text'} name={'username'} passToParent={(event)=>{this.setFieldValue()}} 
            errorString={'Please enter correct Username'} errorConstraints={['required' ,'onlyAlphabets']}/>
            <CustomInput placeHolder={'Password'}  inputType={'password'} name={'password'} passToParent={(event)=>{this.setFieldValue()}} 
            errorString={'Wrong password !!!'} errorConstraints={['required' , 'minLength' , 'maxLength']} 
            constraints={{minLength:3 , maxLength:10}}/>
            <CustomButton label={"login"} passToParent={event=>{this.setFieldValue()}} name={`login`} />
        </div>  );
    }
}
 
export default LoginForm;