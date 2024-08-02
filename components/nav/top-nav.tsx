import Link from "next/link";
import { Logo } from "./logo";

export const Topnav = () => {
  return (
    <header className="fixed top-0 px-[5%] h-12 flex items-center justify-between w-full border-b bg-background shadow-lg">
      <Logo />
      <nav>
        <ul className="flex gap-10">
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
        </ul>
      </nav>
      <Link href={"/sign-in"}>로그인</Link>
    </header>
  );
};
