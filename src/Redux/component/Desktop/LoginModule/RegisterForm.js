import React from 'react';
import CustomDialog from '../../core/CustomDialogBox/CustomDialog';
import CustomInput from '../../core/CustomInput/customInput';
import CustomButton from '../../core/CustomButton/Button';
import { isEmpty } from '../../../utility/utility';
import { apiCall } from '../../../Api/api';


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repassword: '',
            isRegisteredClicked: !1
        }
    }

    setFieldValue = (name, value) => {
        this.setState({ isRegisteredClicked: false }, () => {
            Object.keys(this.state).map((field) => {
                console.log(field, " ", name, " ", value)
                if (field == name) {
                    this.setState({
                        [field]: value
                    }, () => {
                        if (!isEmpty(this.state.username) && !isEmpty(this.state.password)
                            && this.state.isRegisteredClicked == true) {

                            this.createNewUser();
                        }
                    })
                }
            })
        })
    }

    createNewUser = () => {
        const { username, password, repassword } = this.state;
        if (password == repassword) {
            apiCall.registeredNewUser(username, password)
                .then(response => {
                    response.status == 200 ?
                        console.log("new user added") :
                        console.log("something wrong happened")
                })
                .catch(err => {
                    console.error("Error Reported ==>", err);
                })
        }

    }

    render() {
        return (
            <div className={`registerForm`}>
                <CustomInput placeHolder={`Username`} inputType={`text`} passToParent={this.setFieldValue}
                    name={`register`} errorConstraints={['required', 'onlyAlphabets']} fieldName={'username'} />
                <CustomInput name={`register`} placeHolder={`Password`} inputType={`password`}
                    passToParent={this.setFieldValue}
                    errorConstraints={['required', 'minLength', 'maxLength']} constraints={{ minLength: 3, maxLength: 10 }} fieldName={'password'} />

                <CustomInput name={`register`} placeHolder={`ReEnter-Password`} inputType={`password`} passToParent={this.setFieldValue}
                    errorConstraints={['required', 'minLength', 'maxLength']} constraints={{ minLength: 3, maxLength: 10 }} fieldName={'repassword'} />

                <CustomButton name={`register`} label={`Register`} fieldName={`isRegisteredClicked`} passToParent={this.setFieldValue} />
            </div>
        );
    }
}

export default RegisterForm;