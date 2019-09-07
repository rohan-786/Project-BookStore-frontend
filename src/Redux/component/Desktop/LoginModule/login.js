import React from 'react';
import Overlay from '../../core/CustomOverlay/overlay';
import { connect } from 'react-redux';
import { setStore } from '../../../Actions/Action';
import {isEmpty} from '../../../utility/utility';
import LoginFrom from './loginFrom';

class Login extends React.Component {
    componentDidMount() {
        const { setOverlay } = this.props;
        setOverlay(true);
    }
    render() {
        const { signIn } = this.props;
        if(isEmpty(signIn) || signIn == false) return null;

        return (<div className='loginWrapper'>
            {/* <Overlay type={'black'}/> */}
            LoginForm
            <LoginFrom/>
        </div>);
    }
}

const mapStateToProps = state => {
    const { header:{signIn}={} } = state;

    return { signIn }
}
const mapDispatchToProps = dispatch => ({
    setOverlay(value) {
        dispatch(setStore('SET_OVERLAY', value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);