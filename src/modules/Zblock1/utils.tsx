import { SiGoogleslides } from "react-icons/si";
import Image from "next/image";

export const VideoSection = ({
  videoData,
}: {
  videoData: {
    id: string;
    title: string;
    description: string;
    link?: string;
  }[];
}) => {
  return (
    <div className="flex flex-col bg-[#E8FFF8] my-6 rounded-lg ">
      {videoData.map((video) => (
        <div key={video.id} className="p-4 duration-700">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <Image alt="" src="/icons/youtube.svg" className="h-[1rem]" />
              <h3 className="hover:underline font-bold">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center "
                >
                  {video.title}
                </a>
              </h3>
            </div>
            {video.link && (
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500"
              >
                <SiGoogleslides className="mr-1" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Notes = ({
  notes,
}: {
  notes: { title: string; link: string };
}) => {
  return (
    <>
      <Image alt="" src="/icons/notes.svg" className="h-[2rem]" />
      <a
        href={notes.link}
        className="hover:underline font-bold"
        target="_blank"
        rel="noopener noreferrer"
      >
        {notes.title}
      </a>
    </>
  );
};

export const Report = ({
  report,
}: {
  report: { title: string; link: string };
}) => {
  return (
    <>
      <Image alt="" src="/icons/report.svg" className="h-[2rem]" />
      <a
        href={report.link}
        className="hover:underline font-bold"
        target="_blank"
        rel="noopener noreferrer"
      >
        {report.title}
      </a>
    </>
  );
};

export const Discussion = ({
  chat,
}: {
  chat: { title: string; link: string };
}) => {
  return (
    <>
      <Image alt="" src="/icons/chat.svg" className="h-[2rem]" />
      <a
        href={chat.link}
        className="hover:underline font-bold"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chat.title}
      </a>
    </>
  );
};
