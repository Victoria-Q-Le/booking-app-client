import { faBed, faListCheck, faPersonWalkingLuggage, faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        {/* HEADER LIST */}
        <div className='headerList'>
          <div className='headerListItem'>
              <FontAwesomeIcon icon={faListCheck} />
              <span>Before Your Trip</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPersonWalkingLuggage} />
            <span>Attractions</span>
          </div>
        </div>
        {/* END OF HEADER LIST */}

        {/* HEADER TEXT */}
        <h1 className='headerTitle'>
          Your next trip is just a few clicks away
        </h1>
        <p className='headerDesc'>
          Earn rewards from your travels, why not?
        </p>
        {/* END OF HEADER TEXT */}

      </div>
    </div>
  )
}

export default Header
