interface InsightsListProps {
  title: string;
  insights: string[];
}

export function InsightsList({ title, insights }: InsightsListProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-4 flex-[1_0_0] border bg-[#FEFEFE] p-6 rounded-lg border-solid border-[#DAE3F8] max-md:w-full">
      <div className="flex items-center self-stretch">
        <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
          <div className="text-[#0B1C33] text-xl font-medium leading-7 opacity-70 max-sm:text-base">
            {title}
          </div>
        </div>
        <div className="flex w-12 h-12 justify-center items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986M22 3.99986L12 14.0099L9.00001 11.0099" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 self-stretch">
        {insights.map((insight, index) => (
          <div key={index} className="self-stretch text-[#28292A] text-base font-normal leading-8 tracking-[-0.18px]">
            {insight}
          </div>
        ))}
      </div>
    </div>
  );
}
