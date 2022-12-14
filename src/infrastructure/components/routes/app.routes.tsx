import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../../../feature/home/home/home.page'));
const About = lazy(() => import('../../../feature/about/about.page'));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
