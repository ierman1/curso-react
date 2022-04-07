import PropTypes from 'prop-types'

export const GifGridItem = ({ id, title, url }) => {

	return (
		<div className="card">
			<img 
				src={ url } 
				alt={ title } 
				title={ title } />
			<p>{ title }</p>
		</div>
	);

}

GifGridItem.propTypes = {}

export default GifGridItem;