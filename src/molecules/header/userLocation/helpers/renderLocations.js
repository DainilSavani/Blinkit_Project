// constants
import LOCATIONS from "../constants/locationConstants";

export const renderLocations = () =>
    LOCATIONS.map(location =>
        <option key={location.value} value={location.value}>
            {location.name}
        </option>
    );

export const stateSetter = (setState, value) => {
    setState(prevState => (
        { ...prevState, location: value }
    ))
}