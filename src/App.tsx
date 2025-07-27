import {Outlet} from 'react-router-dom'
import Header from './components/layout/Header.tsx'
import Footer from './components/layout/Footer.tsx'

function App() {
    // TODO: The logic for determining and setting the theme (light/dark) will be here

    return (
        <div className="flex min-h-screen flex-col">
            <Header/>
            <main className="flex-grow">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App