import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmark}) => {
    const {title , cover , author , author_img, posted_date, readind_time ,
        hashtags}= blog;
    return (
        <div className='mb-20'>
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
                    <span>{readind_time}min read</span>
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
            
        </div>
    );
};
Blog.prototype = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func

}
export default Blog;