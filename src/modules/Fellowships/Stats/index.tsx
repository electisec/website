function Stats() {
  return (
    <div className="pt-16 grid grid-cols-2 sm:flex sm:flex-col gap-4">
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold">
          Fellowship Programs
        </h1>
        <h2 className="text-semibold text-xl mt-8">
          General structure and Guidelines
        </h2>
        <p className="text-zinc-500">
          <br />
          Electisec fellowships are not introductory programs to software
          auditing. They are trial-by-fire programs where you will audit
          pre-production or in-production codebases, and the stakes are very
          high.
          <br /> <br />
        </p>
        <ul className="list-disc list-inside">
          <li>
            You will be auditing alongside our residents, guest auditors, and
            mentors.
          </li>
          <br />
          <li>
            You will be expected to participate, add value to the discussions,
            and submit reports.
          </li>
          <br />
          <li>
            You will be expected to be fluent at setting up test environments,
            and running common tools.
          </li>
          <br />
          <li>
            You are not required to have experience in auditing in the Web3
            space, but you must be proficient in software engineering generally
            and have published proof of technical work. Please note that as the
            Electisec fellowship continues getting more popular, the competition
            to join our programs is increasing with each iteration.
          </li>
        </ul>
        <br /> <br />
      </div>
      <div className="col-span-1 flex flex-col">
        <img src="./illustrations/stats-pie.svg" className="h-[30rem]" />
        <p className="text-zinc-300 italic text-center">
          Our stats for the first 5 Smart Contract fellowships
        </p>
      </div>
    </div>
  );
}

export default Stats;
