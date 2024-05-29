
import { useLoaderData, useNavigate } from 'react-router-dom';
import Book from '../Book/Book';
import Banner from '../Header/Banner/Banner';
import { useState } from 'react';

const LoadedData = () => {

    const [value, setValue] = useState([]);
    const navigate = useNavigate();

    const handleClick = book=>{
        const newData=[...value, book];
        setValue(newData);
        navigate('/BookDetails');
    }
    console.log(value);

    const books = useLoaderData();
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-10'>
                {
                    books.map(book => <Book handleClick={handleClick} key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};



export default LoadedData;