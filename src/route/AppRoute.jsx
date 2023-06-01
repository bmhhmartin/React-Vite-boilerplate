import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/about' element={<AboutPage/>}></Route>
            </Routes>
            
        </div>
    );
};

export default AppRoute;