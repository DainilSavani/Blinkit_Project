// constants
import SERVICES_SECTION_DATA from '../constants/serviceSectionConstants';

// component
import ServiceBox from '../atoms';

const renderServicesData = () => 
    SERVICES_SECTION_DATA.map((service, index) => 
        <ServiceBox key={index} service={service} />
    )

export default renderServicesData;