export function Navigation() {
  return (
    <nav className="flex h-20 justify-center items-center gap-[640.922px] shrink-0 w-[1216px] mb-[120px] pl-[0.078px] pr-0 py-5 rounded-[72px] mx-auto max-md:w-full max-md:gap-5 max-md:flex-col max-md:h-auto max-md:mb-10 max-sm:px-0 max-sm:py-4">
      <div className="w-[220px] h-8 bg-[#C4C4C4]" />
      <div className="flex items-start gap-4 w-[355px] h-10 max-md:w-full max-md:justify-center max-md:flex-wrap max-sm:hidden">
        {["Tab1", "Tab1", "Blogs", "Pricing"].map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 text-[#28292A] text-base font-normal leading-8 tracking-[-0.18px] px-4 py-1"
          >
            <span>{item}</span>
            {index < 2 && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9987 14.2506L8.81641 11.0683L9.87766 10.0078L11.9987 12.1296L14.1197 10.0078L15.1809 11.0683L11.9987 14.2506Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
