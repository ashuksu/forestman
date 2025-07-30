import {Meta, Title} from 'react-head';
import {useTranslation} from 'react-i18next';
import type {TranslationKey} from '~/locales';

interface PageMetaProps {
    pageKey: TranslationKey;
    pagePath?: string;
}

export default function PageMeta({pageKey, pagePath}: PageMetaProps) {
    const {t} = useTranslation();

    return (
        <>
            <Title>{t(`${pageKey}.title`)}</Title>
            <Meta name="description" content={t(`${pageKey}.description`)}/>
            <Meta name="keywords" content={t(`${pageKey}.keywords`)}/>
            <Meta name="author" content={t('common.author')}/>

            {/* Open Graph / Social Media Meta Tags */}
            <Meta property="og:title" content={t(`${pageKey}.title`)}/>
            <Meta property="og:description" content={t(`${pageKey}.description`)}/>
            <Meta property="og:type" content='website'/>
            <Meta property="og:url" content={t('common.websiteUrl') + (pagePath ? pagePath : '')}/>
            <Meta property="og:image" content={t(`${pageKey}.meta.ogImage`)}/>

            {/* Twitter Card Meta Tags */}
            <Meta name="twitter:card" content='summary_large_image'/>
            <Meta name="twitter:title" content={t(`${pageKey}.title`)}/>
            <Meta name="twitter:description" content={t(`${pageKey}.description`)}/>
            <Meta name="twitter:image" content={t(`${pageKey}.meta.twitterImage`)}/>
        </>
    );
}