import { core } from "../Data/core";
import Image from "next/image";
export function Template({
  title,
  members,
}: {
  title: string;
  members: {
    name: string;
    twitter: string;
    avatar?: string;
  }[];
}) {
  return (
    <div className="my-24">
      <h1 className="text-4xl mb-12 sm:text-center">{title}</h1>
      <ul
        role="list"
        className="grid lg:grid-cols-3 grid-cols-2 lg:gap-x-72 md:gap-x-32 gap-y-12"
      >
        {members.map((person) => (
          <li key={person.name}>
            <div className="flex flex-row sm:flex-col items-center gap-x-6">
              <Image
                className="h-11 w-11 sm:h-9 sm:w-9 sm:mb-2 rounded-full items-center"
                src={person.avatar ? person.avatar : "members/resident.png"}
                alt={person.name}
              />
              <div>
                <h3
                  className={
                    `sm:text-xs font-semibold text-gray-900 ` +
                    (person.twitter.length > 0 && "hover:underline")
                  }
                >
                  {person.twitter.length > 0 ? (
                    <a href={person.twitter} target="_blank">
                      {person.name}
                    </a>
                  ) : (
                    person.name
                  )}
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Core() {
  return (
    <>
      <Template title={"Core"} members={core} />
    </>
  );
}
