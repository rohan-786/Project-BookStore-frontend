/***
 * This is custom buttom module
 * Required props :  passToParent function , button label 
 */
import React from 'react';
import { isEmpty } from '../../../utility/utility';
import style from './button.scss';


class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: !1,
            isHover: !1
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnHover = this.handleOnHover.bind(this);
    }

    handleOnHover(event) {
        this.setState({
            isHover: !this.state.isHover
        })
    }

    handleOnClick(event) {
        console.log(event.target.value);
        const { passToParent ,fieldName='' } = this.props;
        this.setState({
            clicked: !0
        }, () => {
            let value = this.state.clicked;
            passToParent(fieldName , value);
        })

    }

    render() {
        const { label, passToParent,name,fieldName} = this.props;
        const { isHover } = this.state;
        if (isEmpty(label) || isEmpty(passToParent) || isEmpty(name) || isEmpty(fieldName)) return null;

        
        return (
            <div className={`customButton${name}`}>
                <button className={isHover ? `onHover` : '' }
                    onClick={(event) => this.handleOnClick(event)} onMouseEnter={() => this.handleOnHover()}
                    onMouseOut={() => this.handleOnHover()}>
                    {label}</button>
            </div>
        );
    }
}

export default CustomButton;