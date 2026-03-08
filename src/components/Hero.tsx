import { ArrowRightIcon, DownloadIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 relative z-20 pt-24 pb-12 lg:pb-16">
        <div className="mb-4 flex justify-start">
          <div className="flex flex-wrap items-center justify-start rounded-full bg-primary/10 px-3 py-1 font-normal text-primary text-sm">
            <span className="flex items-center gap-2 rounded-full font-semibold">macOS</span>
            <span className="ml-1 block font-medium">
              7-day free trial, no credit card required
            </span>
          </div>
        </div>

        <h1 className="text-balance font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground">
          Find any design file in seconds
        </h1>

        <p className="mt-4 text-foreground/60 text-base sm:text-lg max-w-3xl leading-relaxed">
          Stop scrolling through folders. MakerVault scans your computer, indexes every
          laser, CNC, and 3D printing file, and lets you search, tag, and preview them
          instantly. Your files stay on your machine. No cloud. No subscription.
        </p>

        <div className="mt-6 flex items-center justify-start gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
          >
            <DownloadIcon className="mr-2 size-4" />
            Download Free Trial
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 font-medium text-foreground text-sm hover:bg-accent transition-colors"
          >
            See Features
            <ArrowRightIcon className="ml-2 size-4" />
          </a>
        </div>

        <p className="mt-3 text-foreground/40 text-xs">
          One-time purchase of $59. Includes 1 year of updates. Keep the app forever.
        </p>

        <div className="mx-auto mt-12 lg:mt-16 xl:mt-24 rounded-3xl bg-primary/5 p-4 border">
          <img
            src="/images/hero-image.png"
            alt="MakerVault — find any design file in seconds"
            className="block rounded-xl dark:hidden w-full"
            loading="eager"
          />
          <img
            src="/images/hero-image-dark.png"
            alt="MakerVault — find any design file in seconds"
            className="hidden rounded-xl dark:block w-full"
            loading="eager"
          />
        </div>

        <div className="mt-16 text-center">
          <h5 className="font-semibold text-foreground/50 text-xs uppercase tracking-wider">
            Built for makers who use
          </h5>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-foreground/50 text-sm font-medium">
            <span>LightBurn</span>
            <span className="text-foreground/20">|</span>
            <span>xTool Creative Space</span>
            <span className="text-foreground/20">|</span>
            <span>Glowforge</span>
            <span className="text-foreground/20">|</span>
            <span>VCarve Pro</span>
            <span className="text-foreground/20">|</span>
            <span>Silhouette Studio</span>
            <span className="text-foreground/20">|</span>
            <span>and more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
