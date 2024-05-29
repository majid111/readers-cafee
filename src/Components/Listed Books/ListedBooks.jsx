import PropTypes from "prop-types";
import ListOfBooks from "../ListOfBooks/ListOfBooks";
import { useContext } from "react";
import { DataProviderContext } from "../Home/Home";

const ListedBooks = () => {
  const {
    wishListBooksData,
    readBooksData,
  } = useContext(DataProviderContext);

  return (
    <div>
      <div className="bg-slate-200 text-center rounded-2xl mb-8">
        <h2 className="text-3xl font-bold p-8">Books</h2>
      </div>
      <div className="flex justify-center">
        <button className="dropdown btn text-white bg-[#23BE0A]">
          Sort By
        </button>
      </div>
      <div className="">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-6"
          >
            {
              readBooksData.map(book=><ListOfBooks key={book.bookId} book={book}></ListOfBooks>)
            }
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 space-y-6"
          >
            {wishListBooksData.map(book=><ListOfBooks key={book.bookId} book={book}></ListOfBooks>)}
          </div>
        </div>
      </div>
    </div>
  );
};

// ${isActive && 'border-b-0'}

ListedBooks.propTypes = {
  wishListBooksData: PropTypes.array,
  readBooksData: PropTypes.array,
  setReadBooksData: PropTypes.func,
  setWishListBooksData: PropTypes.func,
};

export default ListedBooks;
