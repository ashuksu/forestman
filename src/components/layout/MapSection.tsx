import {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import Container from '~/components/layout/Container';
import Button from "~/components/ui/Button.tsx";

// todo: Add Google Maps API key and Map ID
const MAPS_API_KEY = 'YOUR_Maps_API_KEY'; // API keys Google Maps from https://www.google.com/search?q=https://cloud.google.com/maps-platform/get-started
const MAP_ID = 'YOUR_MAP_ID'; // Optional: Map ID
const MAP_CENTER = {lat: 49.9928, lng: 36.2307}; // Workshop coordinates

export default function MapSection() {
    const {t} = useTranslation();
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // @ts-ignore
        if (window.google) {
            initMap();
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap&v=weekly&map_ids=${MAP_ID}`;
            script.async = true;
            document.head.appendChild(script);

            // @ts-ignore
            window.initMap = initMap;
        }

        return () => {
            // @ts-ignore
            window.initMap = undefined;
        };
    }, []);

    const initMap = () => {
        if (!mapRef.current) return;

        // @ts-ignore
        const map = new window.google.maps.Map(mapRef.current, {
            center: MAP_CENTER,
            zoom: 15,
            mapId: MAP_ID,
            fullscreenControl: true,
            streetViewControl: true,
        });

        // @ts-ignore
        new window.google.maps.Marker({
            position: MAP_CENTER,
            map: map,
            title: t('common.companyFullName'),
        });
    };

    const handleAddressClick = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${MAP_CENTER.lat},${MAP_CENTER.lng}`;
        window.open(url, '_blank');
    };

    return (
        <section id="map-section" className="bg-[var(--secondary)] py-16">
            <Container>
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                    {t('mapSection.heading')}
                </h2>
                <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-8">
                    {t('mapSection.text')}
                </p>

                <div className="flex flex-col items-center gap-6">
                    <div ref={mapRef} className="w-full h-[400px] md:h-[500px] rounded-xl shadow-md"></div>

                    <Button onClick={handleAddressClick}>{t('mapSection.buttonText')}</Button>
                </div>
            </Container>
        </section>
    );
}