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
          <div className="mt-6 max-w-md mx-auto">
            <iframe
              src="https://link.groovi.pro/widget/form/xfMUejfCkBNxUMhinucW"
              style={{ width: "100%", height: "407px", border: "none", borderRadius: "3px" }}
              id="inline-xfMUejfCkBNxUMhinucW"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="MakerVault - subscribe"
              data-height="407"
              data-layout-iframe-id="inline-xfMUejfCkBNxUMhinucW"
              data-form-id="xfMUejfCkBNxUMhinucW"
              title="MakerVault - subscribe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
