import { Outlet } from "react-router-dom"
import { Navbar } from "../Components"
import TableA from "../Components/TableA"

const PrivateLayout = () => {

    return (
        <div>
            <Navbar/>
            <TableA/>
            <Outlet/>
            <div>Footer</div>
        </div>
    )
}

export default PrivateLayout