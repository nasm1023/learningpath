import {
  GraduationCap,
  Bell,
  User,
  LayoutGrid,
  Map,
  BookOpen,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white px-8 py-4 border-b border-gray-100">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <GraduationCap className="size-7 text-blue-600" />
            <span className="text-xl font-bold text-blue-800 tracking-tight">
              LearningPath
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <Button
              variant="ghost"
              className="gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium"
            >
              <LayoutGrid className="size-4" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="gap-2 text-gray-600 hover:text-blue-600 font-medium"
            >
              <Map className="size-4" />
              AI Roadmap
            </Button>
            <Button
              variant="ghost"
              className="gap-2 text-gray-600 hover:text-blue-600 font-medium"
            >
              <BookOpen className="size-4" />
              Course
            </Button>
            <Button
              variant="ghost"
              className="gap-2 text-gray-600 hover:text-blue-600 font-medium"
            >
              <MessageSquare className="size-4" />
              Forum
            </Button>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 relative"
          >
            <Bell className="size-5" />
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
          </Button>

          <Button className="gap-2 bg-blue-700 hover:bg-blue-800 px-5 rounded-lg shadow-sm">
            <MessageSquare className="size-4 fill-white" />
            AI Assistant
          </Button>

          <div className="flex items-center gap-1 ml-2 cursor-pointer hover:bg-gray-50 p-1 rounded-full transition-colors">
            <div className="size-9 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
              <User className="size-5 text-gray-600" />
            </div>
            <ChevronDown className="size-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
