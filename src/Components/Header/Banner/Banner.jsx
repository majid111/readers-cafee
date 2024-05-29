
import { useNavigate } from 'react-router-dom';
import banner from '../../../assets/Images/Banner.jpg';

const Banner = () => {
    const navigate=useNavigate()
   
    return (
        <div className='bg-[#1313130D] px-28 py-20 md:flex gap-20 items-center'>
            <div className='space-y-12'>
            <h1 className='text-6xl font-bold'>Books to freshen up your bookshelf</h1>
            <button onClick={()=>navigate('/ListedBooks')} className='btn bg-[#23BE0A] text-white'>View The List</button>
            </div>
            <div>
                <img className='max-w-sm' src={banner} alt="" />
            </div>
        </div>
    );
};



export default Banner;