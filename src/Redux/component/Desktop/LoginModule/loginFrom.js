import React from 'react';
import CustomInput from '../../core/CustomInput/customInput';
import CustomButton from '../../core/CustomButton/Button';
import style from './login.scss';
import CustomDialog from '../../core/CustomDialogBox/CustomDialog';
import { isEmpty } from '../../../utility/utility';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    setFieldValue = (name, value) => {
        console.log(name," ",value);
    }
    render() {
        return (
                <div className={`loginForm`}>
                    <CustomInput placeHolder={'Username'} inputType={'text'} name={'login'} passToParent={(event) => { this.setFieldValue() }}
                        errorString={'Please enter correct Username'} errorConstraints={['required', 'onlyAlphabets']} />
                    <CustomInput placeHolder={'Password'} inputType={'password'} name={'login'} passToParent={(event) => { this.setFieldValue() }}
                        errorString={'Wrong password !!!'} errorConstraints={['required', 'minLength', 'maxLength']}
                        constraints={{ minLength: 3, maxLength: 10 }} />
                    <CustomButton label={"login"} passToParent={event => { this.setFieldValue() }} name={`login`} />
                </div>
           );
    }
}



export default LoginForm;