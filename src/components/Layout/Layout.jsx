import { Outlet } from 'react-router';
import '../../styles/App.css';

export const Layout = () => {
    return (
        <>
            <header className='wrapper'>
                Andzi Web3 2.0
            </header>
            <main className='wrapper'>
                <Outlet/>
            </main>
            <footer className='wrapper'>
                Footer Works
            </footer>
        
        </>
        )
}