import React, { Component } from 'react';
import { ValueConsumer } from '../../../Context';

class Search extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    render() {
        return (
            <ValueConsumer>
                {value => 
                    <input id="search" type="text" placeholder="search" ref={this.inputRef} 
                    onKeyUp={() => value.searchItem(this.inputRef.current.value)}></input>
                }
            </ValueConsumer>
        )
    }
}

export default Search
