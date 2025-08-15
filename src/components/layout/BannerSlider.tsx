import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '@/components/layout/BannerSlider.css'
import Image from "@/components/ui/Image.tsx";

export default function BannerSlider() {
    const images = [
        {id: 1, src: 'banner/banner1.jpeg', alt: 'Banner Image 1'},
        {id: 2, src: 'banner/banner2.jpeg', alt: 'Banner Image 2'},
        {id: 3, src: 'banner/banner3.jpeg', alt: 'Banner Image 3'},
    ];

    return (
        <div className="relative w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                slideToClickedSlide={true}
                effect="fade"
                fadeEffect={{crossFade: true}}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                loop={true}
                lazyPreloadPrevNext={1}
                className="mySwiper h-fit landscape:h-screen w-full  "
            >
                {images.map((image, index) => (
                    <SwiperSlide key={image.id}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={450}
                            height={300}
                            noLazy={index === 0}
                            fetchPriority={index === 0 ? "high" : undefined}
                            className={`${index === 0 ? "" : "swiper-lazy"} w-full h-full object-cover`}
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}