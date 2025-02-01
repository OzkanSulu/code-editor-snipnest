import HeaderProfileBtn from "@/app/(root)/_components/HeaderProfileBtn";
import { SignedOut } from "@clerk/nextjs";
import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";

function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 flex items-center justify-between">
          <div className="flex items-center lg:justify-between justify-center bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg w-full">
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3 group relative">
                {/* Logo hover effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                {/* Logo */}
                <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                  <Code2 className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                    SnipNest
                  </span>
                  <span className="block text-xs text-blue-400/60 font-medium">
                    라이브 코드 편집기
                  </span>
                </div>
              </Link>
            </div>
            {/* right section */}
            <div className="flex items-center gap-4 ml-auto">
              <SignedOut>
                <Link
                  href="/pricing"
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
                  <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                    프로
                  </span>
                </Link>
              </SignedOut>
              {/* profile button */}
              <HeaderProfileBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;