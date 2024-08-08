import PriceCard from "@/components/customComponents/PriceCard";

const plan = [
  {
    id: 1,
    title: "Monthly",
    desc: "Perfect for individuals or small teams.",
    specs: ["Access to all features", "Unlimited storage", " 24/7 support"],
    price: 9,
    priceInfo: "per month",
  },
  {
    id: 2,
    title: "Yearly",
    desc: "Best value for individuals or small teams.",
    specs: [
      "Access to all features",
      "Unlimited storage",
      " 24/7 support",
      "2 months free",
    ],
    price: 99,
    priceInfo: "per year",
  },
  {
    id: 3,
    title: "Lifetime access",
    desc: "Best value for individuals or small teams.",
    specs: [
      "Access to all features",
      "Unlimited storage",
      " 24/7 support",
      "Lifetime access",
    ],
    price: 299,
    priceInfo: "one-time",
  },
];

function PricingPage() {
  return (
    <section className="w-full  py-12 md:py-16 lg:py-20 ">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Plan
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Get access to our premium features with any of these plans.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plan.map((item) => (
            <PriceCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              specs={item.specs}
              price={item.price}
              priceInfo={item.priceInfo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
