import Link from "next/link";
import Animation from "./Animation";

export default function Home() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. ~ 개발자 채유빈입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          늘 더 나은 나를 갈망하고, 성취하는 사람이 되고자 합니다. 열정과 열정이
          만나 만들어지는 시너지를 좋아하며, 협업할 때 상호 존중을 가장 중요하게
          생각합니다. 혼자보다는 함께 꿈꾸고, 해내고, 성장하는 것이 즐겁습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
