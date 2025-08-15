import {useTranslation} from 'react-i18next';
import Container from '@/components/layout/Container';

export default function Footer() {
    const {t} = useTranslation();

    return (
        <footer className="shadow-[0_-4px_6px_rgba(0,0,0,0.15)]">
            <Container className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div
                    className="flex flex-1 flex-col items-center justify-between gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        {t('footer.copyright')}
                    </p>
                    <a
                        href={t('common.author.url')}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Go to GitHub"
                        className="uppercase font-black text-muted-foreground hover:text-[#e80000] transition-colors duration-300 text-lg md:text-xl"
                    >
                        {t('common.author.name')}
                    </a>
                </div>
                {/* TODO: There may be social media icons here */}
            </Container>
        </footer>
    );
}