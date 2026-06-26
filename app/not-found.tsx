import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-4">
          404
        </h1>
        <p className="text-slate-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 transition-colors text-sm font-medium"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
