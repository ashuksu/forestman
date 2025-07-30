import {Meta, Title} from 'react-head';
import {useTranslation} from 'react-i18next';
import type {TranslationKey} from '~/locales';

interface PageMetaProps {
    pageKey: TranslationKey;
    pagePath?: string;
}

export default function PageMeta({pageKey, pagePath}: PageMetaProps) {
    const {t} = useTranslation();

    const title = t(`${pageKey}.title`) || t('common.companyFullName');
    const description = t(`${pageKey}.description`) || t('homePage.description');
    const keywords = t(`${pageKey}.keywords`) || t('homePage.keywords');
    const author = t('common.author');
    const websiteUrl = t('common.websiteUrl') + (pagePath ? pagePath : '');

    // TODO: add images ogImage and twitterImage, write addresses in translations
    const ogImage = t(`${pageKey}.meta.ogImage`) || "https://placehold.co/1200x630/cccccc/333333?text=Default+Image";
    const twitterImage = t(`${pageKey}.meta.twitterImage`) || "https://placehold.co/1200x675/cccccc/333333?text=Default+Image";

    return (
        <>
            <Title>{title}</Title>
            <Meta name="description" content={description}/>
            <Meta name="keywords" content={keywords}/>
            <Meta name="author" content={author}/>

            {/* Open Graph / Social Media Meta Tags */}
            <Meta property="og:title" content={title}/>
            <Meta property="og:description" content={description}/>
            <Meta property="og:type" content='website'/>
            <Meta property="og:url" content={websiteUrl}/>
            <Meta property="og:image" content={ogImage}/>

            {/* Twitter Card Meta Tags */}
            <Meta name="twitter:card" content='summary_large_image'/>
            <Meta name="twitter:title" content={title}/>
            <Meta name="twitter:description" content={description}/>
            <Meta name="twitter:image" content={twitterImage}/>
        </>
    );
}