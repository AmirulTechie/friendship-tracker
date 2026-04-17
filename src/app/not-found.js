import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
            <div className="relative flex flex-col items-center">
                <span
                    className="absolute -top-32 select-none text-[15rem] font-bold opacity-[0.03] sm:text-[20rem]"
                    style={{ color: '#244D3F' }}
                >
                    404
                </span>

                <div className="z-10 text-center">
                    <h1
                        className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl"
                        style={{ color: '#244D3F' }}
                    >
                        Page not found.
                    </h1>

                    <p className="mx-auto mb-10 max-w-lg text-lg text-gray-500">
                        The page youre looking for has wandered off. Dont worry,
                        we can help you find your way back to safety.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="w-full rounded-lg px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 active:scale-95 sm:w-auto"
                            style={{ backgroundColor: '#244D3F' }}
                        >
                            Return Home
                        </Link>

                        <Link
                            href="/support"
                            className="w-full rounded-lg border-2 px-8 py-4 text-sm font-semibold transition-all hover:bg-gray-50 sm:w-auto"
                            style={{ borderColor: '#244D3F', color: '#244D3F' }}
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>

                <div className="mt-20 flex gap-6 text-sm text-gray-400">
                    <Link href="/faq" className="hover:underline">FAQ</Link>
                    <Link href="/sitemap" className="hover:underline">Sitemap</Link>
                    <Link href="/status" className="hover:underline">Site Status</Link>
                </div>
            </div>
        </main>
    );
}