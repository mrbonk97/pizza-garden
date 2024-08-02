import { Footer } from "@/components/nav/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notoSerif } from "./layout";

export default function Home() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="fixed -z-10 object-cover h-full w-full"
      >
        <source src="/videos/pond.mp4" type="video/mp4" />
      </video>
      <main
        className={`${notoSerif.className} h-full flex2 flex-col pb-20 bg-custom-300/50 text-custom-100`}
      >
        <h1 className="text-9xl font-black">秶</h1>
        <h1 className="mt-10 text-7xl font-medium">피자 정원</h1>
        <Button className="mt-16 text-inherit" variant={"link"} asChild>
          <Link href={"/main"}>들어가기</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}
