import PropTypes from 'prop-types';
import ListOfBooks from '../ListOfBooks/ListOfBooks';

const WishlistBooks = props => {
    return (
        <div>
            <h3>Wishlist Books here</h3>
            <ListOfBooks></ListOfBooks>
        </div>
    );
};

WishlistBooks.propTypes = {
    
};

export default WishlistBooks;