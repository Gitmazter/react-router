import { Outlet } from 'react-router';
import '../../styles/App.css';
import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';



export const Layout = () => {
    return (
        <>
            <header className='wrapper'>
                <Navigation />
            </header>
            <main className='wrapper'>
                <Outlet/>
            </main>
            <footer className='wrapper'>
                <Footer />
            </footer>
        
        </>
        )
}