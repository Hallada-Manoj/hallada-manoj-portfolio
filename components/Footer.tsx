export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/10 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              Designed &amp; Developed by{" "}
              <span className="text-white font-medium">Hallada Manoj</span>
            </p>
            <p className="text-xs text-slate-500 mt-1">
              &copy; {year} All Rights Reserved
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span>Built with</span>
            <span className="text-cyan-400 font-medium">Next.js</span>
            <span className="text-slate-600">•</span>
            <span className="text-indigo-400 font-medium">TypeScript</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 font-medium">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
