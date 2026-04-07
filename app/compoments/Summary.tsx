import Image from "next/image"
import summary from "../public/assets/summary.png"

export default function Summary(){
  return (
    <section className="py-[60px] px-0 mx-auto my-0 sm:px-[20px]">
      <div 
      className="py-[60px] px-[40px]  md:rounded-[32px] rounded-[50px] border-[1px] border-[[rgb(229,231,235)]] md:p-[80px] flex justify-between
      xl:mx-[20px] flex-col md:flex-row gap-[48px] max-w-[1280px] mx-auto my-0
      ">
    <div className="w-full md:w-[47%]">
        <div className="bg-[#dde6ff] p-[5px_13px_3px] rounded-[20px] text-[12px] leading-[11px] font-bold
        flex items-center gap-[6px] mb-[110px] w-fit lg:mb-[60px] md:mb-[20px]
        ">
          <span className="text-[#1e2227]">The future of entertainment</span>
          <span className="text-[6px] opacity-60">⏺</span>
          <span className="opacity-60">AI</span>
        </div>
      <h2 className="text-[39px] font-bold text-[rgb(30, 34, 39)] tracking-[-1.17px]
       leading-[40.95px] mb-[25px]"
      >Say goodbye to 2 hour movies.</h2>
      <p
      className="text-[17px] leading-[1.47em] text-[#7e7f8e] lg:text-[15px]"
      >HollywoodAI is designed to help you get high-quality summaries of your favourite movies instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily digest any movie in just minutes instead of hours.</p>
    </div>
    <div
     className="lg:w-[47%] p-[16px] sm:p-[30px] bg-[#dde6ff] rounded-[12px] flex flex-col items-center w-full">
      <Image src={summary} alt="summary" className="w-full h-auto rounded-[12px]"/>
      <span className="hidden sm:block text-[#4a4a4a] text-[17px] font-bold tracking-[-.17px] leading-[18.7px] mt-[36px] mb-[8px] text-center">Search. Summarise. Repeat.</span>
      <span className="hidden sm:block text-[#4a4a4a] text-[12px]">Powered by AI</span>
    </div>
    </div>

    </section>
  )
}