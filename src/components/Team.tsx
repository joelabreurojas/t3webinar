import Image from "next/image";
import Link from "next/link";

import fsPromises from "fs/promises";
import path from "path";

interface TeamData {
  id: number;
  name: string;
  image: string;
  cv: string;
}

async function getTeamData(): Promise<{ team: TeamData[] }> {
  const filePath = path.join(process.cwd(), "src/data/team.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString()) as { team: TeamData[] };
  return data;
}

const data: TeamData[] = (await getTeamData()).team.map((member: TeamData, index: number) => ({
  id: index + 1,
  name: member.name,
  image: member.image,
  cv: member.cv,
}));

const TeamItem = ({ data }: { data: TeamData }) => {
  const { name, image, cv } = data;
  return (
    <article>
      <Link href={cv} target="_blank">
        <Image
          src={image}
          alt={name}
          title={name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-16 rounded-full"
        />
      </Link>
    </article>
  );
};

const TeamList = () => {
  return (
    <section className="mx-auto mt-8 flex flex-row flex-wrap justify-center gap-4 rounded-lg bg-white p-4">
      {data.map((data: TeamData) => (
        <TeamItem key={data.id} data={data} />
      ))}
    </section>
  );
};

function Team() {
  return (
    <section id="team" className="bg-purple">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-16 px-8 py-24 text-white lg:max-w-7xl lg:flex-row lg:justify-center">
        <Image
          alt={"Teamwork"}
          width={0}
          height={0}
          sizes="100vw"
          src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="hidden w-1/2 rounded-lg lg:block"
        ></Image>
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="font-title text-lg font-bold">Our team</h2>
          <p className="text-sm">
            Feel free to browse the profiles and portfolios
          </p>
          <TeamList />
          <div className="mt-8 flex flex-row justify-end gap-4 text-base font-semibold lg:justify-start">
            <Link
              href="https://drive.google.com/drive/u/1/folders/1mU4SYcdiKql4cncDtBxqqCgDf-dKUQlZ"
              target="_blank"
            >
              See more
            </Link>
            <Image
              src="https://utfs.io/f/cb259537-7cbe-49a2-8794-3fe46f2a3424-jo7eui.svg"
              alt="Arrow"
              width={0}
              height={0}
              sizes="100vw"
              className="w-5"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
