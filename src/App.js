import logo from './logo.svg';
import './App.css';

import GlobalCss from './components/GlobalCss';

import { publicRoutes } from './routes';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment } from 'react';
import Home from './pages/Home/Home';

function App() {
    return (
        <Router>
            <GlobalCss>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            console.log(route.path);
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <route.component />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </GlobalCss>
        </Router>
    );
}

export default App;
