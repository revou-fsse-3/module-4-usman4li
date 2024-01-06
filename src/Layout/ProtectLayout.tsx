
import { Outlet, Navigate } from 'react-router-dom'
import { Navbar } from '../Components'

const ProtectLayout = () => {

    const token = localStorage.getItem('token');

    if(token) {
        return (
            <div>
                <Navbar/>
                <Outlet/>
                <div>Footer</div>
            </div>
            
        )
    }

    return <Navigate to='/'/>
}

export default ProtectLayout