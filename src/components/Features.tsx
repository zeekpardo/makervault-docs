import {
  SearchIcon, TagsIcon, EyeIcon, FolderSyncIcon,
  LinkIcon, FileTextIcon, ZapIcon, ShieldIcon, CopyIcon,
} from "lucide-react";
import type { JSXElementConstructor } from "react";

interface FeatureHighlight {
  title: string;
  description: string;
  icon: JSXElementConstructor<any>;
}

interface FeatureSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: FeatureHighlight[];
}

const features: FeatureSection[] = [
  {
    id: "search",
    title: "Instant Search",
    subtitle: "Find any file in under a second.",
    description: "Type a few characters and MakerVault finds it. Search across filenames, tags, notes, and source URLs. Use deep search to look inside LightBurn files for text elements, layer names, and cut settings.",
    highlights: [
      { title: "Full-text search", description: "Search filenames, tags, notes, and source URLs. Results appear as you type.", icon: SearchIcon },
      { title: "Deep search", description: 'Type "/" before your query to search inside file contents — LightBurn text, layer names, cut settings.', icon: FileTextIcon },
      { title: "Multi-filter", description: "Combine search with filters for file type, tags, sources, favorites, and notes. All filters work together.", icon: ZapIcon },
    ],
  },
  {
    id: "organize",
    title: "Hierarchical Tags",
    subtitle: "Better than folders. Way better than folders.",
    description: "Folders force you to put a file in one place. Tags let it live in many. Create up to 3 levels of nested tags (Holiday > Christmas > Ornaments), tag files in bulk, and filter your entire library with one click.",
    highlights: [
      { title: "Nested tags", description: "Create up to 3 levels of hierarchy. Click a parent tag to filter by all its descendants.", icon: TagsIcon },
      { title: "Bulk tagging", description: "Select multiple files with Cmd+click or Shift+click and tag them all at once.", icon: TagsIcon },
      { title: "Source tracking", description: "Track where files came from — Design Bundles, Creative Fabrica, Etsy, or your own designs. Paste a URL and the source is auto-detected.", icon: LinkIcon },
    ],
  },
  {
    id: "preview",
    title: "Spacebar Quick Preview",
    subtitle: "See what a file is without opening another app.",
    description: "Press Spacebar on any file to see a full preview. SVGs, images, PDFs, fonts, LightBurn thumbnails, and G-code files all render natively. Arrow keys to browse, Escape to close.",
    highlights: [
      { title: "25+ file types", description: "SVG, DXF, AI, EPS, CDR, STL, 3MF, OBJ, G-code, LightBurn, xTool, RDWorks, VCarve, PDF, PNG, TTF, OTF, and more.", icon: EyeIcon },
      { title: "LightBurn integration", description: "View cut/layer settings, text elements, font names, and embedded thumbnails without opening LightBurn.", icon: FileTextIcon },
      { title: "Duplicate detection", description: "Files are hashed with BLAKE3 so duplicates are identified instantly across all your folders.", icon: CopyIcon },
    ],
  },
  {
    id: "local",
    title: "Local-First",
    subtitle: "Your files never leave your computer.",
    description: "MakerVault runs entirely on your machine. No cloud sync, no account required, no data leaving your computer. Your library is stored in a fast SQLite database. Add any folder and MakerVault watches it for changes automatically.",
    highlights: [
      { title: "Real-time file watching", description: "New, modified, or deleted files are detected automatically. No manual re-scan needed.", icon: FolderSyncIcon },
      { title: "Lightning fast", description: "Scans 5,000 files in under a second. Search returns results in under 30ms for 50,000 files.", icon: ZapIcon },
      { title: "Offline forever", description: "Activate your license once online, then the app works fully offline. No internet required.", icon: ShieldIcon },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-my-20 py-12 lg:py-16 xl:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-6 lg:mb-0 max-w-3xl">
          <small className="font-medium text-xs uppercase tracking-wider text-primary mb-4 block">
            Everything you need
          </small>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
            Stop scrolling. Start finding.
          </h2>
          <p className="mt-2 text-base lg:text-lg text-foreground/60">
            Whether you have 200 files or 50,000, MakerVault keeps them organized and searchable
            so you can spend your time making, not hunting for files.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 lg:mt-12 grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
        {features.map((feature) => (
          <div key={feature.id}>
            <h3 className="font-normal text-lg text-foreground leading-tight md:text-xl lg:text-2xl">
              <span className="font-medium">{feature.title}. </span>
              <span>{feature.subtitle}</span>
            </h3>
            <p className="mt-4 text-foreground/60 max-w-3xl">{feature.description}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-12">
              {feature.highlights.map((highlight, k) => (
                <div
                  key={`highlight-${feature.id}-${k}`}
                  className="flex flex-col items-stretch justify-between rounded-2xl p-4 lg:p-6 bg-card"
                >
                  <div>
                    <highlight.icon className="text-primary text-xl" width="1em" height="1em" />
                    <strong className="mt-2 block font-medium text-lg">{highlight.title}</strong>
                    <p className="mt-1 text-sm text-foreground/60">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
