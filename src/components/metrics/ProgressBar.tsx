interface ProgressBarProps {
  value: number;
  max: number;
}

export function ProgressBar({ value, max }: ProgressBarProps) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="h-4 self-stretch">
      <div className="flex w-full flex-col items-start gap-2.5 h-4 bg-[#F9F9FF] rounded-[10px]">
        <div 
          className="h-4 bg-[#3B3D3F] rounded-[10px]" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
