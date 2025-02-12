import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div className="flex-col">
        <div className="">
          <div className="w-full overflow-hidden">
            {/* Home */}
            <section id="home" className="w-full min-h-screen py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center
             text-center bg-[url('/background-image.svg')] bg-[length:100%_100%] bg-no-repeat">
              <div className="px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="space-y-4">
                    <h2 className="text-font-yellow text-l tracking-wide text-start  md:text-2xl">
                      ***<br />WelCome To</h2>
                    <h1 className="text-6xl md:text-9xl">
                      Singulariti</h1>
                    <p className="mx-auto max-w-[700px] text-font-yellow text-l md:text-2xl text-end">
                    a step towards personalized AI</p>
                  </div>
                  <div className="flex flex-col items-center lg:space-x-14 sm:flex-row gap-4 mt-8 p-8">
                    <button className="hidden font-semibold rounded-xl lg:text-lg px-4 h-14 bg-[#E2DFD0]/75 hover:bg-white/80 text-black border-2 border-white/50 shadow-inner shadow-white/80"
                    >Download For Mac</button>
                    <button className="hidden font-semibold rounded-xl lg:text-lg px-4 h-14 bg-[#E2DFD0]/75 hover:bg-white/80 text-black border-2 border-white/50 shadow-inner shadow-white/80"
                    >Download For Windows</button>
                    <Link
                      href="/early-access"
                    >
                      <button className="font-semibold rounded-xl lg:text-lg px-4 h-14 bg-[#E2DFD0]/75 hover:bg-white/80 text-black border-2 border-white/50 shadow-inner shadow-white/80"
                      >Register For Early Access</button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
