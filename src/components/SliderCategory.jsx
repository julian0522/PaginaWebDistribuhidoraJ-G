import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

export default function SwiperCategorias({ categorias }) {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      spaceBetween: 100,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "fade",
      flipEffect: {
        slideShadows: false,
      },
      preventClicks: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <>
      <style>
        {`
          .swiper-scrollbar {
            display: none !important;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 30px;
            color: white;
          }
          .swiper-button-next,
          .swiper-button-prev {
            top: 50%;
            z-index: 10;
            width: 40px;
            height: 40px;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            color: white;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: white;
            background-color: #eace7c;
          }
          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            }
          }
        `}
      </style>

      <div className="swiper h-full w-full">
        <div className="swiper-wrapper">
          {categorias.map((category, i) => (
            <div className="swiper-slide pt-5" key={i} data-swiper-autoplay="3000">
              <div className="max-w-md bg-white border border-gray-200 rounded-2xl shadow-md transform duration-600 md:hover:-translate-y-3 pointer-events-auto">
                <a href="#">
                  <img
                    className="w-full h-60 object-cover rounded-t-2xl"
                    src={category.data.img}
                    alt={category.data.name}
                  />
                </a>
                <div className="p-3 flex flex-col">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900">
                      {category.data.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">
                    {category.data.description}
                  </p>
                  <div className="flex justify-center">
                    <a
                      className="inline-flex px-3 py-2 text-sm w-34 font-medium rounded-2xl see-button bg-orange-300"
                      onClick={() => {
                        sessionStorage.setItem("categoriaSeleccionada", category.id);
                        window.location.href = "/productos";
                      }}
                    >
                      Ver Productos
                      <svg className="w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </>
  );
}