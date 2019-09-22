import React from 'react';
import CustomCard from '../../core/CustomCard/Cards';
import BookCard from '../../Atoms/BookCard/BookCard';
import { connect } from 'react-redux';
import { setStore } from '../../../Actions/Action';
import BookPage from '../Book/bookPage';

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onClickFlag: !1
        }
    }

    formatBookObj = (data) => {
        const { bookCoverImgage, bookName, about_book, url, id } = data;
        let bookObj = {
            coverImage: bookCoverImgage,
            title: bookName,
            shortDescription: about_book,
            url, id
        }
        return bookObj;
    }

    onClickHandler = (selectedBook) => {
        const { setSelectedBook } = this.props;
        this.setState({
            onClickFlag: !this.state.onClickFlag
        }, () => {
            setSelectedBook(selectedBook);
        })
    }
    render() {

        const { searchData } = this.props;

        const { onClickFlag } = this.state;
        return (<div className={'searchScreen'}>
            {!onClickFlag && searchData.map((data, index) => {
                let modifiedBookObj = this.formatBookObj(data);
                console.log(modifiedBookObj);
                return (
                    <CustomCard> <BookCard bookData={modifiedBookObj} clickHandler={(event) => { this.onClickHandler(data) }} />
                    </CustomCard>)
            })}
            {onClickFlag && <BookPage />}
        </div>);
    }
}

const mapDispatchToProps = dispatch => ({
    setSelectedBook(id) {
        dispatch(setStore('SET_SELECTED_BOOK_ID', id));
    }
})

export default connect(null, mapDispatchToProps)(SearchScreen);