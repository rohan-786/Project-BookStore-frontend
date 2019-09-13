import React from 'react';
import Overlay from '../../core/CustomOverlay/overlay';
import { connect } from 'react-redux';
import { setStore } from '../../../Actions/Action';
import { isEmpty } from '../../../utility/utility';
import LoginFrom from './loginFrom';
import RegisterForm from './RegisterForm';
import CustomDialog from '../../core/CustomDialogBox/CustomDialog';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerFormFlag: false
        }
    }
    componentDidMount() {
        const { setOverlay, signInClicked } = this.props;
        if (signInClicked == true)
            setOverlay(true);
    }

    setRegisterFlag = () => {
        this.setState({
            registerFormFlag: !this.state.registerFormFlag
        })
    }
    render() {
        const { signInClicked } = this.props;
        const { registerFormFlag } = this.state;
        if (isEmpty(signInClicked) || signInClicked == false) return null;

        return (
            <div className='loginWrapper'>

                <CustomDialog name={`login`} userRequestedAction={'SET_SIGN_IN_CLICKED'}>
                    {!registerFormFlag && <div><LoginFrom />
                        <span>Don't have account ? <a onClick={event => { this.setRegisterFlag() }}>create new</a></span></div>}
                    {registerFormFlag && <div><RegisterForm />
                        <span>Already Have an account ? <a onClick={event => { this.setRegisterFlag() }}>Sign In</a> </span>
                    </div>}
                </CustomDialog>
            </div>);
    }
}

const mapStateToProps = state => {
    const { header: { signInClicked } = {} } = state;

    return { signInClicked }
}
const mapDispatchToProps = dispatch => ({
    setOverlay(value) {
        dispatch(setStore('SET_OVERLAY', value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);