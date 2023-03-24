// constants
import FILTER_TYPES from "../../../constants/productContainerConstants";

export const renderFilterOptions = () =>
    FILTER_TYPES.map((option, index) =>
        <option key={index} value={option.value}>
            {option.name}
        </option>
    );

export const filterChangeHandler = (value, productContainerSetState) => {
    productContainerSetState(prevState => (
        {...prevState, filterType: value}
    ));
}