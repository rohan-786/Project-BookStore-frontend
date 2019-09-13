import React from 'react';
import CustomInput from '../../core/CustomInput/customInput';
import CustomButton from '../../core/CustomButton/Button';
import style from './login.scss';
import CustomDialog from '../../core/CustomDialogBox/CustomDialog';
import { isEmpty } from '../../../utility/utility';
import { apiCall } from '../../../Api/api';
import {connect} from 'react-redux';
import { setStore } from '../../../Actions/Action';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoginClicked: false
        }
    }

    setFieldValue = (name, value) => {
        this.setState({ isLoginClicked: false }, () => {
            Object.keys(this.state).map((field) => {
                if (field == name) {
                    this.setState({
                        [field]: value
                    }, () => {
                        if (!isEmpty(this.state.username) && !isEmpty(this.state.password)
                            && this.state.isLoginClicked == true) {
                            this.getLoginCall();
                        }
                    })
                }
            })
        })
    }
    getLoginCall = () => {
        const { username, password } = this.state;
        const {setUserLoginStatus} = this.props;

        console.log("state ==>", this.state);
        apiCall.getLoginCall(username, password)
            .then(response => {
                response.status == 200 ? 
                setUserLoginStatus(true) :
                setUserLoginStatus(false)
            })
            .catch(err => {
                console.error("Error Reported ==>", err);
            })
    }
    render() {
        return (
            <div className={`loginForm`}>
                <CustomInput placeHolder={'Username'} inputType={'text'} name={'login'} passToParent={this.setFieldValue}
                    errorString={'Please enter correct Username'} errorConstraints={['required', 'onlyAlphabets']} fieldName={'username'} />
                <CustomInput placeHolder={'Password'} inputType={'password'} name={'login'} passToParent={this.setFieldValue}
                    errorString={'Wrong password !!!'} errorConstraints={['required', 'minLength', 'maxLength']}
                    constraints={{ minLength: 3, maxLength: 10 }} fieldName={'password'} />
                <CustomButton label={"login"} passToParent={this.setFieldValue}
                    name={`login`} fieldName={`isLoginClicked`} />
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>({
    setUserLoginStatus(value){
        dispatch(setStore("SET_USER_LOGIN_STATUS" , value));
    }
})

export default connect(null , mapDispatchToProps)(LoginForm);