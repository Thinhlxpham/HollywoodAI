"use client"

import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function FooterPlans(){
  return (
    <div>
      <div
      className="flex w-full h-full max-w-[1400px] items-center justify-between py-0 px-[32px]
      my-0 mx-auto gap-[8px] pb-[40px] flex-col
      "
      >
        <PlansDetails title="What is Hollywood AI?" 
        description="HollywoodAI is designed to help you get high-quality summaries of your favourite movies instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily digest any movie in just minutes instead of hours."
        />
        <PlansDetails title="How much does Hollywood AI cost?" 
        description="Get summaries of your favourite movies on your smartphone, tablet or laptop, all for one fixed monthly or yearly fee. Plans range from $19 per month to $190 per year. No extra costs, no contracts."
        />
        <PlansDetails title="What can I watch on Hollywood AI" 
        description="Hollywood AI has an extensive library of feature films. Watch as much as you want, at any time that you want."
        />
      </div>
    </div>
  )
}

interface PlansDetailsProp{
  title: string,
  description: string
}

function PlansDetails({title, description}: PlansDetailsProp){
  const [isOpen, setIsOpen] = useState(false)

  
  return (
    <div
        className="flex flex-col pt-6 pr-6 pb-4 pl-6 rounded-[24px] border border-solid border-[#f1f3f4] w-full"
        >
          <div
          className="flex justify-between items-center cursor-pointer py-[16px] px-0 gap-[8px]"
          onClick={() => setIsOpen(!isOpen)}
          >
            <h4 className="font-medium text-[20px] mb-0">{title}</h4>
            <PlusIcon className="w-[20px] h-[20px]" />
          </div>
          {isOpen && <div
          className={`overflow-hidden ${isOpen ? "h-[80px]" : "h-0"} transition duration-[350ms] ease-in`}
          >
            <p
            className="font-light text-[16px] overflow-hidden text-[#6b7280]"
            >{description}</p>
          </div>}
        </div>
  )
}