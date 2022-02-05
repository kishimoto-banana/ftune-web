import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Ftuneについて</title>
      </Head>
      <div className="pt-4">
        <h1 className="text-2xl font-bold text-pink-600 pb-4">Ftuneとは</h1>

        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl border-b-2 border-pink-600">
            毎日自動であなたへの占いをお届け
          </h2>
          <div className="pt-2 pb-2 px-4 max-w-about">
            <p className="leading-relaxed text-justify">
              Ftuneは生年月日を登録するだけで、様々なあなたへの占いをお届けするサービスです。
            </p>
            <p className="leading-relaxed text-justify">
              今日の占いや今週の占い、今年の占いなど色々な占いをお届けするので、もう占いを検索して確認する必要はありません。
            </p>
          </div>
          <img src="/uranai_list.png" alt="" className="h-80 w-auto" />
        </div>

        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl border-b-2 border-pink-600">
            独自AIによる占いの分析
          </h2>
          <div className="pt-2 pb-2 px-4 max-w-about">
            <p className="leading-relaxed text-justify">
              独自のAIにより複数の占いを横断してあなたの運勢を分析します。
            </p>
            <p className="leading-relaxed text-justify">
              複数の占いを集約した運勢のスコアや、運勢のキーワードなどを確認できます。
            </p>
          </div>
          <img src="/today_fortune.png" alt="" className="h-44 w-auto" />
        </div>

        <div className="flex flex-col items-center pt-4">
          <h2 className="text-xl">お問い合わせ</h2>
          <div className="pt-2 pb-2 px-4 max-w-about">
            <p className="pb-2 leading-relaxed text-justify">
              本サービスに関するお問い合わせは、以下のメールアドレスにご連絡ください。
            </p>
            <a
              href="mailto:support@bootch.app"
              className="underline text-gray-600 hover:text-gray-800"
            >
              support@bootch.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
