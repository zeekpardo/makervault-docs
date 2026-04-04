import { MailIcon } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function Newsletter() {
  return (
    <section id="waitlist" className="scroll-mt-16 py-12 lg:py-16 xl:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="p-6 bg-muted rounded-3xl lg:p-8 text-center">
          <p className="text-foreground/50 text-sm font-medium uppercase tracking-wider mb-2">
            100 early access spots. That's it.
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">
            Claim your spot before they're gone.
          </h2>
          <p className="mt-2 text-foreground/60 text-sm sm:text-base max-w-xl mx-auto">
            You'll get the app before anyone else, direct access to give feedback, and early pricing
            that won't come back.
          </p>
          <div className="mt-6 max-w-md mx-auto text-left">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
