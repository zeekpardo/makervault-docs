import { MailIcon } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-12 lg:py-16 xl:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="p-6 bg-muted rounded-3xl lg:p-8 text-center">
          <MailIcon className="mx-auto mb-3 size-10 text-primary" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">
            Get notified when Windows launches
          </h2>
          <p className="mt-2 text-foreground/60 text-sm sm:text-base max-w-xl mx-auto">
            MakerVault is macOS-first. Sign up to be the first to know when the Windows
            version drops, plus get tips on organizing your design file library.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 rounded-md border bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90 transition-colors">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
