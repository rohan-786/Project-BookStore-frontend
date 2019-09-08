import React from 'react';
import CustomInput from '../../core/CustomInput/customInput';
import CustomButton from '../../core/CustomButton/Button';
import style from './login.scss';
import CustomDialog from '../../core/CustomDialogBox/CustomDialog';
import { isEmpty } from '../../../utility/utility';
import {apiCall} from '../../../Api/api';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            isClicked:false
        }
    }

    setFieldValue = (name, value) => {
        Object.keys(this.state).map((field)=>{
            console.log(field,"",name);
            if(field == name){
                this.setState({
                    [field] : value
                })
            }
        })
        console.log("state ==>",this.state);
        if(!isEmpty(this.state.username) && !isEmpty(this.state.password) 
        && this.state.isClicked == true){
            this.getLoginCall();
        }
    }
    getLoginCall=()=>{
        console.log("called");
        const {username , password} = this.state;
        apiCall.getLoginCall(username , password)
        .then(response=>{
            console.log(response);
        })
        .catch(err=>{
            console.error("Error Reported ==>",err);
        })
    }
    render() {
        return (
                <div className={`loginForm`}>
                    <CustomInput placeHolder={'Username'} inputType={'text'} name={'login'} passToParent={(event) => { this.setFieldValue() }}
                        errorString={'Please enter correct Username'} errorConstraints={['required', 'onlyAlphabets']} fieldName={'username'}/>
                    <CustomInput placeHolder={'Password'} inputType={'password'} name={'login'} passToParent={(event) => { this.setFieldValue() }}
                        errorString={'Wrong password !!!'} errorConstraints={['required', 'minLength', 'maxLength']}
                        constraints={{ minLength: 3, maxLength: 10 }} fieldName={'password'}/>
                    <CustomButton label={"login"} passToParent={event => { this.setFieldValue() }}
                     name={`login`} fieldName={`loginClicked`}/>
                </div>
           );
    }
}



export default LoginForm;