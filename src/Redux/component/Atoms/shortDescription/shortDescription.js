import React from 'react';
import PropTypes from 'prop-types'
class ShortDescription extends React.Component {
    constructor(props){
        super(props);
    }
    static PropTypes ={
       charLimit : PropTypes.number.isRequired,
       children : PropTypes.string.isRequired
    }

    render() { 
        const {charLimit , children} = this.props;
        if(children.length <= charLimit){
            return (this.props.children)
        }

        let shortdesc = children.substring(0,charLimit);
        return (<div>
           {`${shortdesc}...`}     

        </div>  );
    }
}
 
export default ShortDescription;