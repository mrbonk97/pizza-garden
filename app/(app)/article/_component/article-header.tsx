import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ArticleHeader = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold">서울 피자 맛집 5선</h1>
      <h2 className="mt-0.5 text-xl font-medium opacity-80">
        올해 반드시 가야하는 가게들
      </h2>
      <div className="mt-5 flex items-center gap-5">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <hgroup>
          <h4 className="text-xl font-medium">김현석</h4>
          <span className="text-sm">2024.08.02</span>
        </hgroup>
      </div>
      <Separator className="mt-5 mb-2" />
      <div className="flex items-center gap-4 text-sm">
        <div>조회수: 126 </div>
        <Separator orientation="vertical" className="bg-custom-200 h-3" />
        <div>추천: 6 </div>
        <Separator orientation="vertical" className="bg-custom-200 h-3" />
        <div>저장: 12 </div>
      </div>
      <Separator className="my-2" />
    </section>
  );
};
