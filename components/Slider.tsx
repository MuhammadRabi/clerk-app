'use client'

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { DoorClosed, Home, Tornado } from 'lucide-react'

function Slider() {
  return (
    <Carousel
      className='w-5/6 md:w-3/4'
      opts={{
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 2000
        })
      ]}
    >
      <CarouselContent>
        <CarouselItem className='h-48 rounded-md bg-cyan-100 p-4'>
          <Home />
        </CarouselItem>
        <CarouselItem className='h-48 rounded-md bg-pink-100 p-4'>
          <Tornado />
        </CarouselItem>
        <CarouselItem className='h-48 rounded-md bg-orange-100 p-4'>
          <DoorClosed />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Slider
