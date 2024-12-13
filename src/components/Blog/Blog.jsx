import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title , cover , author , author_img, posted_date, reading_time ,
        hashtags}= blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-600'
                    ><CiBookmark></CiBookmark></button>

                </div>
            </div>
            <h2 className='text-4xl mb-8'>{title}</h2>
            <p>
            {hashtags.map((hash, idx) => (
        <span key={idx}>
            <a href="">#{hash}</a>
        </span>
    ))}
            </p>
            <button 
            onClick={() => handleMarkAsRead(reading_time)}
             className='text-purple-800 font-bold underline'>Mark As Read</button>
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired, // Marked as required for consistency
    handleMarkAsRead: PropTypes.func.isRequired     // Marked as required for consistency
};
export default Blog;