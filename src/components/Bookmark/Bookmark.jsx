import propTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.prototypes={
    bookmark : propTypes.object
}

export default Bookmark;