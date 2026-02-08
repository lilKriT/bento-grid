import Image from "next/image";

const defaultStyle = "flex flex-col justify-center items-center rounded-xl ";

export default function Home() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="max-w-7xl flex flex-col gap-8 lg:grid grid-cols-12 grid-rows-[repeat(12,auto)] gap-8 mx-8 my-16">
        {/* First section */}
        <div
          className={
            defaultStyle +
            "col-start-4 row-start-1 col-span-6 row-span-4 bg-purple-500 text-white p-8 text-center"
          }
        >
          <h2 className="text-5xl font-medium leading-none text-balance">
            Social Media <span className="text-yellow-500">10x</span>{" "}
            <i>Faster</i> with AI
          </h2>
          <Image
            src={"/illustration-five-stars.webp"}
            alt="5 star rating"
            width={384}
            height={64}
            className="h-8 w-auto mt-6"
          />
          <p>Over 4,000 5-star reviews</p>
        </div>

        {/* Second section */}
        <div
          className={
            defaultStyle +
            "col-start-4 row-start-5 col-span-3 row-span-4 bg-white p-6 overflow-hidden flex flex-col gap-4"
          }
        >
          <Image
            src={"/illustration-multiple-platforms.webp"}
            alt="Multiple platforms"
            width={633}
            height={134}
            className="scale-125 origin-left rounded-full"
          />
          <p className="text-xl md:text-2xl lg:text-4xl font-medium leading-none mt-auto">
            Manage multiple accounts and platforms.
          </p>
        </div>

        {/* Third section */}
        <div
          className={
            defaultStyle +
            "col-start-7 row-start-5 col-span-3 row-span-4 bg-yellow-500 pl-4 pr-20 pt-4 lg:p-8 pb-0 overflow-hidden gap-4"
          }
        >
          <p className="text-4xl font-medium leading-none text-balance">
            Maintain a consistent posting schedule.
          </p>
          <Image
            src={"/illustration-consistent-schedule.webp"}
            alt="Calendar image"
            width={715}
            height={638}
            className="relative -mb-20"
          />
        </div>

        {/* Fourth section */}
        <div
          className={
            defaultStyle +
            "col-start-10 row-start-1 col-span-3 row-span-8 bg-purple-100 gap-8 overflow-hidden py-8"
          }
        >
          <p className="text-2xl lg:text-3xl font-medium leading-none text-balance px-8">
            Schedule to social media.
          </p>
          <Image
            src={"/illustration-schedule-posts.webp"}
            alt="Post Scheduling"
            width={715}
            height={638}
            className="px-4 lg:px-0 lg:ml-16 my-4 origin-left lg:scale-130"
          />
          <p className="font-medium px-8">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        {/* Fifth section */}
        <div
          className={
            defaultStyle +
            "col-start-7 row-start-9 col-span-6 row-span-4 flex flex-col gap-8 px-12 py-6 lg:grid grid-cols-2 bg-purple-500 lg:p-6 lg:gap-4"
          }
        >
          <Image
            src={"/illustration-grow-followers.webp"}
            alt="Followers chart"
            width={456}
            height={402}
            className=""
          />
          <p className="text-4xl font-medium text-white leading-none">
            Grow followers with non-stop content.
          </p>
        </div>

        {/* Sixth section */}
        <div
          className={
            defaultStyle +
            "col-start-4 row-start-9 col-span-3 row-span-4 bg-white p-6 justify-evenly items-start gap-4"
          }
        >
          <p className="text-7xl font-medium">&gt;56%</p>
          <p className="font-medium">faster audience growth</p>
          <Image
            src={"/illustration-audience-growth.webp"}
            alt="Profile pics"
            width={358}
            height={134}
            className="w-4/5 mt-auto"
          />
        </div>

        {/* Seventh section */}
        <div
          className={
            defaultStyle +
            "col-start-1 row-start-1 col-span-3 row-span-6 bg-yellow-100 p-8 gap-8"
          }
        >
          <p className="text-4xl font-medium leading-none text-balance">
            Create and schedule content{" "}
            <span className="text-purple-500 italic">quicker.</span>
          </p>

          <Image
            src={"/illustration-create-post.webp"}
            alt="Create post..."
            width={382}
            height={182}
            className=""
          />
        </div>

        {/* Eigth section */}
        <div
          className={
            defaultStyle +
            "col-start-1 row-start-7 col-span-3 row-span-6 bg-yellow-500 p-8 gap-8 items-start lg:items-center"
          }
        >
          <p className="text-3xl lg:text-4xl text-balance font-medium leading-none">
            Write your content using AI.
          </p>
          <Image
            src={"/illustration-ai-content.webp"}
            alt="Write your content..."
            width={440}
            height={446}
            className="mt-auto lg:scale-105 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
