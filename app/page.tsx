import { Door } from "@/components/door";
import { Footer } from "@/components/nav/footer";
import { Button } from "@/components/ui/button";
import {
  Bubblegum_Sans,
  Noto_Serif_Khitan_Small_Script,
  Noto_Serif_KR,
} from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// const inter = Bubblegum_Sans({ subsets: ["latin"], weight: ["400"] });
const inter = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export default function Home() {
  return (
    <>
      <main className="h-full flex2 flex-col pb-20 bg-custom-300 text-custom-100">
        <h1 className="text-9xl font-black">秶</h1>
        <h1 className={`${inter.className} mt-10 text-7xl font-medium`}>
          피자 정원
        </h1>
        <Button className="mt-16 text-inherit" variant={"link"} asChild>
          <Link href={"/main"}>들어가기</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}
