import {Link} from 'react-router'

const TerugKnop = ({ onClick, className, parentId }) => {
    return (

//         <Link to={"/benodigdheden/" + parentId}>
        <button
            onClick={onClick}
            className={`cursor-pointer relative px-4 rounded-xl w-50 h-20 ${className}`}
            style={{ backgroundColor: '#DDA853'}}
        >
            <p className="text-white text-5xl font-bold text-center">Terug</p>
        </button>
        // </Link>
    );
};

export default TerugKnop;
