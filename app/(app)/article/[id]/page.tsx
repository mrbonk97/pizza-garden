import { ArticleHeader } from "../_component/article-header";

const ArticlePage = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <main className="h-full w-full flex justify-center bg-custom-200">
      <div className="p-10 pt-20 h-full w-[1100px] bg-background">
        <ArticleHeader />
        <section className="mt-5">
          안녕하세요 서울 피자 맛집 5군데를 소개해드립니다.
          <ul>
            <li>1. 매덕스</li>
            <li>2. 매덕스 신사</li>
            <li>3. 피자 가든</li>
            <li>4. 밀리언 피자</li>
            <li>5. 900달러 피자</li>
          </ul>
          아직 안가보셨다면 ㅋㅋ 인생 헛 사산 것입니다.
        </section>
      </div>
    </main>
  );
};

export default ArticlePage;
