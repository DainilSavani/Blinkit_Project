// constants
import EXTRA_CATEGORIES from '../constants/extraSubHeaderCategoriesConstants';

const renderExtraCategories = () =>
    EXTRA_CATEGORIES.map((category, index) => {
        return (index)
            ? <option key={category.value} value={category.value}>{category.name}</option>
            : <option key={category.value} value={category.value} hidden>{category.name}</option>
    });

export default renderExtraCategories;