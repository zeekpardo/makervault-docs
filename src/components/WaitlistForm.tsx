import { useState } from "react";

const OS_OPTIONS = ["macOS", "Windows"] as const;

export default function WaitlistForm() {
  const [selectedOs, setSelectedOs] = useState<string[]>([]);

  function toggleOs(os: string) {
    setSelectedOs((prev) =>
      prev.includes(os) ? prev.filter((o) => o !== os) : [...prev, os]
    );
  }

  return (
    <form name="waitlist" method="GET" action="/thankyou">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="wf-first-name" className="block text-sm font-medium mb-1">
              First name
            </label>
            <input
              id="wf-first-name"
              type="text"
              name="first_name"
              required
              placeholder="Jane"
              className="w-full rounded-md border bg-background px-4 py-2.5 text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="wf-last-name" className="block text-sm font-medium mb-1">
              Last name
            </label>
            <input
              id="wf-last-name"
              type="text"
              name="last_name"
              required
              placeholder="Smith"
              className="w-full rounded-md border bg-background px-4 py-2.5 text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="wf-email" className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            id="wf-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-md border bg-background px-4 py-2.5 text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <p className="block text-sm font-medium mb-2">
            Operating system{" "}
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
          <input
            type="hidden"
            name="operating_system"
            value={selectedOs.join(", ")}
          />
        </div>

        <button
          type="submit"
          className="mt-1 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
        >
          Get Early Access
        </button>

        <p className="text-center text-xs text-foreground/40">
          No spam. No credit card. Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}
