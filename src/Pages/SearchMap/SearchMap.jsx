import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import { Provider as SearchContext } from "../../Context/SearchContext";
import AdvertMap from "../../Components/AdvertMap/AdvertMap";
import MapSearch from "../../Components/MapSearch/MapSearch";
import useWindowDimensions from "../../Utils/windowDimension";

import "./SearchMap.scss";

function SearchMap() {
    const { windowWidth } = useWindowDimensions();

    return (
        <SearchContext>
            <div className="searchMap" id="searchMap">
                <Header />
                <Search map={windowWidth > 1000 ? true : false} />
                <div className="searchMap__content">
                    <div className="searchMap__map">
                        <AdvertMap coordinate={[40.788059, 72.308069]} zoom={9}/>
                    </div>
                    {windowWidth > 666 ? <MapSearch /> : ''}
                </div>
            </div>
        </SearchContext>
    );
}
export default SearchMap;
