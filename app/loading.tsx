export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020617]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 border-2 border-cyan-500/20 rounded-full" />
          <div className="absolute inset-0 w-12 h-12 border-2 border-transparent border-t-cyan-400 rounded-full animate-spin" />
        </div>
        <p className="text-sm text-slate-400 font-mono">
          <span className="text-cyan-400">&gt;</span> Loading...
        </p>
      </div>
    </div>
  );
}
