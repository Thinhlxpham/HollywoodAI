function FavoritesSkeleton() {
  return (
    <div className="flex flex-col pt-[40px] pb-[40px] items-start max-w-[1400px] w-full h-full justify-between py-0 px-[32px] my-0 mx-auto">

      <div className="w-[160px] h-[28px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[8px]" />

      <div className="w-[80px] h-[20px] bg-[#f1f1f3] rounded-[6px] animate-pulse mb-[32px] pb-[16px]" />

      <div className="w-full flex flex-wrap gap-[32px]">
        {new Array(6).fill(0).map((_, index) => (
          <div key={index} className="w-[160px] flex flex-col gap-[8px]">
            <div className="w-[160px] aspect-[2/3] bg-[#f1f1f3] rounded-[8px] animate-pulse" />
            <div className="w-[120px] h-[16px] bg-[#f1f1f3] rounded-[4px] animate-pulse" />
            <div className="w-[80px] h-[14px] bg-[#f1f1f3] rounded-[4px] animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesSkeleton