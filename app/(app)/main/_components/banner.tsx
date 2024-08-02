"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { BannerCard } from "./banner/banner-card";

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(2);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <BannerCard
              imageUrl="/images/pizza/pizza-3007395_1280.jpg"
              title="서울 피자 맛집 5선"
              subTitle="올해 안에 반드시 가봐야한다."
              url="/article/123"
            />
          </CarouselItem>
          <CarouselItem>
            <BannerCard
              imageUrl="/images/pizza/pizza-3007395_1280.jpg"
              title="대충 두번 쨰 캐로셀"
              subTitle="올해 안에 반드시 가봐야한다."
              url="/article/123"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <div className="absolute bottom-3 right-5 text-primary-foreground text-xs">
        {current}/{count}
      </div>
    </div>
  );
}
