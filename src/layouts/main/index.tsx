import { useLocation, Outlet } from 'react-router-dom';
import React from "react";


const MainLayout: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MainLayout;