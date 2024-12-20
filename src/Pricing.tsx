import { useState } from "react";
import { ArrowRight, Search, ChevronDown } from "lucide-react";

const Pricing = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>("what");
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    { name: "Users", starter: "1", premium: "15" },
    { name: "Branches", starter: "1", premium: "10" },
    { name: "Courses", starter: "3", premium: "15/branch" },
    { name: "Max. Students Allowed", starter: "25", premium: "500" },
    { name: "Communication", starter: "25", premium: "Yes" },
    { name: "Bulk Updates", starter: "25", premium: "Yes" },
    { name: "User Roles", starter: "25", premium: "Yes" },
  ];

  const faqs = [
    {
      id: "what",
      question: "What is RMax?",
      answer:
        "RMax is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily",
    },
    {
      id: "how",
      question: "How does it work?",
      answer:
        "Our platform provides intuitive tools and features to streamline your business operations.",
    },
    {
      id: "cost",
      question: "How much does it cost?",
      answer:
        "We offer flexible plans starting at $17/month for our Starter plan and $88/month for our Premium plan.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Flexible Plans,
          <br />
          Transparent Pricing
        </h1>
        <p className="text-gray-600 mb-2">Find the Perfect Fit for You</p>
        <p className="text-red-500">
          30-day free trial with money-back guarantee.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-12">
          Compare our plans
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* Features Column */}
          <div className="pt-20">
            <h3 className="font-semibold mb-8">Features</h3>
            <div className="space-y-6">
              <h4 className="font-medium">Basic Management</h4>
              {features.map((feature) => (
                <div key={feature.name} className="py-2">
                  {feature.name}
                </div>
              ))}
            </div>
          </div>

          {/* Starter Plan */}
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold mb-4">Starter</h3>
            <div className="mb-8">
              <p className="text-2xl font-bold">
                $17
                <span className="text-sm font-normal text-gray-600">
                  /month, billed monthly
                </span>
              </p>
            </div>
            {features.map((feature) => (
              <div key={feature.name} className="py-2">
                {feature.starter}
              </div>
            ))}
            <button className="mt-8 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center justify-center gap-2">
              Get Started <ArrowRight size={16} />
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              No credit card required
            </p>
          </div>

          {/* Premium Plan */}
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold mb-4">Premium</h3>
            <div className="mb-8">
              <p className="text-2xl font-bold">
                $88
                <span className="text-sm font-normal text-gray-600">
                  /month, billed monthly
                </span>
              </p>
            </div>
            {features.map((feature) => (
              <div key={feature.name} className="py-2">
                {feature.premium}
              </div>
            ))}
            <button className="mt-8 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center justify-center gap-2">
              Get Started <ArrowRight size={16} />
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              No credit card required
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Find answers to common questions about our services and features.
          <br />
          For more details, contact our support team.
        </p>

        {/* Search Bar */}
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Ask Q! e.g Tell me about key Features."
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            <Search size={20} />
          </button>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() =>
                  setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                }
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    expandedFaq === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedFaq === faq.id && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-4">
            Haven't got your answer?{" "}
            <a href="#" className="text-blue-600">
              Contact our support now
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Pricing;
