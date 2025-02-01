import { Blocks } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>개발자를 위한 구축. 코딩하고 공유하세요</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/support" className="text-gray-300 hover:text-gray-100 transition-colors">
            지원
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-gray-100 transition-colors">
            정책
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-gray-100 transition-colors">
            고객센터
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
