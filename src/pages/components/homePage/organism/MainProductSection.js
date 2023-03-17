import React, { Component } from 'react';

// components
import { SideBar } from './molecules';
import { ProductHead } from './molecules';
import { ProductItem } from './molecules';

// style
import './style/mainProductSection.scss';

class MainProductSection extends Component {
    render() {
        const { filterHandler } = this.props;
        return (
            <div className='content'>
                <SideBar />
                <div className='product'>
                    <ProductHead filterHandler={filterHandler}/>
                    <ProductItem {...this.props}/>
                </div>
            </div>
        )
    }
}

export default MainProductSection
