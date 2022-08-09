import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => {
    
    return(
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

/* TAREA TESTING */

GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}