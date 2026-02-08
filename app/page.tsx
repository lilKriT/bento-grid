import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="grid grid-cols-12 grid-rows-12 gap-8 mx-8 my-32">
        {/* First section */}
        <div className="flex flex-col justify-center items-center col-start-4 row-start-1 col-span-6 row-span-4 bg-purple-500 text-white p-8 text-center rounded-xl">
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
        <div className="flex flex-col justify-center items-center col-start-4 row-start-5 col-span-3 row-span-4 bg-white rounded-xl">
          <p>Manage multiple accounts and platforms.</p>
        </div>

        {/* Third section */}
        <div className="flex flex-col justify-center items-center col-start-7 row-start-5 col-span-3 row-span-4 bg-yellow-500 rounded-xl">
          <p>Maintain a consistent posting schedule.</p>
        </div>

        {/* Fourth section */}
        <div className="flex flex-col justify-center items-center col-start-10 row-start-1 col-span-3 row-span-8 bg-purple-100 rounded-xl">
          <p>Schedule to social media.</p>
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        {/* Fifth section */}
        <div className="flex flex-col justify-center items-center col-start-7 row-start-9 col-span-6 row-span-4 bg-purple-500 rounded-xl">
          <p>Grow followers with non-stop content.</p>
        </div>

        {/* Sixth section */}
        <div className="flex flex-col justify-center items-center col-start-4 row-start-9 col-span-3 row-span-4 bg-white rounded-xl">
          <p>{">56% faster audience growth"}</p>
        </div>

        {/* Seventh section */}
        <div className="flex flex-col justify-center items-center col-start-1 row-start-1 col-span-3 row-span-6 bg-yellow-100 rounded-xl">
          <p>Create and schedule content quicker.</p>
        </div>

        {/* Eigth section */}
        <div className="flex flex-col justify-center items-center col-start-1 row-start-7 col-span-3 row-span-6 bg-yellow-500 rounded-xl">
          <p>Write your content using AI.</p>
        </div>
      </div>
    </section>
  );
}
