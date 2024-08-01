import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const SignInPage = () => {
  return (
    <main className="h-full flex2 bg-blue-300">
      <div className="h-4/5 w-4/5 flex shadow-2xl rounded-3xl">
        <section className="p-10 pb-20 pr-20 h-full w-1/2 flex2 rounded-l-3xl bg-background">
          <div className="w-full max-w-96">
            <h1 className="text-2xl font-bold">로그인 하기</h1>
            <p className="font-medium">피자 가든의 모든 서비스</p>
            <form className="mt-10 w-full space-y-4">
              <Input className="py-6" placeholder="아이디" />
              <Input
                className="py-6"
                placeholder="패스워드 8자 이상(특수기호 포함)"
              />
              <Button className="py-6 w-full">로그인</Button>
            </form>
            <p className="mt-10 opacity-70 text-sm text-center">
              계정이 없으시다면{" "}
              <Link href="/">
                <u>회원가입</u>
              </Link>
            </p>
          </div>
        </section>
        <section className="relative h-full w-1/2 rounded-r-3xl overflow-hidden bg-background">
          <Image
            src="/images/skeleton-studio2.jpg"
            alt="skeleton"
            objectFit="cover"
            fill
          />
        </section>
      </div>
    </main>
  );
};

export default SignInPage;
