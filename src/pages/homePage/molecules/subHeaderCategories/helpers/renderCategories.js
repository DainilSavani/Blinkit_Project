// constants
import SUB_HEADER_CATEGORIES from '../constants/subHeaderCategoriesConstants';

const renderCategories = () =>
    SUB_HEADER_CATEGORIES.map((item, index) => <li key={index}>{item}</li>);

export default renderCategories;