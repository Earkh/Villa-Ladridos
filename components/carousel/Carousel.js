import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export const EmblaCarousel = (imageArray) => {
  const options = { delay: 6000 }
  const autoplay = Autoplay(options)
  const [emblaRef] = useEmblaCarousel({loop: true, speed: 4, draggable: true,}, [autoplay])
  const {images} = imageArray;


  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {
          images.map(image => <div className="embla__slide"><Image src={image} alt="jardín" width={'710px'} height={'308px'}/></div>)
        }
      </div>
    </div>
  )
}
