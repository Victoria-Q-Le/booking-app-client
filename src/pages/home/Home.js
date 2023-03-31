import Header from "../../components/header/Header"
import Navbar from "../../components/navBar/Navbar"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer"></div>
    </div>
  )
}

export default Home
