import Image from "next/image";

const defaultStyle = "flex flex-col justify-center items-center rounded-xl ";

export default function Home() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="max-w-7xl grid grid-cols-12 grid-rows-12 gap-8 mx-8 my-16">
        {/* First section */}
        <div
          className={
            defaultStyle +
            "col-start-4 row-start-1 col-span-6 row-span-4 bg-purple-500 text-white p-8 text-center"
          }
        >
          <h2 className="text-5xl">
            Social Media <span className="text-yellow-500">10x</span>{" "}
            <i>Faster</i> with AI
          </h2>
          <Image
            src={"/illustration-five-stars.webp"}
            alt="5 star rating"
            width={384}
            height={64}
            className="h-8 w-auto"
          />
          <p>Over 4,000 5-star reviews</p>
        </div>

        {/* Second section */}
        <div
          className={
            defaultStyle +
            "col-start-4 row-start-5 col-span-3 row-span-4 bg-white"
          }
        >
          <p>Manage multiple accounts and platforms.</p>
        </div>

        {/* Third section */}
        <div
          className={
            defaultStyle +
            "col-start-7 row-start-5 col-span-3 row-span-4 bg-yellow-500"
          }
        >
          <p>Maintain a consistent posting schedule.</p>
        </div>

        {/* Fourth section */}
        <div
          className={
            defaultStyle +
            "col-start-10 row-start-1 col-span-3 row-span-8 bg-purple-100"
          }
        >
          <p>Schedule to social media.</p>
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        {/* Fifth section */}
        <div
          className={
            defaultStyle +
            "col-start-7 row-start-9 col-span-6 row-span-4 bg-purple-500"
          }
        >
          <p>Grow followers with non-stop content.</p>
        </div>

        {/* Sixth section */}
        <div
          className={
            defaultStyle +
            "col-start-4 row-start-9 col-span-3 row-span-4 bg-white"
          }
        >
          <p>{">56% faster audience growth"}</p>
        </div>

        {/* Seventh section */}
        <div
          className={
            defaultStyle +
            "col-start-1 row-start-1 col-span-3 row-span-6 bg-yellow-100 p-8 gap-8"
          }
        >
          <p className="text-4xl font-medium leading-[1] text-balance">
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
            "col-start-1 row-start-7 col-span-3 row-span-6 bg-yellow-500 p-8"
          }
        >
          <p className="text-4xl text-balance font-medium leading-[1]">
            Write your content using AI.
          </p>
          <Image
            src={"/illustration-ai-content.webp"}
            alt="Write your content..."
            width={440}
            height={446}
            className="mt-16 scale-105 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
