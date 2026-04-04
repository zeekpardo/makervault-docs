import { useState } from "react";
import { MailIcon } from "lucide-react";

const OS_OPTIONS = ["macOS", "Windows"] as const;

export default function Newsletter() {
  const [selectedOs, setSelectedOs] = useState<string[]>([]);

  function toggleOs(os: string) {
    setSelectedOs((prev) =>
      prev.includes(os) ? prev.filter((o) => o !== os) : [...prev, os]
    );
  }

  return (
    <section id="waitlist" className="scroll-mt-16 py-12 lg:py-16 xl:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="p-6 bg-muted rounded-3xl lg:p-8 text-center">
          <MailIcon className="mx-auto mb-3 size-10 text-primary" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">
            Be first to know when MakerVault launches
          </h2>
          <p className="mt-2 text-foreground/60 text-sm sm:text-base max-w-xl mx-auto">
            Sign up for early access. We'll notify you the moment MakerVault is ready,
            plus share tips on organizing your design file library.
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <form name="waitlist" method="POST" action="/thankyou">
              <div className="flex flex-col gap-4 text-left">
                <div>
                  <label htmlFor="waitlist-email" className="block text-sm font-medium mb-1">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-md border bg-background px-4 py-2.5 text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <p className="block text-sm font-medium mb-2">
                    Which operating system do you use?{" "}
                    <span className="text-foreground/40 font-normal">(select all that apply)</span>
                  </p>
                  <div className="flex gap-3">
                    {OS_OPTIONS.map((os) => {
                      const checked = selectedOs.includes(os);
                      return (
                        <button
                          key={os}
                          type="button"
                          onClick={() => toggleOs(os)}
                          className={`flex-1 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors ${
                            checked
                              ? "border-primary bg-primary/10 text-primary"
                              : "border bg-background text-foreground/70 hover:border-primary/50"
                          }`}
                        >
                          {os}
                        </button>
                      );
                    })}
                  </div>
                  {/* Hidden input — GHL maps this to contact.operating_system */}
                  <input
                    type="hidden"
                    name="operating_system"
                    value={selectedOs.join(", ")}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
                >
                  Join the Waitlist
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
