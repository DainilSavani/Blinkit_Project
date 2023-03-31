import DOWNLOAD_APP_BUTTONS from '../constants/downloadAppConstants';

const renderDownloadAppBtns = () => 
    DOWNLOAD_APP_BUTTONS.map((btns, index) => 
        <img key={index} src={btns.src} alt={btns.alt} />
    );

export default renderDownloadAppBtns;