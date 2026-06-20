import "./layout.scss"
import Navbar from "../../components/shared/navbar/Navbar"
import Footer from "../../components/shared/footer/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
