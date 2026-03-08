import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../lib/utils";

const items = [
  {
    question: "What file types does MakerVault support?",
    answer: "MakerVault supports 25+ file types including SVG, DXF, AI, EPS, CDR, STL, 3MF, OBJ, G-code, LightBurn (.lbrn/.lbrn2), xTool, RDWorks, VCarve Pro, PDF, PNG, JPG, WebP, BMP, GIF, TIFF, TTF, OTF, and more. If you work with laser cutters, CNC routers, vinyl cutters, or 3D printers, your files are covered.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes. MakerVault comes with a 7-day free trial with full functionality, no credit card required. Just download and start organizing.",
  },
  {
    question: "How does the one-time purchase work?",
    answer: "You pay $59 once and own MakerVault forever. Your purchase includes 1 year of updates. After that year, you keep the version you have — it still works. If you want continued updates, you can optionally renew for $20/year. There is no subscription required to use the app.",
  },
  {
    question: "Does MakerVault send my files to the cloud?",
    answer: "No. MakerVault is 100% local-first. All your data stays on your computer. Nothing is uploaded, synced, or sent anywhere. You don't even need an internet connection after activating your license once.",
  },
  {
    question: "Can I use MakerVault on multiple computers?",
    answer: "Yes. Each license allows activation on up to 2 computers. You can deactivate a device from the app if you need to move your license to a new machine.",
  },
  {
    question: "I have thousands of files scattered everywhere. Will MakerVault help?",
    answer: "That's exactly what MakerVault is built for. Point it at any folder and it scans everything — including subfolders — and indexes every supported file automatically. You can then search, tag, and filter your entire library instantly. It also detects duplicates across all your folders so you can clean up the mess.",
  },
  {
    question: "Does it work with LightBurn?",
    answer: "MakerVault has deep LightBurn integration. It reads inside .lbrn and .lbrn2 files to extract cut/layer settings (type, speed, power, passes), text elements, font names, and embedded thumbnails. You can search for LightBurn files by their contents and preview settings without opening LightBurn.",
  },
  {
    question: "What about Windows support?",
    answer: "MakerVault is macOS-first right now (macOS 10.15+). Windows support is planned for v1.1.",
  },
  {
    question: "What if I want a refund?",
    answer: "We offer a 30-day money-back guarantee. If MakerVault doesn't work for you, just reach out and we'll refund your purchase, no questions asked.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="scroll-mt-20 py-12 lg:py-16 xl:py-24" id="faq">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-8 lg:gap-12">
          <div>
            <h2 className="mb-2 font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight text-foreground">
              Frequently asked questions
            </h2>
            <p className="text-foreground/60 text-sm sm:text-lg">
              Everything you need to know about MakerVault.
            </p>
          </div>

          <div className="w-full space-y-2">
            {items.map((item, i) => (
              <div key={i} className="rounded-lg bg-card border px-4 lg:px-6">
                <button
                  className="flex w-full items-center justify-between py-4 text-left font-medium text-base hover:no-underline"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {item.question}
                  <ChevronDownIcon
                    className={cn(
                      "size-4 shrink-0 ml-2 transition-transform duration-200",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === i && (
                  <div className="pb-4 text-foreground/60">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
