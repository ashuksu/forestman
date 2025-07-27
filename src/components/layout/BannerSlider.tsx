import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '~/components/layout/BannerSlider.css'

import banner1 from '~/assets/images/banner/banner1.jpeg';
import banner2 from '~/assets/images/banner/banner2.jpeg';
import banner3 from '~/assets/images/banner/banner3.jpeg';

export default function BannerSlider() {
    const images = [
        {id: 1, src: banner1, alt: 'Banner Image 1'},
        {id: 2, src: banner2, alt: 'Banner Image 2'},
        {id: 3, src: banner3, alt: 'Banner Image 3'},
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
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="swiper-lazy w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}