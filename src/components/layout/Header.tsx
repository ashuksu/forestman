import {Container} from "~/components/layout/Container";

export default function Header() {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container className="flex h-14 items-center">
                <div className="mr-4 flex items-center">
                    <a href="/" className="font-bold">
                        Forestman
                    </a>
                </div>
                <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
                    <a href="/catalog">Catalog</a>
                    <a href="/about">About</a>
                </nav>
                {/* TODO: Theme switcher and trash button will go here */}
            </Container>
        </header>
    );
}