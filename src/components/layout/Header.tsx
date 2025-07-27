import {Container} from "~/components/layout/Container";
import {APP_PATH} from "~/config/constants.ts";
import {Link} from "react-router-dom";
import logo from '/logo.svg';

export default function Header() {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container className="flex items-center justify-between space-x-6 py-1 sm:py-2 lg:py-3">
                <Link to={APP_PATH} className="logo p-1 flex items-center">
                    <img src={logo} className="h-5 lg:h-8" alt="Logo"/>
                </Link>

                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link to={`${APP_PATH}catalog`} className="hover:underline">Catalog</Link>
                    <Link to={`${APP_PATH}about`} className="hover:underline">About</Link>
                </nav>
                {/* TODO: Theme switcher and trash button will go here */}
            </Container>
        </header>
    );
}