import { MailIcon } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function Newsletter() {
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
          <div className="mt-6 max-w-md mx-auto text-left">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
