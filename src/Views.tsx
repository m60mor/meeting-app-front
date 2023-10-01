import HomePage from "./pages/homePage/HomePage";
import ProfilePage from "./pages/profilePage/ProfilePage.tsx";
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes() {
    return (
        sessionStorage.getItem('token') ? <Outlet /> : <Navigate to={'/'} />
    );
}

export default function Views() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/profile" element={<ProfilePage />}></Route>
            </Route>
            <Route path="*" element={<div> 404 not found</div>}></Route>
        </Routes>
    );
}