import "./propertyList.css"
import Hotel from "../../assets/images/pList/hotel.jpg"
import House from "../../assets/images/pList/house.jpg"
import Room from "../../assets/images/pList/room.jpg"

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={Hotel} alt='hotel' className="pListImg"/>
        <div className="pListTitle">
            <h1>Hotels</h1>
            <h2>156 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={House} alt='house' className="pListImg"/>
        <div className="pListTitle">
            <h1>Homes</h1>
            <h2>254 homes</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={Room} alt='room' className="pListImg"/>
        <div className="pListTitle">
            <h1>Shared Rooms</h1>
            <h2>105 rooms</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
