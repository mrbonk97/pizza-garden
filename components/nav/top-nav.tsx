import Link from "next/link";
import { Logo } from "./logo";
import { SearchDrawer } from "./search-drawer";

export const Topnav = () => {
  return (
    <header className="fixed z-10 top-0 px-[5%] h-12 flex items-center justify-between w-full border-b bg-background shadow-lg">
      <Logo />
      <nav className="text-sm">
        <ul className="flex gap-10">
          <li>
            <Link href={"/map"}>지도</Link>
          </li>
          <li>
            <SearchDrawer />
          </li>
          <li>
            <Link href={"/saved"}>좋아요</Link>
          </li>
        </ul>
      </nav>
      <Link href={"/sign-in"}>로그인</Link>
    </header>
  );
};
