import { Layout } from "@/components/layout/Layout";
import { ProductOverview } from "@/components/product/ProductOverview";
import { MetricCard } from "@/components/metrics/MetricCard";
import { InsightsList } from "@/components/insights/InsightsList";
import { CriticalIssues } from "@/components/cta/CriticalIssues";

const Index = () => {
  const metrics = [
    {
      title: "Product Images",
      score: 45,
      maxScore: 100,
      currentValue: "8 images",
      recommendation: "7+ images"
    },
    {
      title: "Product Video",
      score: 0,
      maxScore: 100,
      currentValue: "Video Present",
      recommendation: "Add product demo video"
    },
    {
      title: "Product Title",
      score: 90,
      maxScore: 100,
      currentValue: "85 characters",
      recommendation: "70+ characters"
    }
  ];

  const aiSuggestions = [
    "Add more high-quality lifestyle images showing product in use",
    "Expand bullet points to include more detailed feature descriptions",
    "Enhance A+ content with comparison charts and detailed specifications",
    "Enhance A+ content with comparison charts and detailed specifications",
    "Enhance A+ content with comparison charts and detailed specifications",
    "Enhance A+ content with comparison charts and detailed specifications"
  ];

  const customerInsights = [
    "Add more high-quality lifestyle images showing product in use",
    "Expand bullet points to include more detailed feature descriptions",
    "Enhance A+ content with comparison charts and detailed specifications",
    "Enhance A+ content with comparison charts and detailed specifications",
    "Enhance A+ content with comparison charts and detailed specifications",
    "Enhance A+ content with comparison charts and detailed specifications"
  ];

  return (
    <Layout>
      <div className="max-w-none w-[1440px] relative bg-white mx-auto my-0 max-md:max-w-[991px] max-md:w-full max-md:h-auto max-sm:max-w-screen-sm">
        <div className="flex w-full flex-col items-center shrink-0 relative pt-10 pb-20 px-28 max-md:p-5 max-sm:p-4">
          <div className="flex w-[1216px] flex-col items-start gap-8 bg-white rounded-lg max-md:w-full max-md:h-auto max-md:p-5 max-sm:p-4">
            <ProductOverview />
            
            {/* Key Metrics Grid */}
            <div className="flex items-start gap-4 self-stretch max-md:flex-col">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            {/* Insights Section */}
            <div className="flex items-start gap-4 self-stretch max-md:flex-col">
              <InsightsList 
                title="AI Powered Suggestions"
                insights={aiSuggestions}
              />
              <InsightsList 
                title="Customer Insights"
                insights={customerInsights}
              />
            </div>
          </div>
        </div>

        <CriticalIssues />
      </div>
    </Layout>
  );
};

export default Index;
