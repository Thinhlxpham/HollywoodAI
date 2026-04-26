export default function PlayerSkeleton() {
  return (
    <div className="w-full ml-0 flex flex-col md:ml-[230px] md:w-[calc(100%-230px)]">
      {/* Navbar */}
      <div className="w-full h-[80px] border-b-[1px] border-solid border-[#f1f3f4]">
        <div className="gap-[20px] relative w-full h-full max-w-[1400px] flex items-center justify-between py-0 px-[32px] my-0 mx-auto">
          <div className="bg-[#f1f1f3] h-[44px] rounded-[9999px] max-w-[435px] w-full animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="pt-[40px] pb-[180px] w-full">
        <div className="flex flex-col w-full h-full max-w-[1400px] items-start py-0 px-[32px] my-0 mx-auto">
          {/* Title */}
          <div className="w-[300px] h-[32px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[16px]" />
          {/* Divider */}
          <div className="w-full h-[1px] bg-[#e1e7ea] mb-[32px]" />
          {/* Text lines */}
          <div className="w-full h-[16px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[12px]" />
          <div className="w-[95%] h-[16px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[12px]" />
          <div className="w-[90%] h-[16px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[12px]" />
          <div className="w-[92%] h-[16px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[12px]" />
          <div className="w-[85%] h-[16px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[12px]" />
          <div className="w-[88%] h-[16px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[12px]" />
          <div className="w-[60%] h-[16px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[12px]" />
        </div>
      </div>

      {/* Player bar */}
      <div className="h-[180px] py-[16px] px-[24px] w-full md:h-[80px] flex flex-col md:flex-row items-center justify-between bg-[#042330]
        border-t-[1px] md:py-0 md:px-[40px] fixed bottom-0 left-0 z-[9998]">
        <div className="flex items-center gap-[16px] w-full md:w-auto justify-center">
          <div className="w-[32px] h-[32px] bg-white/20 rounded-full animate-pulse" />
          <div className="w-[40px] h-[40px] bg-white/20 rounded-full animate-pulse" />
          <div className="w-[32px] h-[32px] bg-white/20 rounded-full animate-pulse" />
        </div>
        <div className="w-full md:w-[300px] h-[6px] bg-white/20 rounded-full animate-pulse" />
        <div className="w-[100px] h-[6px] bg-white/20 rounded-full animate-pulse" />
      </div>
    </div>
  )
}