import Image from "next/image";

function GuestAuditor() {
  return (
    <div>
      <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold mb-8">
        Guest Auditor Program
      </h1>

      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-16 my-4">
        <div className="col-span-1 flex flex-col gap-8 justify-center">
          <div>
            <ul className="list-disc list-inside">
              <li>
                Auditing is a lonely business, but it doesn’t have to be that
                way
              </li>
              <br />
              <li>
                If you have a strong track record in the security space
                (previous group auditing experience, multiple podium finishes on
                code4rena or Sherlock, Immunefi bounties, or outstanding
                security research), we welcome you to be our guest for 1-2 weeks
                and audit alongside our usual residents.
              </li>
              <br />
              <li>
                You will be prepped and supported by our resident auditors and
                core staff. All you have to do is show up, review code, and
                engage with our residents and fellows for the duration of the
                engagement.
              </li>
              <br />
              <li>
                You will be given access to the codebase well in advance to
                familiarize yourself with it. Our auditing sprints are a mix of
                sync calls and async discussions. Our fellows work in groups,
                and you’ll have access to their groups to participate and
                mentor, alongside our resident auditors who are always there as
                well.
              </li>
            </ul>
          </div>
          <p>
            If you think you are a good fit for the program (yay!), please
            contact us at hello AT electisec DOT dev
          </p>
          {/* <Link href={"/fellowships"}>
            <button className="w-1/2 px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Apply
            </button>
          </Link> */}
        </div>
        <div className="col-span-1 justify-self-center">
          <img
            alt="fist-bump"
            src="./illustrations/fist-bump.svg"
            className="py-4 h-[20rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default GuestAuditor;
