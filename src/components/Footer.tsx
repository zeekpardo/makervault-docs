export default function Footer() {
  return (
    <footer className="border-t py-8 text-foreground/60 text-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div>
          <span className="font-semibold text-lg text-foreground/70">MakerVault</span>
          <p className="mt-3 text-sm opacity-70">
            &copy; {new Date().getFullYear()} MakerVault. All rights reserved.
          </p>
          <p className="mt-1 text-xs opacity-50">
            Local-first file organizer for makers.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a href="/#features" className="block hover:text-foreground transition-colors">Features</a>
          <a href="/#pricing" className="block hover:text-foreground transition-colors">Pricing</a>
          <a href="/#faq" className="block hover:text-foreground transition-colors">FAQ</a>
          <a href="/download" className="block hover:text-foreground transition-colors">Download</a>
          <a href="/releases" className="block hover:text-foreground transition-colors">Past Releases</a>
        </div>

        <div className="flex flex-col gap-2">
          <a href="/contact" className="block hover:text-foreground transition-colors">Contact</a>
          <a href="/legal/privacy-policy" className="block hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="/legal/terms" className="block hover:text-foreground transition-colors">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}
