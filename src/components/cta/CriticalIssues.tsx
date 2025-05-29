export function CriticalIssues() {
  return (
    <div className="w-full h-[560px] shrink-0 flex flex-col items-center justify-center gap-6 bg-[#F0F0F0] max-md:h-auto max-md:px-5 max-md:py-10">
      <div className="w-[696px] text-neutral-800 text-center text-[40px] font-medium leading-[56px] max-md:w-full max-md:text-[32px] max-md:leading-10 max-sm:text-[28px] max-sm:leading-9">
        12 Critical Issues Discovered
      </div>
      <div className="w-[593px] text-[#28292A] text-center text-xl font-normal leading-8 tracking-[-0.18px] max-md:w-full max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
        Get detailed issue breakdowns, smart recommendations, and a complete
        Amazon growth toolkit.
      </div>
      <button className="flex justify-center items-center gap-2 text-white text-center text-lg font-semibold leading-10 cursor-pointer bg-[#3B3D3F] px-[15px] py-2.5 rounded-lg max-sm:w-full max-sm:px-5 max-sm:py-3">
        <span>Upgrade to Seller QI PRO</span>
        <span className="text-white text-center text-base font-black">
          →
        </span>
      </button>
    </div>
  );
}
