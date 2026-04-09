import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'



export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

   const goToPrev = (): void => {
    emblaApi?.scrollPrev()
  }

  const goToNext = (): void => {
    emblaApi?.scrollNext()
  }

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          <div className="flex[0_0_100%] min-w-0">Slide 1</div>
          <div className="flex[0_0_100%] min-w-0">Slide 2</div>
          <div className="flex[0_0_100%] min-w-0">Slide 3</div>
        </div>
      </div>

      <button className="embla__prev" onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className="embla__next" onClick={goToNext}>
        Scroll to next
      </button>
    </div>
  )
}