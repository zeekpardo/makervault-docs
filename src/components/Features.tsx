import {
  SearchIcon, TagsIcon, EyeIcon, FolderSyncIcon,
  LinkIcon, FileTextIcon, ZapIcon, ShieldIcon, CopyIcon,
  ArchiveIcon, TypeIcon, CpuIcon,
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
    title: "Find any file in under a second.",
    subtitle: "50,000 files. Results before you finish typing.",
    description: "Type a few characters. MakerVault searches across filenames, tags, notes, source URLs — and the actual content inside your files. Search for a customer's name that's engraved in a LightBurn file. Search for a phrase. Search for a font. It finds what folders never could.",
    highlights: [
      { title: "Full-text search", description: "Search filenames, tags, notes, and source URLs. Results appear as you type.", icon: SearchIcon },
      { title: "Deep search", description: 'Prefix your query with / to search inside file contents — LightBurn text, layer names, cut settings, G-code comments.', icon: FileTextIcon },
      { title: "Multi-filter", description: "Combine search with filters for file type, tags, sources, favorites, and notes. Every filter works together.", icon: ZapIcon },
    ],
  },
  {
    id: "preview",
    title: "See inside every file without opening it.",
    subtitle: "Press spacebar. Full preview — instantly.",
    description: "LightBurn, xTool, SVG, DXF, STL, 3MF, PDF, PNG, fonts, G-code, and 25+ more. For LightBurn and xTool files, you also see the cut settings, layer info, text elements, and embedded notes. No more opening files one by one just to see what they are.",
    highlights: [
      { title: "25+ file types", description: "SVG, DXF, AI, EPS, CDR, STL, 3MF, G-code, LightBurn, xTool, RDWorks, VCarve, PDF, PNG, TTF, OTF, and more.", icon: EyeIcon },
      { title: "LightBurn deep read", description: "View cut settings, layer info, text elements, font names, and embedded thumbnails without opening LightBurn.", icon: FileTextIcon },
      { title: "ZIP bundles", description: "Bought a bundle with 200 files? MakerVault reads the ZIP and shows every file inside with previews — without extracting to disk.", icon: ArchiveIcon },
    ],
  },
  {
    id: "xtool",
    title: "xTool Creative Space — deep read.",
    subtitle: "See inside your xTool files without opening the app.",
    description: "MakerVault reads inside xTool Creative Space project files the same way it reads LightBurn. Open a file and instantly see processing parameters, layer settings, material info, and design elements — without launching xTool. Search for anything inside your xTool projects the same way you search everything else.",
    highlights: [
      { title: "Processing parameters", description: "Speed, power, passes, and engraving settings extracted directly from the file — visible at a glance.", icon: ZapIcon },
      { title: "Layer & material info", description: "See every layer, its material type, and how it's configured without opening xTool Creative Space.", icon: FileTextIcon },
      { title: "Deep search", description: "Prefix your query with / to search inside xTool file contents — find projects by material, setting, or design element.", icon: SearchIcon },
    ],
  },
  {
    id: "organize",
    title: "Tags that actually work.",
    subtitle: "Better than folders. Way better than folders.",
    description: "Folders force you to put a file in one place. Tags let it live in many. Create up to 3 levels of nested tags — Holiday → Christmas → Ornaments — tag files in bulk, and filter your entire library with one click.",
    highlights: [
      { title: "Nested hierarchy", description: "Create up to 3 levels of tags. Click a parent tag to filter by everything underneath it.", icon: TagsIcon },
      { title: "Bulk tagging", description: "Select multiple files with Cmd+click or Shift+click and tag them all at once.", icon: TagsIcon },
      { title: "Know your fonts", description: "MakerVault indexes every font used in your LightBurn files. Click a font name and see every project that uses it.", icon: TypeIcon },
    ],
  },
  {
    id: "local",
    title: "Your files never leave your computer.",
    subtitle: "No cloud. No account. No internet required after activation.",
    description: "MakerVault runs entirely on your machine and watches your folders for changes in real time. Track where every file came from, link related files together, and find true duplicates by content hash — not just filename. One-time purchase. You buy it, you own it. Let's be real — we have enough subscriptions already.",
    highlights: [
      { title: "Source tracking", description: "Track where files came from — Etsy, Creative Fabrica, Design Bundles, or your own designs. Paste a URL and the source is auto-detected.", icon: LinkIcon },
      { title: "Duplicate detection", description: "Content hashing — not filename matching. Finds real duplicates even if renamed or saved to different folders.", icon: CopyIcon },
      { title: "Real-time file watching", description: "New, modified, and deleted files are detected automatically across all your watched folders. No manual re-scan.", icon: FolderSyncIcon },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-my-20 py-12 lg:py-16 xl:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-6 lg:mb-0 max-w-3xl">
          <small className="font-medium text-xs uppercase tracking-wider text-primary mb-4 block">
            What it does
          </small>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
            Not just organized. Searchable. Previewable. Understood.
          </h2>
          <p className="mt-2 text-base lg:text-lg text-foreground/60">
            Most file organizers give you a prettier folder view. MakerVault actually reads your files,
            extracts the data inside them, and turns your scattered collection into a searchable knowledge system.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 lg:mt-12 grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
        {features.map((feature) => (
          <div key={feature.id}>
            <h3 className="font-normal text-lg text-foreground leading-tight md:text-xl lg:text-2xl">
              <span className="font-medium">{feature.title} </span>
              <span className="text-foreground/60">{feature.subtitle}</span>
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
