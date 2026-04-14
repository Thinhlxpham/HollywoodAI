export default function SearchMovieSkeleton(){
  return (
    <div className="flex items-center p-[24px] gap-[24px] h-[120px] border border-solid border-b-[#e1e7ea] duration-150 text-black">
      <div className="w-[60px] h-[88px] rounded-[4px] bg-[#e8e8e8] animate-pulse"></div>
      <div className="flex flex-col">
        <div className="w-[120px] h-[16px] bg-[#e8e8e8] animate-pulse mb-[4px]"></div>
        <div className="w-[80px] h-[14px] bg-[#e8e8e8] animate-pulse"></div>
      </div>
    </div>
  )
}