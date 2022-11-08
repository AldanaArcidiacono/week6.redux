import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../../feature/home/page/home.page';
import AboutPage from '../../../feature/about/about.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="about" element={<AboutPage></AboutPage>}></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
