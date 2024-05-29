import PropTypes from 'prop-types';
import star from '../../assets/Images/star.png';
import Tag from './Tag/Tag';
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
    const navigate = useNavigate();
    const handleClick = (bookId) => {
        navigate(`/bookDetails/${bookId}`);
    }
    const { bookId, bookName, author, image, category, rating, tags } = book;
    return (
        <div onClick={() => handleClick(bookId)} className='p-6 border-2 rounded-2xl'>
            <div><img className='rounded-2xl' src={image} alt={'image of ' + bookName} /></div>
            <div className='flex gap-12 mt-6 mb-4'>
                {tags.map((tag, idx) => <Tag key={idx} tag={tag}></Tag>)}
            </div>
            <div>
                <h2 className='font-bold text-2xl'>{bookName}</h2>
                <p className='mt-4 mb-10'>By: {author}</p>
            </div>
            <div className='flex justify-between'>
                <p>{category}</p>
                <p>{rating} <img className='inline ml-3' src={star} alt={"Rating Image"} /> </p>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object,
    handleClick: PropTypes.func,
};

export default Book;