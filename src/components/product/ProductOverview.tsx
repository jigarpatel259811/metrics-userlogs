export function ProductOverview() {
  return (
    <div className="flex justify-center items-center gap-14 self-stretch top-[section] max-md:flex-col max-md:gap-8">
      <div className="flex items-center gap-8 flex-[1_0_0] max-md:flex-col max-md:w-full">
        <div className="w-[592px] h-[566px] bg-[#F0F0F0] rounded-lg max-md:w-full max-md:h-[300px]" />
        <div className="flex flex-col justify-between items-start flex-[1_0_0] self-stretch">
          <div className="w-[592px] text-neutral-800 text-[40px] font-medium leading-[56px] mb-10 max-md:w-full max-md:text-[32px] max-md:leading-10 max-sm:text-2xl max-sm:leading-8">
            Bluetooth Wireless Earbuds with Noise Cancellation
          </div>
          <div className="flex flex-col items-start gap-3 self-stretch">
            {[
              { label: "ASIN", value: "B07NKVNWRY" },
              { label: "Category", value: "Electronics" },
              { label: "List Price", value: "$100" },
              { label: "Reviews Count", value: "1213" },
              { label: "Listing Age", value: "11 months" }
            ].map((item, index) => (
              <div key={index} className="self-stretch text-[#28292A] text-xl font-normal leading-8 tracking-[-0.18px] max-sm:text-base max-sm:leading-6">
                {item.label} : {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center self-stretch flex-col gap-6 w-[527px] h-[76px] bg-[#F0F0F0] pl-8 pr-[33px] pt-8 pb-16 rounded-lg max-md:w-full max-md:p-5">
        <div className="flex justify-between items-start self-stretch">
          <span className="text-neutral-800 text-xl font-medium leading-10">
            Overall Optimization Score
          </span>
          <div className="h-10 gap-4 text-white text-center text-[13px] font-medium leading-8 bg-[#3B3D3F] px-[15px] py-[11px] rounded-[999px]">
            50/100
          </div>
        </div>
        <ProgressBar value={50} max={100} />
      </div>
    </div>
  );
}
