import Link from "next/link";
import {
  LayoutDashboard,
  Map,
  BookOpen,
  MessageSquare,
  Bell,
  MessageCircleCode,
  UserCircle,
  ChevronDown
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white px-4 py-2 dark:bg-black dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-700 text-white">
              <BookOpen size={20} />
            </div>
            <span className="text-xl font-bold text-blue-700">LearningPath</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/dashboard" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
            <Link href="/roadmap" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
              <Map size={18} />
              AI Roadmap
            </Link>
            <Link href="/course" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
              <BookOpen size={18} />
              Course
            </Link>
            <Link href="/forum" className="flex items-center gap-2 hover:text-blue-700 transition-colors">
              <MessageSquare size={18} />
              Forum
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="text-zinc-500 hover:text-zinc-800 dark:hover:text-white">
              <Bell size={20} />
            </button>

            <button className="flex items-center gap-2 rounded-md bg-blue-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-800 transition-all">
              <MessageCircleCode size={18} />
              AI Assistant
            </button>

            <div className="flex items-center gap-1 border-l pl-4 dark:border-zinc-800">
              <Link href="/personal" className="flex items-center gap-2 hover:text-zinc-800 dark:hover:text-white">
                <UserCircle size={28} className="text-zinc-400" />
                <span className="hidden sm:inline">Nam Ly</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl p-6">
        {children}
      </main>
    </div>
  );
}