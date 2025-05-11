export default function Footer() {
  return (
    <div className="">
      <div className=" p-10 sm:px-16">
        <div className="sm:px-8 md:px-20 lg:px-60">
          <h1 className="font-primary text-5xl font-bold ">
            <span className="bg-gradient-to-r from-sky-200 via-white to-pink-300 bg-clip-text text-transparent">
              Don't be a stranger!
            </span>{" "}
            <span> 👋</span>
          </h1>
          <p className="mt-5 sm:mt-10">connect with me online</p>

          <div className="mt-10 flex gap-5 text-sm sm:text-lg font-ter ">
            <a href="https://twitter.com/jayadeep11" target="_blank">
              <span>💼 </span>
              <span>LINKEDIN</span>
            </a>
            <a href="https://github.com/jayadeep11" target="_blank">
              <span>👾 </span>
              <span>GITHUB</span>
            </a>
            <a href="https://github.com/jayadeep11" target="_blank">
              <span>🐦 </span>
              <span>TWITTER</span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full border border-neutral-500 border-[0.5px] sm:mt-10 "></div>

      <div className="p-10">
        <h1 className="font-bold">Jayadeep.</h1>
      </div>
    </div>
  );
}
