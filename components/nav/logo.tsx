import { notoSerif } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className={`${notoSerif.className} flex items-center`}>
      <Image
        src={"/images/pizza-garden.png"}
        alt="logo"
        width={30}
        height={30}
      />
      피자가든
    </Link>
  );
};
