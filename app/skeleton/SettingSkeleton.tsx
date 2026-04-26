

export default function SettingsSkeleton() {
  return (
    <div className="flex flex-col pt-[40px] pb-[40px] items-start max-w-[1400px] w-full h-full justify-between py-0 px-[32px] my-0 mx-auto">


      <div className="w-[140px] h-[36px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[16px]" />


      <div className="flex flex-col items-start gap-[8px] pb-[24px]">
        <div className="w-[200px] h-[24px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[4px]" />
        <div className="w-[80px] h-[18px] bg-[#f1f1f3] rounded-[6px] animate-pulse" />
        <div className="w-[120px] h-[44px] bg-[#f1f1f3] rounded-[8px] animate-pulse mt-[4px]" />
      </div>


      <div className="flex flex-col items-start gap-[8px] pb-[24px]">
        <div className="w-[60px] h-[24px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[4px]" />
        <div className="w-[220px] h-[18px] bg-[#f1f1f3] rounded-[6px] animate-pulse" />
      </div>

    </div>
  )
}