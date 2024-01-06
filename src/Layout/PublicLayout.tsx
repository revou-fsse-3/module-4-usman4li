import { Outlet } from "react-router-dom"
import { Navbar } from "../Components"

const PublicLayout = () => {

    return (
        <div>
            <Navbar/>
            <Outlet/>
            <div>Footer</div>
        </div>
    )
}

export default PublicLayout