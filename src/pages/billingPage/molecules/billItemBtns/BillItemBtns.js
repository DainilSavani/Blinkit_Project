import React, { Component } from 'react';

// component
import ItemCartBtns from '../../../../molecules/itemCartBtn';

// helper function
import removeItemClickHandler from './helpers/billItemBtns.general';

// style
import './billItemBtns.scss';

class BillItemBtns extends Component {
    render() {
        return (
            <div className="billItemBtnSection">
                <ItemCartBtns {...this.props} />
                <button className="removeItem" onClick={() => removeItemClickHandler({...this.props})}>Remove</button>
            </div>
        )
    }
}

export default BillItemBtns