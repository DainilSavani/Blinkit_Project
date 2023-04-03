import React, { Component } from 'react';

// helper functions
import renderExtraCategories from './helpers/renderExtraCategories';

// style
import './extraSubHeaderCategories.scss';

class ExtraSubHeaderCategories extends Component {
    constructor(props) {
        super(props)
        this.renderExtraCategories = renderExtraCategories();
    }

    render() {
        return (
            <select className='extraCategories' placeholder='more' >
                { this.renderExtraCategories }
            </select>
        )
    }
}

export default ExtraSubHeaderCategories