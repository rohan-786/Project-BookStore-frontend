import React from 'react';
import { connect } from 'react-redux';
import CustomInput from '../../core/CustomInput/customInput';
import CustomButton from '../../core/CustomButton/Button';
import { isEmpty } from '../../../utility/utility';
import style from './search.scss';
import {apiCall} from '../../../Api/api';
import {setStore} from '../../../Actions/Action';

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
                        this.getTheSearchData();
                    }
                })
            }
        })
    }

    getTheSearchData=()=>{
        const {searchInput} = this.state;
        const {setSearchedData} = this.props;
        apiCall.getSearchResult(searchInput)
        .then(response=>response.json())
        .then(response=>{
            response.status == 200 ? 
            setSearchedData(response.data) :
            console.log(response.message)
        })
        .catch(err=>{
            console.log(err);
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
    setSearchedData(searchData){
        dispatch(setStore("SET_SEARCH_DATA",searchData))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);