import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { isEmpty } from '../../../utility/utility';
import style from './bookpage.scss';
import CustomButton from '../../core/CustomButton/Button';
import ThreeDot from '../../Atoms/ThreeDotList/ThreeDot'



class BookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            payClicked:!1,
            _3DotClick : !1
        }
    }

    static PropTypes = {
        about_book: PropTypes.string,
        author: PropTypes.string,
        author_bio: PropTypes.string,
        contributor_id: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        bookCoverImage: PropTypes.string
    }

    setFieldValue=(name,value)=>{
        this.setState({
            payClicked : value
        })
    }

    handle3DotClick=()=>{
        this.setState({
            _3DotClick : !this.state._3DotClick
        })
    }

    render() {
        const { selectedBook: { about_book, author, author_bio, contributor_id, bookName, bookCoverImage, id } = {} } = this.props;
        const {_3DotClick} = this.state;
        console.log(bookName);
        return (<div className={'bookPage'}>
            <div className={'bookContainer'}>
                <div className={'bookPageHeaderContaier'}>
                    {isEmpty(bookCoverImage) ? <i className={'noBookImageBig'}></i> : <img src={bookCoverImage} />}
                    <div className={'bookShortInfoContainer'}>
                        <div className={'bookShortInfo'}>                        
                            <div className={'heading'}>{bookName}</div>
                            <div className={'author'}>{`Author: ${author}`}</div>
                            <div className={'authorBio'}>{`Author Bio: ${author_bio}`}</div>
                            <div className={'contributorId'}>{`Contributor: ${contributor_id}`}</div>
                        </div>

                    </div>
                    <div className={'activity'}>
                        <div className={'threeDot'}
                        onClick={(event)=>{this.handle3DotClick()}}
                        >...</div>
                        <CustomButton label={'Pay'} name={'pay'} passToParent={this.setFieldValue} fieldName={'payField'}/>
                    
                    </div>


                </div>
                <div className={'bookPageBodyContainer'}>
                   <div className={'aboutBook'}>{about_book}</div>
            </div>
            </div>

            {_3DotClick && <ThreeDot List={['Download' ,'ShortList']}/>}
    
        </div>);
    }
}



const mapStateToProps = (state) => {
    const { header: { selectedBook } = {} } = state;
    return {
        selectedBook
    }
}
export default connect(mapStateToProps, null)(BookPage);