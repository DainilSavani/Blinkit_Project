// constants
import DOWNLOAD_APP_BUTTONS from '../constants/footerMidContants';

const renderFooterButtons = () => 
    DOWNLOAD_APP_BUTTONS.map((btns, index) => 
        <img key={index} src={btns.src} alt={btns.alt} />
    );

export default renderFooterButtons;