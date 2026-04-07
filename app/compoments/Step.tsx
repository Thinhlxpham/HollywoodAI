import stepbg from "../public/assets/steps-bg.jpg"

const steps = [
  { number: 1, text: "Browse through our wide selection of the world's most popular movies" },
  { number: 2, text: "Simply select a movie you'd like to have summarised and let our AI algorithms do the rest." },
  { number: 3, text: "Take a couple of minutes to read and listen to the summary. And you're done!" },
]

export default function Step() {
  return (
    <section id="steps">
      <div className="py-[60px] px-[10px] sm:px-[20px]">
        <div
          className="max-w-[1280px] mx-auto rounded-[50px] bg-[#010101] py-24 px-10 
          text-white/60 flex flex-col items-center text-center"
          style={{
            backgroundImage: `url(${stepbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-[64px] text-[#e5e6e6] leading-none tracking-[-1.92px] max-w-[430px] w-full mb-14">
            So, how does it work?
          </h2>

          <div className="flex flex-col gap-[32px] md:flex-row relative">
            {/* Divider line behind the numbers */}
            <div className="none md:block border-t border-white/10 w-[70%] absolute left-1/2 -translate-x-1/2 translate-y-8" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="group flex flex-col items-center px-5 transition-transform duration-[400ms] hover:-translate-y-3"
              >
                <div
                  className="mb-[20px] w-16 h-16 border-2 border-white/[0.17] bg-[#010101] rounded-full 
                  flex justify-center items-center text-xl text-white lg:mb-10 relative z-10
                  transition-all duration-[400ms] group-hover:bg-white group-hover:text-[#010101] group-hover:scale-110"
                >
                  {step.number}
                </div>
                <div className="max-w-full text-lg font-medium leading-6 lg:max-w-[280px] w-full">
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}