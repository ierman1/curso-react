import PropTypes from 'prop-types'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cats']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            { 
                categories.map(category => (
                    <GifGrid
                        key={ category } 
                        category={ category } />
                )) 
            }
        </>
    );

}

export default GifExpertApp;