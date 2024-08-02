import { MapPinIcon } from "lucide-react";

const PizzaPage = ({ params }: { params: { id: string } }) => {
  return (
    <main className="h-full w-full flex justify-center bg-custom-200">
      <div className="p-10 pt-20 h-full w-[1100px] bg-background">
        <h1 className="text-4xl font-bold">매덕스 피자</h1>
        <div className="pt-0.5 flex items-center gap-1 text-sm">
          <MapPinIcon size={16} />
          <span>서울 용산구 이태원로26길 26 2층</span>
        </div>
      </div>
      <section></section>
    </main>
  );
};

export default PizzaPage;
