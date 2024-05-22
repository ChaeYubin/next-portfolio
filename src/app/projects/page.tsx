import ProjectItem from "@/components/Projects/ProjectItem";
import { Client } from "@notionhq/client";

async function getProjects() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  try {
    const databaseId = process.env.NOTION_DATABASE_ID!;
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col place-items-stretch min-h-screen min-w-96 md:w-full lg:w-full">
      <h1 className="text-2xl font-bold sm:text-3xl mb-5">
        총 프로젝트: {projects?.results.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-9">
        {projects?.results.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}
