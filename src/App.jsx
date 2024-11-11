import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import DashBoard from './pages/Main/Dashboard';
import RateAndReview from './pages/Others/RateAndReview';
import Menu from './pages/Restaurant/Restaurant';
import Authentication from './pages/Others/Authentication';
import AuthContext from './context/AuthProvider';
import Unauthorized from './pages/Others/Unauthorize';
import RequireAuth from './components/RequireAuth';

const App = () => {
    const auth = useContext(AuthContext);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Authentication />}></Route>
                <Route
                    path="/dashboard/*"
                    element={auth ? <DashBoard /> : <Navigate to="/" />}
                ></Route>
                <Route
                    path="/user_review"
                    element={auth ? <RateAndReview /> : <Navigate to="/" />}
                ></Route>
                <Route path="/unauthorized" element={<Unauthorized />}></Route>

                <Route element={<RequireAuth allowedRoles={'user'} />}>
                    <Route
                        path="/restaurants/:restaurantID"
                        element={<Menu />}
                    ></Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
