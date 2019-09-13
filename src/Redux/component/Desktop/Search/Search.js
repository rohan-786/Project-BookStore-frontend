import React from 'react';
import { connect } from 'react-redux';
import CustomInput from '../../core/CustomInput/customInput';
import CustomButton from '../../core/CustomButton/Button';
import { isEmpty } from '../../../utility/utility';
import style from './search.scss';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            isSearchClicked: !1
        }
    }

    setFieldValue = (name, value) => {
        this.setState({ isSearchClicked: false })
        Object.keys(this.state).map((field) => {
            
            if (field == name) {
                this.setState({
                    [field]: value
                }, () => {
                    if (!isEmpty(this.state.searchInput) &&
                        this.state.isSearchClicked == true
                    ) {
                        console.log(this.state.searchInput);
                       // this.getTheSearchData();
                    }
                })
            }
        })
    }

    render() {
        return (<div className={`searchWrapper`}>
            <CustomInput placeHolder={`What can i search for You`}
                inputType={`text`} passToParent={this.setFieldValue} name={`searchBox`}
                errorConstraints={['required']} fieldName={`searchInput`}
            />
            <CustomButton name={`search`} label={`Search`} fieldName={`isSearchClicked`}
                passToParent={this.setFieldValue}
            />


        </div>);
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);