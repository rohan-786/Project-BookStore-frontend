import React from 'react';
import CustomDialog from '../../core/CustomDialogBox/CustomDialog';
import CustomInput from '../../core/CustomInput/customInput';
import CustomButton from '../../core/CustomButton/Button';


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    setFieldValue = (name, value) => {

    }

    render() {
        return (
            <div className={`registerForm`}>
                <CustomInput placeHolder={`Username`} inputType={`text`} passToParent={event => { this.setFieldValue() }}
                    name={`register`} errorConstraints={['required', 'onlyAlphabets']} />
                <CustomInput name={`register`} placeHolder={`Password`} inputType={`password`} passToParent={event => { this.setFieldValue() }}
                    errorConstraints={['required', 'minLength', 'maxLength']} constraints={{ minLength: 3, maxLength: 10 }} />

                <CustomInput name={`register`} placeHolder={`ReEnter-Password`} inputType={`password`} passToParent={event => { this.setFieldValue() }}
                    errorConstraints={['required', 'minLength', 'maxLength']} constraints={{ minLength: 3, maxLength: 10 }} />

                <CustomButton name={`register`} label={`Register`} passToParent={event => { this.setFieldValue() }} />
            </div>
        );
    }
}

export default RegisterForm;