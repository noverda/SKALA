import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#083350] text-white font-black text-xl flex items-center justify-center mx-auto">
          S
        </div>
        <h1 className="text-2xl font-bold text-[#083350]">
          Page Not Found / Halaman Tidak Ditemukan
        </h1>
        <p className="text-sm text-slate-600">
          Select a bilingual SKALA Phase II portal view below:
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/en"
            className="min-h-[44px] px-4 py-2 rounded-xl bg-[#083350] text-white text-xs font-bold inline-flex items-center"
          >
            English (/en)
          </Link>
          <Link
            href="/id"
            className="min-h-[44px] px-4 py-2 rounded-xl bg-[#00797b] text-white text-xs font-bold inline-flex items-center"
          >
            Indonesia (/id)
          </Link>
        </div>
      </div>
    </main>
  );
}
