import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../../../utility/utility';
import Item from './item';
import style from './threeDot.scss';
class ThreeDot extends React.Component {
    constructor(props) {
        super(props);
    }

    static PropTypes = {
        List: PropTypes.array.isRequired
    }

    render() {
        const { List = [] } = this.props;

        if (isEmpty(List)) {
            return null;
        }

        return (<div className={'threeDotPopup'}>
            <div className={'listContainer'}>
            {List.map((item)=>{
                return(<Item label={item}/>)    
            })}
            </div>
        </div>);
    }
}

export default ThreeDot;