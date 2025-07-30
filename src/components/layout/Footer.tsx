import {useTranslation} from "react-i18next";
import {PROJECT_AUTHOR, PROJECT_AUTHOR_URL} from "~/config/constants.ts";

export default function Footer() {
    const {t} = useTranslation();

    return (
        <footer className="border-t">
            <div
                className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-1 flex-col items-center justify-between gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        {t('footer.copyright')}
                    </p>
                    <a
                        href={PROJECT_AUTHOR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Go to GitHub"
                        className="uppercase font-black text-muted-foreground hover:text-[#e80000] transition-colors duration-300 text-lg md:text-xl"
                    >
                        {PROJECT_AUTHOR}
                    </a>
                </div>
                {/* TODO: There may be social media icons here */}
            </div>
        </footer>
    );
}