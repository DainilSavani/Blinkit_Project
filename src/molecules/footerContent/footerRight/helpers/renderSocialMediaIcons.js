// constants
import SOCIAL_MEDIA_ICONS_CLASSES from '../constants/footerRightConstants';

const renderSocialMediaIcons = () => 
    SOCIAL_MEDIA_ICONS_CLASSES.map((icon, option) => 
        <a key={option} href='#' className={icon} />
    );

export default renderSocialMediaIcons;