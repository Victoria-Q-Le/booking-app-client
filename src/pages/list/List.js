import "./list.css"
import Navbar from '../../components/navBar/Navbar'
import Header from '../../components/header/Header'

const List = () => {
  return (
    <div>
        <Navbar />
        <Header type="list"/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch"></div>
            <div className="listResult"></div>
          </div>
        </div>
    </div>
  )
}

export default List
