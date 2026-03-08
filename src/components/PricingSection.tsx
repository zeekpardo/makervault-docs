import { ArrowRightIcon, CheckIcon, StarIcon } from "lucide-react";
import { cn } from "../lib/utils";

const CHECKOUT_URL = "https://makervaultapp.lemonsqueezy.com/checkout/buy/88b04ff3-8183-4828-bdaa-8457114d4570";
const DOWNLOAD_URL = "/download";

const plans = [
  {
    id: "free",
    title: "Free Trial",
    description: "7-day free trial",
    price: "$0",
    interval: null,
    recommended: false,
    features: [
      "Full app access for 7 days",
      "No credit card required",
    ],
    cta: "Download Free Trial",
    href: DOWNLOAD_URL,
    variant: "secondary" as const,
  },
  {
    id: "makervault",
    title: "MakerVault",
    description: "One-time purchase. Yours forever.",
    price: "$59",
    interval: null,
    recommended: true,
    features: [
      "Unlimited files and folders",
      "1 year of updates included",
      "Use on up to 2 computers",
      "Works fully offline",
      "Keep the app forever",
    ],
    cta: "Buy Now",
    href: CHECKOUT_URL,
    variant: "primary" as const,
  },
  {
    id: "updates_renewal",
    title: "Updates Renewal",
    description: "Keep getting the latest features and fixes.",
    price: "$20",
    interval: "/ year",
    recommended: false,
    features: [
      "Another year of updates",
      "New features and file type support",
      "Completely optional",
    ],
    cta: "Renew Updates",
    href: CHECKOUT_URL,
    variant: "secondary" as const,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16 py-12 lg:py-16 xl:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
            Simple, fair pricing
          </h2>
          <p className="mt-2 text-base lg:text-lg text-foreground/60">
            One-time purchase. No subscription. Keep the app forever.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "rounded-3xl bg-card border p-6",
                plan.recommended && "border-primary"
              )}
            >
              <div className="flex h-full flex-col justify-between gap-4">
                <div>
                  {plan.recommended && (
                    <div className="-mt-9 flex justify-center">
                      <div className="mb-2 flex h-6 w-auto items-center gap-1.5 rounded-full bg-primary px-2 py-1 font-semibold text-primary-foreground text-xs">
                        <StarIcon className="size-3" />
                        Most popular
                      </div>
                    </div>
                  )}

                  <h3
                    className={cn(
                      "my-0 font-semibold text-2xl",
                      plan.recommended && "font-bold text-primary"
                    )}
                  >
                    {plan.title}
                  </h3>

                  <div className="mt-2 text-foreground/60 text-sm">
                    {plan.description}
                  </div>

                  <ul className="mt-4 grid list-none gap-2 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-start">
                        <CheckIcon className="mr-2 size-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong className="block font-medium text-2xl lg:text-3xl">
                    {plan.price}
                    {plan.interval && (
                      <span className="font-normal text-xs opacity-60">
                        {" "}{plan.interval}
                      </span>
                    )}
                  </strong>

                  <a
                    href={plan.href}
                    className={cn(
                      "mt-4 w-full inline-flex items-center justify-center rounded-md px-6 py-3 font-medium text-sm transition-colors",
                      plan.variant === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                    {...(plan.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {plan.cta}
                    <ArrowRightIcon className="ml-2 size-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
