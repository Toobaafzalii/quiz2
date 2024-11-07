import { useRouter } from "next/navigation";
export default function Landing() {
  const router = useRouter();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = e.currentTarget.textContent;
    router.push("/posts");
  };
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full min-h-[75vh] bg-center bg-cover bg-indigo-100"
            style={{
              backgroundImage:
                "url('https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/ill_header_3.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-gray-950"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    This is a simple example of a Landing Page you can build
                    using Tailwind Starter Kit. It features multiple CSS
                    components based on the Tailwindcss design system.
                  </p>

                  <button
                    className="my-10 mx-auto bg-indigo-800 text-white px-3 py-3 rounded-xl w-72 text-2xl text-nowrap font-gray-800 shadow-lg font-semibold col-span-1 lg:col-span-2 hover:bg-indigo-500"
                    onClick={handleOnClick}
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "5px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className=" bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  {/* <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div> */}
                  <img src="./public/screenshot3.png" />
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  {/* <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div> */}
                  <img src="./public/screenshot1.png" />
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center z-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  {/* <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div> */}
                </div>
                <img src="./public/screenshot2.png" />
              </div>
            </div>
          </div>
          <div className=" mt-10 w-full h-52 bg-slate-500 bg-gradient-to-t from-slate-700 rounded-t-full"></div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
