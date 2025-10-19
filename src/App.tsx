import { HashRouter, Routes, Route } from 'react-router-dom';
import RootLayout from '@/layouts/Root';
import HomePage from '@/pages/index';
import AboutPage from '@/pages/About';
import NotFoundPage from '@/pages/NotFound';
import './App.css';

function App() {
    //here we add providers like react-query,... providers

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
