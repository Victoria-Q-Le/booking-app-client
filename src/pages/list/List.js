import "./list.css"
import Navbar from '../../components/navBar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)
  return (
    <div>
        <Navbar />
        <Header type="list"/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input type="text" placeholder="destination"></input>
              </div>
              <div className="lsItem">
                <label>Check-in date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (<DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}/>)}
              </div>

              <div className="lsItem">
                <label>Options</label>
                <div className="lsItemOption">
                  <span className="lsOptionText">Min price <small>(per night)</small> </span>
                  <input className="lsOptionInput" type="number"></input>
                </div>

                <div className="lsItemOption">
                  <span className="lsOptionText">Max price <small>(per night)</small> </span>
                  <input className="lsOptionInput" type="number"></input>
                </div>

                <div className="lsItemOption">
                  <span className="lsOptionText">Adults</span>
                  <input className="lsOptionInput" type="number" placeholder={options.adult} min={1}></input>
                </div>

                <div className="lsItemOption">
                  <span className="lsOptionText">Children</span>
                  <input className="lsOptionInput" type="number" placeholder={options.children} min={0}></input>
                </div>

                <div className="lsItemOption">
                  <span className="lsOptionText">Room</span>
                  <input className="lsOptionInput" type="number" placeholder={options.room} min={1} ></input>
                </div>
              </div>
              
            </div>
            <div className="listResult"></div>
          </div>
        </div>
    </div>
  )
}

export default List
