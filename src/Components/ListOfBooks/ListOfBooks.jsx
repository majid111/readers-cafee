import PropTypes from "prop-types";
import Tag from "../Book/Tag/Tag";
import { useNavigate } from "react-router-dom";

const ListOfBooks = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;

  const navigate = useNavigate();
  const handleClick = (bookId) => {
    navigate(`/bookDetails/${bookId}`);
  };

  return (
    <div className="flex gap-6">
      <div className="max-w-52 rounded-2xl">
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <h2 className="font-bold text-2xl">{bookName}</h2>
          <p>By: {author}</p>
        </div>
        <div className="flex gap-4">
          <h3 className="font-bold">Tag</h3>
          {tags.map((tag, idx) => (
            <Tag key={idx} tag={tag}></Tag>
          ))}
          <p>Year of Publishing: {yearOfPublishing} </p>
        </div>
        <div className="flex gap-6">
          <p>Publisher: {publisher}</p>
          <p>Page: {totalPages}</p>
        </div>
        <div className="flex gap-3">
          <p className="text-[#328EFF] bg-[#328EFF26] rounded-full p-2">
            Category: {category}
          </p>
          <p className="text-[#FFAC33] bg-[#FFAC3326] rounded-full p-2">
            Rating: {rating}
          </p>
          <button
            onClick={() => handleClick(bookId)}
            className="btn text-white bg-[#23BE0A] rounded-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ListOfBooks.propTypes = {
  book: PropTypes.object,
};

export default ListOfBooks;
