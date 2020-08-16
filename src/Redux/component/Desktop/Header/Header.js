import React from 'react';
import style from './header.scss';
import Logo from '../../shared/logo';
import CustomButton from '../../core/CustomButton/Button';
import { connect } from 'react-redux';
import { setStore } from '../../../Actions/Action';
import Login from '../LoginModule/login';
import Search from '../Search/Search';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInClicked: false
        }
        this.setFieldValue = this.setFieldValue.bind(this);
    }
    setFieldValue(name, value) {
        const { setSignInClicked } = this.props;
        this.setState({
            signInClicked: value
        }, () => {
            setSignInClicked(this.state.signInClicked);
        })


    }
    render() {
        return (
            <div className={'siteHeader'}>
                <Logo />
                {/* <Search/>
                <CustomButton label={'sign in'} passToParent={this.setFieldValue}
                    name={'signIn'} fieldName={`signIn`} />
                <Login /> */}
            </div>
        );
    }
}


const mapDispatchToProps = (disptch) => ({
    setSignInClicked(value) {
        disptch(setStore("SET_SIGN_IN_CLICKED", value));
    }
})


export default connect(null, mapDispatchToProps)(Header);