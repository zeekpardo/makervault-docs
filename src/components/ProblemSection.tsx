export default function ProblemSection() {
  return (
    <section className="py-12 lg:py-16 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-8 lg:mb-12">
          <small className="font-medium text-xs uppercase tracking-wider text-primary mb-4 block">
            Sound familiar?
          </small>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
            You've tried everything. Nothing sticks.
          </h2>
          <p className="mt-4 text-base lg:text-lg text-foreground/60 leading-relaxed">
            I'd spend 10 minutes digging through folders to find something I knew I had. Renamed files
            with timestamps. Duplicates everywhere. Folders within folders. I tried naming conventions.
            I tried "I'll organize everything this weekend." I tried external drives with labels.
          </p>
          <p className="mt-3 text-base lg:text-lg text-foreground/60 leading-relaxed">
            Every system fell apart the moment I got busy or bought another bundle.
          </p>
          <p className="mt-3 text-base lg:text-lg text-foreground/60 leading-relaxed">
            And I know I'm not the only one. We've talked to hundreds of makers in laser cutting, CNC,
            and 3D printing communities. The same story comes up every time — thousands of design files,
            no way to find them, and hours wasted scrolling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-10 lg:mb-14">
          {[
            "Everything lives in my downloads folder and when I need something I hope and pray the designer named it something helpful.",
            "I sat down a couple nights and spent a few hours organizing, but when I got busy, they all went into folders titled 'to be made' or 'new'.",
            "I feel like I have a ton of duplicate files but I'm not sure if they are duplicates.",
          ].map((quote) => (
            <blockquote
              key={quote}
              className="rounded-2xl bg-card border p-5 lg:p-6 text-sm italic text-foreground/60 border-l-4 border-l-primary/40"
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          ))}
        </div>

        <div className="max-w-3xl">
          <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
            MakerVault doesn't ask you to stay organized. It does the organizing for you. Point it at
            your folders, and your entire library becomes searchable, previewable, and tagged —
            automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
