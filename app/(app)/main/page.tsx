import { ChevronRight, MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { CarouselDApiDemo } from "./_components/banner";
import { MiniMenuCard } from "@/components/card/half-card";
import { MINI_MENU_LIST } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MainPage = () => {
  return (
    <main className="min-h-full w-full flex justify-center bg-custom-200">
      <div className="pt-20 p-5 h-full w-[1100px] bg-custom-100 border-l border-r">
        <CarouselDApiDemo />
        <section className="mt-5">
          <header className="mb-2 px-2">오늘의 추천 피자</header>
          <Link
            href={"/pizza/1"}
            className="mt-3 p-5 pr-10 w-full h-60 flex justify-between bg-background rounded-lg group cursor-pointer"
          >
            <div className="flex gap-5">
              <Image
                width={200}
                height={200}
                alt="maddux"
                src={"/images/pizza/maddux.jpg"}
              />
              <div>
                <h2 className="text-2xl font-medium">매덕스 피자</h2>
                <div className="opacity-80">뉴욕스타일 정통 피자</div>
                <div className="flex items-center gap-1">
                  <MapPinIcon size={16} />
                  서울 용산구 이태원로26길 26 2층
                </div>
                <div className="flex">
                  <StarIcon className="text-yellow-300" />
                  <StarIcon className="text-yellow-300" />
                  <StarIcon className="text-yellow-300" />
                  <StarIcon className="text-yellow-300" />
                  <StarIcon className="text-yellow-300" />
                </div>
              </div>
            </div>
            <div className="h-full flex items-center group-hover:text-custom-300 group-hover:translate-x-2 duration-200">
              <ChevronRight size={32} />
            </div>
          </Link>
        </section>

        <section className="mt-5">
          <header className="mb-2 px-2 flex items-center justify-between">
            <span>새로 오픈한 가게</span>
            <Button variant={"link"} asChild className="p-0 m-0 h-auto text-sm">
              <Link href={"/spot/new"}>전체보기</Link>
            </Button>
          </header>

          <CarouselDApiDemo />
        </section>

        <section className="mt-5">
          <header className="mb-2 px-2">새로운 리뷰</header>
          <CarouselDApiDemo />
        </section>

        <section className="mt-5">
          <header className="mb-2 px-2">메뉴</header>
          <ul className="flex gap-5">
            {MINI_MENU_LIST.map((item) => (
              <li className="h-60 w-1/3" key={item.url}>
                <MiniMenuCard
                  imageUrl={item.icon}
                  title={item.title}
                  url={item.url}
                  bgColor={item.bgColor}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default MainPage;
