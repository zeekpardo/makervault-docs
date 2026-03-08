import { FolderOpenIcon, SearchXIcon, CopyIcon, ClockIcon } from "lucide-react";

const painPoints = [
  {
    icon: FolderOpenIcon,
    quote: "Everything lives in my downloads folder and when I need something I hope and pray the designer named it something helpful.",
    problem: "Files everywhere",
    description: "Downloads folder, desktop, Dropbox, Google Drive, thumb drives, external hard drives — your design files are scattered across every device and service you own.",
  },
  {
    icon: SearchXIcon,
    quote: "I spend a ton of time just scrolling. I have thousands of files and I can never find what I'm looking for.",
    problem: "No way to search",
    description: "Folder names only get you so far. When you have thousands of SVGs, DXFs, and LightBurn files, you need real search — across filenames, tags, notes, and even file contents.",
  },
  {
    icon: CopyIcon,
    quote: "I feel like I have a ton of duplicate files but I'm not sure if they are duplicates.",
    problem: "Duplicates piling up",
    description: "You download the same bundle twice, extract it to different folders, and now you have duplicates you can't tell apart. Without content hashing, there's no way to know.",
  },
  {
    icon: ClockIcon,
    quote: "I sat down a couple nights and spent a few hours organizing, but when I got busy, they all went into folders titled 'to be made' or 'new'.",
    problem: "Organization never sticks",
    description: "Folder systems break down the moment you get busy. You need something that organizes automatically and lets you find files without remembering where you put them.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-12 lg:py-16 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-8 lg:mb-12">
          <small className="font-medium text-xs uppercase tracking-wider text-primary mb-4 block">
            Sound familiar?
          </small>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
            Every maker has this problem
          </h2>
          <p className="mt-2 text-base lg:text-lg text-foreground/60">
            We talked to hundreds of makers in laser cutting, CNC, and 3D printing communities.
            The same story came up every time: thousands of design files, no way to find them,
            and hours wasted scrolling through folders.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {painPoints.map((point) => (
            <div key={point.problem} className="rounded-2xl bg-card border p-5 lg:p-6">
              <point.icon className="size-5 text-primary mb-3" />
              <h3 className="font-medium text-lg mb-1">{point.problem}</h3>
              <blockquote className="text-sm italic text-foreground/50 border-l-2 border-primary/30 pl-3 mb-3">
                &ldquo;{point.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-foreground/60">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
