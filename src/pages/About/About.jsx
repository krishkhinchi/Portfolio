import HeroImg from "@/assets/images/hero.png";
import KrishHackz from "@/assets/images/KrishHackz.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
              👋 Hi there! I'm a 𝗕.𝗧𝗲𝗰𝗵 Computer Science Engineering student (CSE '28) with a passion for coding and technology.{" "}
                <span className="font-bold text-white">
                Currently, I’m learning Data Structures and Algorithms
                </span>
                , and I'm passionate about web development.
              </p>
              <p className="text-white">
                🦾 Armed with a strong foundation in C++ and JavaScript, I thrive on solving complex problems and developing innovative solutions. My experience with 𝗔𝗿𝗱𝘂𝗶𝗻𝗼🤖 allows me to blend hardware and software, creating exciting projects that push the boundaries of technology.
              </p>

              <p className="text-white">
                🌐 As a 𝗠𝗘𝗥𝗡 𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿, I enjoy crafting dynamic and user-friendly web applications, enhancing user experience and functionality. My proficiency in 𝗟𝗶𝗻𝘂𝘅❤️ enables me to work efficiently across diverse environments, and I’m always eager to expand my knowledge in the ever-evolving tech landscape.
              </p>

              <p className="text-white">
                💻 I’m also an enthusiastic competitor in 𝗰𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝘃𝗲 𝗽𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 (𝗖𝗣), where I challenge myself to think critically and develop efficient algorithms.
              </p>

              {/* <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  As the Founder and CEO of Krish Hackz, I am dedicated to <br />
                  transforming innovative ideas into impactful solutions. My <br />
                  role encompasses the full spectrum of entrepreneurship, <br />
                  from conceptualizing the business model to leading <br />
                  strategic initiatives that drive growth and sustainability.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Krish Khinchi, Founder & CEO of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={KrishHackz}
                        alt="KrishHackz Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Krish Hackz</span>
                    </div>
                  </div>
                </blockquote>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
