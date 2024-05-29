import bookData from "../../../public/Books.json";
import { useParams } from "react-router-dom";
import Tag from "../Book/Tag/Tag";
import { useContext } from "react";
import { DataProviderContext } from "../Home/Home";
const BookDetails = () => {
  const { id } = useParams();

  const {
    wishListBooksData,
    setWishListBooksData,
    readBooksData,
    setReadBooksData,
  } = useContext(DataProviderContext);

  const book = bookData.filter((data) => data.bookId === parseInt(id));
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
    tags,
  } = book[0];

  const handleRead = () => {
    const find = readBooksData.includes(book[0]);

    if (find === false) {
      console.log("in if condition");
      const newReadBookData = [...readBooksData, book[0]];
      setReadBooksData(newReadBookData);
      alert("Added in Read List successfully");
      const newWishList = wishListBooksData.filter((data) => data.bookId !== parseInt(id));
      setWishListBooksData(newWishList);
    }
    else{
      alert("Already added in Read List");
    }
  };

  const handleWishlist = () => {
    const findRead = readBooksData.includes(book[0]);
    const findWishlist = wishListBooksData.includes(book[0]);

    if (findRead === false) {
      console.log("in if condition 1");
      if(findWishlist === false){
        console.log("in if condition 2");
      const newWishlistBookData = [...wishListBooksData, book[0]];
      setWishListBooksData(newWishlistBookData);
     return alert("Successfullt added in Wish List");
    }
   return alert("Already added in Wish List");
  }
  alert("Already added in Read List");
  };

  return (
    <div className="flex gap-6 my-12">
      <div className="max-w-lg">
        <img src={image} alt="" />
      </div>
      <div className="space-y-8">
        <h2 className="font-bold text-4xl">{bookName}</h2>
        <p className="text-xl font-medium">By : {author}</p>
        <p className="text-xl font-medium">{category}</p>
        <p className="text-xl font-medium">Review : <span className="text-base font-normal"> {review}</span></p>
        <div className="flex gap-12">
          <p className="text-xl font-medium">Tag : </p>
          {tags.map((tag, idx) => (
            <Tag key={idx} tag={tag}></Tag>
          ))}
        </div>
        <div className="space-y-3">
          <p className=" font-medium">
            <span className=" font-normal text-[#131313B3]">
              Number of Pages:{" "}
            </span>{" "}
            {totalPages}
          </p>
          <p className=" font-medium">
            <span className=" font-normal text-[#131313B3]">Publisher: </span>{" "}
            {publisher}
          </p>
          <p className=" font-medium">
            <span className=" font-normal text-[#131313B3]">
              Year of Publishing:{" "}
            </span>{" "}
            {yearOfPublishing}
          </p>
          <p className=" font-medium">
            <span className=" font-normal text-[#131313B3]">Rating: </span>{" "}
            {rating}
          </p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => handleRead(bookId)} className="btn">
            Read
          </button>
          <button
            onClick={() => handleWishlist(bookId)}
            className="btn bg-[#50B1C9]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
