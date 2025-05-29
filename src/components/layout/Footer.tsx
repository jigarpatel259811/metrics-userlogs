export function Footer() {
  return (
    <footer className="w-full relative border-t-[#C2C2C2] border-t border-solid">
      <div className="container mx-auto px-8 py-16 max-w-[1440px]">
        <div className="flex flex-col gap-8">
          {/* Top Section */}
          <div className="flex justify-between items-start max-md:flex-col max-md:gap-8">
            <div className="max-w-[384px]">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7db31f35eece294edbfc56567475b3b7a864fee2?placeholderIfAbsent=true" alt="Logo" className="w-[220px] h-8 mb-6" />
              <p className="text-[#434447] text-sm leading-6 tracking-[-0.09px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quis lectus molestie malesuada.
              </p>
            </div>
            <div className="flex gap-10 max-md:justify-center">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/95b04e92daf2c0e8eaade66c665e4c623a8aee82?placeholderIfAbsent=true" alt="Badge 1" className="w-[120px] h-[97px]" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6766a3c1451486f3f02b7972375da08cddb5ca4d?placeholderIfAbsent=true" alt="Badge 2" className="w-[120px] h-[97px]" />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#EAEAEB] my-8" />

          {/* Links Section */}
          <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#050505] text-sm font-medium leading-6 tracking-[1px] uppercase">
                SERVICES FOR AMAZON
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "SEO Consultancy For Amazon",
                  "Sponsored Ads(PPC) For Amazon",
                  "Account Management For Amazon",
                  "Account Audit For Amazon",
                  "Marketing Services For Amazon",
                  "FBA Reimbursements"
                ].map((item, index) => (
                  <a key={index} href="#" className="text-[#686A6E] text-sm leading-6 tracking-[-0.09px]">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[#050505] text-sm font-medium leading-6 tracking-[1px] uppercase">
                PRODUCT SETUP IN AMAZON
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "Keyword Research For Amazon",
                  "Product Listing In Amazon",
                  "Product Listing Translation"
                ].map((item, index) => (
                  <a key={index} href="#" className="text-[#686A6E] text-sm leading-6 tracking-[-0.09px]">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[#050505] text-sm font-medium leading-6 tracking-[1px] uppercase">
                GRAPHICS & BRANDING SERVICES
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "Storefront Design For Amazon",
                  "Product Infographics/ Lifestyle Images",
                  "Product Photography"
                ].map((item, index) => (
                  <a key={index} href="#" className="text-[#686A6E] text-sm leading-6 tracking-[-0.09px]">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[#050505] text-sm font-medium leading-6 tracking-[1px] uppercase">
                OTHERS
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "Shopify Store Development Services",
                  "SEO Services"
                ].map((item, index) => (
                  <a key={index} href="#" className="text-[#686A6E] text-sm leading-6 tracking-[-0.09px]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#EAEAEB] my-8" />

          {/* Bottom Section */}
          <div className="flex justify-between items-center max-md:flex-col max-md:gap-5">
            <div className="flex items-center gap-6 text-black text-sm leading-6 tracking-[-0.09px] max-md:flex-col max-md:gap-3">
              <a href="#">Terms of Use</a>
              <a href="#">Refund Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Blog</a>
              <a href="#">Amazon Creative Service Portfolio</a>
            </div>
            <div className="flex items-center gap-3">
              {["twitter", "instagram", "facebook"].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  className="flex items-center justify-center w-10 h-10 border-[1.5px] border-[#050505] rounded-md"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="w-6 h-6 text-[#999595]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-14 bg-[#D2D2D2] p-2.5 text-black text-sm leading-6 tracking-[-0.09px]">
        © Copyright 2014 - 2024. All Rights Reserved.
      </div>
    </footer>
  );
}
