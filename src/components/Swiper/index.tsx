import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// import { format } from "date-fns";
// import { ptBR } from "date-fns/locale";
// import { MOBILE_WIDTH } from "../../../src/utils/constants";
// import useMediaQuery from "../../../src/hooks/useMediaQuery";
// import Link from "../../Link";
import "swiper/css";
import "swiper/css/pagination";

// import { MOBILE_WIDTH } from "../../utils/constants";
// import useMediaQuery from "../../hooks/useMediaQuery";

// import * as Style from "./styles";

export function SwiperSection() {
  //   const isMobile = useMediaQuery(MOBILE_WIDTH);

  return (
    // <div>
    //     <Swiper
    //         spaceBetween={50}
    //         slidesPerView={1}
    //         onSlideChange={() => console.log("slide change")}
    //         pagination={true}
    //         modules={[Pagination,Navigation]}

    //     >
    //         <SwiperSlide>
    //             <h1>JOIJOIADS</h1>
    //             <div>
    //                 <span>
    //                     <p>
    //                         aspdkadposk
    //                     </p>
    //                 </span>
    //             </div>
    //         </SwiperSlide>
    //         <SwiperSlide>
    //             <h1>JOIJOIADS</h1>
    //             <div>
    //                 <span>
    //                     <p>
    //                         aspdkadposk
    //                     </p>
    //                 </span>
    //             </div>
    //         </SwiperSlide>

    //     </Swiper>
    // </div>

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      className="h-80"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <div className="">
          {/* Banner Principal */}
          <div className="relative h-64 sm:h-96">
            <img
              className="absolute h-full w-full object-cover"
              src="https://v1.tailwindcss.com/img/card-top.jpg"
              alt="Banner Principal"
            />
            <div className="absolute inset-0 bg-gray-500 bg-opacity-50 z-10">
              <div className="flex items-center justify-center h-full w-full text-center text-white z-10">
                <h1 className="text-3xl sm:text-5xl font-bold">
                  Bem-vindo à plataforma de eventos M3ma
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          {/* Banner Principal */}
          <div className="relative h-64 sm:h-96">
            <img
              className="absolute h-full w-full object-cover"
              src="https://v1.tailwindcss.com/img/card-top.jpg"
              alt="Banner Principal"
            />
            <div className="absolute inset-0 bg-gray-500 bg-opacity-50 z-10">
              <div className="flex items-center justify-center h-full w-full text-center text-white z-10">
                <h1 className="text-3xl sm:text-5xl font-bold">
                  Bem-vindo à plataforma de eventos M3ma
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          {/* Banner Principal */}
          <div className="relative h-64 sm:h-96">
            <img
              className="absolute h-full w-full object-cover"
              src="https://v1.tailwindcss.com/img/card-top.jpg"
              alt="Banner Principal"
            />
            <div className="absolute inset-0 bg-gray-500 bg-opacity-50 z-10">
              <div className="flex items-center justify-center h-full w-full text-center text-white z-10">
                <h1 className="text-3xl sm:text-5xl font-bold">
                  Bem-vindo à plataforma de eventos M3ma
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          {/* Banner Principal */}
          <div className="relative h-64 sm:h-96">
            <img
              className="absolute h-full w-full object-cover"
              src="https://v1.tailwindcss.com/img/card-top.jpg"
              alt="Banner Principal"
            />
            <div className="absolute inset-0 bg-gray-500 bg-opacity-50 z-10">
              <div className="flex items-center justify-center h-full w-full text-center text-white z-10">
                <h1 className="text-3xl sm:text-5xl font-bold">
                  Bem-vindo à plataforma de eventos M3ma
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
