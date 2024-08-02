import { Noto_Serif_KR } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const Logo = () => {
  return (
    <Link href={"/main"} className={`${notoSerif.className} flex items-center`}>
      <Image src={"/images/제목 없음.png"} alt="logo" width={30} height={30} />
      피자가든
    </Link>
  );
};
