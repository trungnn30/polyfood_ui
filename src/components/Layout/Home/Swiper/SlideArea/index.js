import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './SlideArea.css';

function SlideArea() {
    return (
        <div className="slide-swiper-wrap">
            <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                slidesPerView={1}
                autoplay={{
                    delay: 8000,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                loop={true}
                effect={'fade'}
            >
                <SwiperSlide className="bg-img" style={{ backgroundImage: 'url("/assets/img/slider1.jpeg")' }}>
                    <div className="slide-container"></div>
                </SwiperSlide>
                <SwiperSlide className="bg-img" style={{ backgroundImage: 'url("/assets/img/slider2.jpeg")' }}>
                    <div className="slide-container"></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SlideArea;
