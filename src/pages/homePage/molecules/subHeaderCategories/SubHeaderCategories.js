import React, { Component } from 'react';

// helper functions
import renderCategories from './helpers/renderCategories';

// component
import ExtraSubHaderCategories from '../extraSubHeaderCategories';

// style
import './subHeaderCategories.scss';

class SubHeaderCategories extends Component {
    constructor(props) {
        super(props)
        this.renderCategories = renderCategories();
    }

    render() {
        return (
            <ul className='list'>
                { this.renderCategories }
                <ExtraSubHaderCategories />
            </ul>
        )
    }
}

export default React.memo(SubHeaderCategories);
