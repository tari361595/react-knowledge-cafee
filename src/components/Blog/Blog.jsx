import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title , cover , author , author_img, posted_date, readind_time ,
        hashtags}= blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
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

                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
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
    bog : PropTypes.object.isRequired
}
export default Blog;