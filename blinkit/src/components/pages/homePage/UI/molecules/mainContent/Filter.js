import React, { Component } from 'react';
import { ValueConsumer } from '../../../Context';

class Filter extends Component {
    constructor(props) {
        super(props)
        this.sortRef = React.createRef();
        this.optionValues = [
            {
                name: "All",
                value: "all"
            }, {
                name: "Veg",
                value: "veg"
            }, {
                name: "Non-veg",
                value: "non-veg"
            }
        ]
    }

    render() {
        return (
            <div className='sort'>
                <p>Filter By</p>
                <ValueConsumer>
                    {value => {
                        return <select name='sortBy' id='sortBy' ref={this.sortRef} onChange={() => value.sortType(this.sortRef.current.value)}>
                        {
                            this.optionValues.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)
                        }
                        </select>
                    }}       
                </ValueConsumer>
            </div>
        )
    }
}

export default Filter
