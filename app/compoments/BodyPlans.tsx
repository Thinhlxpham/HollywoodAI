import { CheckIcon } from "@heroicons/react/24/outline"

export default function BodyPlans(){
  const premiumFeatures = [
    "Premium Support",
    "Access 100+ Summaries",
    "Higher Quality Audio",
    "License For Commercial Use",
    "2 Supported Devices",
  ]

  const vipFeatures = [
    "2 Months Free",
    "Access 100+ Summaries",
    "Highest Quality Audio",
    "License For Commercial Use",
    "3 Supported Devices",
  ]

  return (
    <div>
      <div
        className="flex flex-col items-start pt-[24px] pb-[24px]
        w-full h-full max-w-[1400px] justify-between py-0 px-[32px] my-0 mx-auto"
      >
        <h2 className="text-[26px] font-bold mb-[20px]">Subscription Plans:</h2>
        <div className="flex flex-wrap sm:flex-nowrap gap-[12px] w-full">
          <SubscriptionPlans
            price={19}
            calendar="Monthly"
            type="Premium"
            details={premiumFeatures}
            option="Choose Plans"
          />
          <SubscriptionPlans
            price={190}
            calendar="Yearly"
            type="VIP+"
            details={vipFeatures}
            option="Choose Plans"
          />
        </div>
      </div>
    </div>
  )
}

interface TypePlansProp {
  price: number
  calendar: string
  type: string
  details: string[]
  option: string
}

function SubscriptionPlans({ price, calendar, type, details, option }: TypePlansProp) {
  return (
    <div className="w-full sm:w-[50%] flex flex-col p-[28px] shadow-[0_7px_20px_rgba(0,0,0,0.04)] rounded-[24px] border border-solid border-[#f1f3f4]">
      <div className="mb-[8px] flex items-start text-[50px] font-bold leading-none gap-[4px]">
        <span className="text-[18px] font-normal">$</span>
        <h3>{price}</h3>
        <span className="text-[15px] font-medium">{calendar}</span>
      </div>
      <div className="text-[15px] font-medium leading-none opacity-50 mb-[8px]">
        {type}
      </div>
      <div className="my-[24px] mx-0">
        {details.map((detail, i) => (
          <div key={i} className="flex gap-[8px] mb-[12px] items-center">
           
            <div className="w-[20px] h-[20px] flex-shrink-0 rounded-full text-[#320580] bg-[rgba(50,5,128,0.1)] flex justify-center items-center">
              <CheckIcon className="w-[12px] h-[12px]" />
            </div>
            <span className="text-[14px]">{detail}</span>
          </div>
        ))}
      </div>
      <button className="mt-auto text-[14px] font-medium py-[8px] px-[16px] rounded-[999px] bg-[#320580] text-white flex justify-center items-center">
        {option}
      </button>
    </div>
  )
}