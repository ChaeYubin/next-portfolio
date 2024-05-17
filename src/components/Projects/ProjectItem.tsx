import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";

// any 타입이 최선일까... 위 타입들 중 PageObject Response에 분명히 properties가 존재하는데 인식을 못 함.
export default function ProjectItem({ data }: { data: any }) {
  const title = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const startDate = data.properties.WorkPeriod.date.start;
  const endDate = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start: string, end: string) => {
    const startDateStringArray = start.split("-").map(Number);
    const endDateStringArray = end.split("-").map(Number);

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(Number(endDate) - Number(startDate));
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <div className="project-img rounded-t-md">
        <Image src={imgSrc} alt="프로젝트 커버 이미지" fill />
      </div>
      <div className="p-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-2 text-xl">{description}</h3>
        <a href={githubLink}>깃허브 바로가기</a>
        <h3 className="mt-2">
          작업 기간: {startDate}~{endDate} (
          {calculatedPeriod(startDate, endDate)}일)
        </h3>

        <div className="flex items-start mt-2">
          {tags.map((tag: any) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
