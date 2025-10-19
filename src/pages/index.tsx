import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export default function Home() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <div className='flex flex-col gap-10'>
                    <Link to='/about' className='text-clip'>
                        link to About
                    </Link>
                    <button onClick={() => navigate('/about')}>click me to go to About page</button>
                </div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img src={reactLogo} className='logo react' alt='React logo' />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
        </div>
    );
}
