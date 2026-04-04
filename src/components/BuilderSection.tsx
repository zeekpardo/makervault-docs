export default function BuilderSection() {
  return (
    <section className="py-12 lg:py-16 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <small className="font-medium text-xs uppercase tracking-wider text-primary mb-4 block">
          Why this exists
        </small>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-6">
          Built by a maker who needed this to exist.
        </h2>
        <div className="space-y-4 text-base lg:text-lg text-foreground/70 leading-relaxed">
          <p>
            I've owned an Aeon Mira 5 for years. At one point I was running a laser engraving business.
            Now I mostly engrave personalized gifts for friends and family. But hobby or business, the
            problem is the same — my file library kept growing and my system for finding things stopped
            working a long time ago.
          </p>
          <p>
            So I built the tool I wished existed. MakerVault has been running on my own machines,
            organizing my own library. Now I'm opening it up to 100 makers who want to stop wasting
            time looking for files they already own.
          </p>
        </div>
        <p className="mt-6 font-medium text-foreground">— Zeek</p>
      </div>
    </section>
  );
}
