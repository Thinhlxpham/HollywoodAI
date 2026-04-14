function MovieCardSkeleton() {
  return (
    <div className="w-[200px] animate-pulse">
     <div className="relative">

         <div className="h-auto aspect-[2/3] mb-[8px] rounded-[12px] overflow-hidden bg-[#DDDBDD]">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
     </div>
     

   
      <div className="h-[14px] w-[80%] rounded-[4px] bg-[#DDDBDD] mb-[6px] relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      
      <div className="h-[12px] w-[55%] rounded-[4px] bg-[#DDDBDD] mb-[8px] relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

     
      <div className="flex gap-[8px]">
        <div className="h-[12px] w-[40px] rounded-[4px] bg-[#DDDBDD] relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
        <div className="h-[12px] w-[30px] rounded-[4px] bg-[#DDDBDD] relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default MovieCardSkeleton