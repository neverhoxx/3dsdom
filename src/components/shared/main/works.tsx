import { Container } from "../container"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"

import work1 from "@/images/main-hero-bg.jpg"
import work2 from "@/images/work2.jpg"
import work3 from "@/images/work3.jpg"
import work4 from "@/images/work4.jpg"
import work5 from "@/images/work5.jpg"
import work6 from "@/images/work6.jpg"
import work7 from "@/images/work7.jpg"
import work8 from "@/images/work8.jpg"

export function MainWorks() {

    const worksArray = [
        { picSrc: work1 },
        { picSrc: work2 },
        { picSrc: work3 },
        { picSrc: work4 },
        { picSrc: work5 },
        { picSrc: work6 },
        { picSrc: work7 },
        { picSrc: work8 },
    ]

    return (
        <Container className="mt-25 flex flex-col items-center select-none">
            <Carousel className="w-[85%]">
                <CarouselContent className="-ml-1">
                    {worksArray.map(({ picSrc }, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 md:basis-1/1 lg:basis-1/1"
                        >
                            <div className="p-1 text-center rounded-2xl overflow-hidden aspect-[16/9]">
                                <Image
                                    className="rounded-2xl object-contain w-full h-full"
                                    src={picSrc}
                                    alt={`3dsdom work ${index + 1}`}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="adaptive-arrows" />
                <CarouselNext className="adaptive-arrows" />
            </Carousel>
        </Container>

    )
}
