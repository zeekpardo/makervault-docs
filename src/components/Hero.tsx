import { useState, useEffect } from "react";
import { ArrowRightIcon, PlayIcon, XIcon } from "lucide-react";

const VIDEO_ID = "RwB6kp83Gyw";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    if (videoOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [videoOpen]);

  return (
    <div className="relative max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 relative z-20 pt-24 pb-12 lg:pb-16">
        <div className="mb-4 flex justify-start">
          <div className="flex flex-wrap items-center justify-start rounded-full bg-primary/10 px-3 py-1 font-normal text-primary text-sm">
            <span className="relative flex size-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
            </span>
            <span className="font-semibold">Early Access</span>
            <span className="ml-1 block font-medium">— Limited to 100 makers</span>
          </div>
        </div>

        <h1 className="text-balance font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground">
          Your maker files are a mess. We both know it.
        </h1>

        <p className="mt-4 text-foreground/60 text-base sm:text-lg max-w-3xl leading-relaxed">
          Most makers don't need more files. They need a better way to find the ones they already have.
          MakerVault gives you a searchable, visual library with previews, tags, cut settings, and font data —
          without opening a single app.
        </p>
        <p className="mt-3 text-foreground/50 text-sm font-medium tracking-wide">
          Local-first. No cloud. No subscription. One-time purchase.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-start gap-3">
          <a
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
          >
            Claim Your Early Access Spot
            <ArrowRightIcon className="ml-2 size-4" />
          </a>
          <button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center justify-center rounded-md px-6 py-3 font-medium text-foreground text-sm hover:bg-accent transition-colors"
          >
            <PlayIcon className="mr-2 size-4" />
            Watch how it works
          </button>
        </div>

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

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <XIcon className="size-6" />
            </button>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="MakerVault — how it works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
