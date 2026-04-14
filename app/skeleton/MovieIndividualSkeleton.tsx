export default function MovieIndividualSkeleton() {
  return (
    <div className="pt-[40px] pb-[40px] flex lg:items-start w-full h-full max-w-[1400px] justify-between py-0 px-[32px] my-0 mx-auto flex-col-reverse lg:flex-row md:items-center">
      <div className="flex flex-col w-full">

        {/* Title */}
        <div className="h-[40px] w-[60%] mb-[8px] rounded-[6px] bg-[#e8e8e8] animate-pulse" />
        {/* Director */}
        <div className="h-[20px] w-[30%] mb-[16px] rounded-[6px] bg-[#e8e8e8] animate-pulse" />

        {/* Stats row */}
        <div className="border-y border-solid border-y-[#e1e7ea] py-[16px] px-0 mb-[24px]">
          <div className="flex flex-wrap max-w-[400px] gap-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center w-[50%] gap-[6px]">
                <div className="w-[16px] h-[16px] rounded-full bg-[#e8e8e8] animate-pulse" />
                <div className="h-[16px] w-[60px] rounded-[6px] bg-[#e8e8e8] animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Summarise button */}
        <div className="max-w-[280px] w-full h-[48px] bg-[#e8e8e8] rounded-[4px] mb-[24px] animate-pulse" />

        {/* Add to Favourites */}
        <div className="flex items-center gap-[8px] mb-[40px]">
          <div className="w-[20px] h-[20px] rounded-full bg-[#e8e8e8] animate-pulse" />
          <div className="h-[20px] w-[140px] rounded-[6px] bg-[#e8e8e8] animate-pulse" />
        </div>

        {/* "What's it about?" heading */}
        <div className="h-[24px] w-[160px] mb-[16px] rounded-[6px] bg-[#e8e8e8] animate-pulse" />

        {/* Tags */}
        <div className="flex flex-wrap gap-[16px] mb-[16px]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-[48px] w-[100px] rounded-[4px] bg-[#e8e8e8] animate-pulse" />
          ))}
        </div>

        {/* Description lines */}
        <div className="flex flex-col gap-[8px]">
          <div className="h-[16px] w-full rounded-[6px] bg-[#e8e8e8] animate-pulse" />
          <div className="h-[16px] w-full rounded-[6px] bg-[#e8e8e8] animate-pulse" />
          <div className="h-[16px] w-[70%] rounded-[6px] bg-[#e8e8e8] animate-pulse" />
        </div>
      </div>

      {/* Movie poster */}
      <div className="w-full md:w-[200px] md:min-w-[200px] aspect-[2/3] md:ml-[32px] rounded-[12px] mb-[24px] md:mb-0 max-w-[300px] mx-auto md:mx-0 bg-[#e8e8e8] animate-pulse" />
    </div>
  )
}