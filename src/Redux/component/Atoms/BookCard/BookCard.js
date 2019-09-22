import React from 'react';
import PropTypes from 'prop-types'
import { customValidator, isEmpty } from '../../../utility/utility';
import style from './book.scss';
import ReadMoreAndLess from 'react-read-more-less';
import ShortDesc from '../../Atoms/shortDescription/shortDescription';
class BookCard extends React.Component {
    static PropTypes = {
        //url: PropTypes.url.isRequired,
        title: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        coverImage: PropTypes.url,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        clickHandler: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }



    render() {
        const { bookData: { url, title, shortDescription, coverImage, name, id } = {}, clickHandler } = this.props;

        if (!customValidator(this.props, [url, title, shortDescription, name, id])) {
            return null;
        }

        return (
            <div id={id} className={'bookCard'} onClick={clickHandler}>
                <div>{isEmpty(coverImage) ? <i className={'noBookImage'}></i> : <img />}</div>
                {!isEmpty(title) && <div className={'bookHeading'}>{title}</div>}
                {!isEmpty(shortDescription) &&

                    <span className={'shortDescription'}>
                        <ShortDesc charLimit={100}>
                            {shortDescription}
                        </ShortDesc>
                    </span>
                }
            </div>);
    }
}

export default BookCard;