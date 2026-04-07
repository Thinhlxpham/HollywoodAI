import { Bars2Icon, Bars3BottomLeftIcon, Bars3Icon, BarsArrowUpIcon, HandRaisedIcon, PencilIcon, PencilSquareIcon, PhoneIcon, PhoneXMarkIcon, PlayCircleIcon, ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/24/solid"

export default function Features(){
  return (
    <section className="relative py-[60px] px-0">
      <div className="flex flex-col items-center">
          <h1 className="text-[44px] leading-[50px] sm:text-[53px] font-bold tracking-[-1.59px] mb-[20px] text-center">The future of AI.</h1>
          <div
          className="text-[14px] sm:text-[18px] leading-[1.27em] text-center text-[#3c4b62] mb-[40px] 
          max-w-[500px] w-full font-normal
          "
          >
            HollywoodAI is designed to help you enjoy high-quality summaries instantly, without breaking a sweat.
          </div>
          <div className="flex flex-wrap mx-auto my-0">
            <FeatureList Icon={<PencilIcon className="w-[16px]"/>} title="AI Generated Summaries" para="Save time with summaries of the world's best movies."/>
            <FeatureList Icon={<PlayCircleIcon className="w-[16px]"/>} title="Read or Listen" para="Switch between reading and listening modes seamlessly."/>
            <FeatureList Icon={<Bars3Icon className="w-[16px]"/>} title="Find Your Next Flick" para="Explore our movie lists and personalized recommendations."/>
            <FeatureList Icon={<PhoneIcon className="w-[16px]"/>} title="Multi Platform Access" para="Enjoy your favourite movies on any device."/>
            <FeatureList Icon={<ShieldCheckIcon className="w-[16px]"/>} title="Payment Gateways" para="We securely process all card payments."/>
            <FeatureList Icon={<HandRaisedIcon className="w-[16px]"/>} title="Eco-Friendly Option" para="HollywoodAI donates 10% of profits to charities."/>
          </div>
      </div>
    </section>
  )
}
interface FeaturesProp{
  Icon: React.ReactNode,
  title: string,
  para: string
}

function FeatureList({Icon, title, para}: FeaturesProp){
  return (
    <div className="w-[calc(100%)] sm:w-[calc(100%/2)] md:w-[calc(100%/3)] p-[18px] flex gap-[20px] group">
      <div 
      className="flex-[0_0_44px] h-[44px] 
      text-[#1f2328] bg-[#f2f2f2] 
      flex items-center justify-center rounded-[8px] transition duration-300
      group-hover:scale-[1.05] group-hover:bg-[#1e2227] group-hover:text-white
      ">
        {Icon}
      </div>
      <div>
        <h4 
        className="text-[#2c2e48] text-[17px] font-bold mb-[12px] tracking-[-.5px]">{title}</h4>
        <p 
        className="text-[14px] leading-[24px] text-[rgba(44,46,72,0.6)]">{para}</p>
      </div>
    </div>
  )
}