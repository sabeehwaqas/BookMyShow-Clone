export const settings={
    autoplay:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide:0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
}

export const Simplesettings={
  arrows:false,
  autoplay:false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 0,
  initialSlide:0,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 0,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 0,
          slidesToScroll: 1
        }
      }
    ]
}



export default settings;