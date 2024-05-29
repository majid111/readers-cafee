import PropTypes from 'prop-types';

const Tag = ({tag}) => {
    return (
        <div>
            <p className='font-medium px-4 py-2 rounded-full bg-[#23BE0A0D] text-[#23BE0A]'>{tag}</p>
        </div>
    );
};

Tag.propTypes = {
    tag: PropTypes.array,
};

export default Tag;