import PropTypes from 'prop-types';

const FirstApp = ({ name, subtitle }) => {

    const welcome = `Hello, ${ name }!`;

    return (
        <>
            <h1>{ welcome }</h1>
            <p>First app</p>
            <small>{ subtitle }</small>
        </>
    );
}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Subtitle...'
}

export default FirstApp;