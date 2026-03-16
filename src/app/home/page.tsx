import { Header } from "@/components/Header";
import { AcademicProcess } from "@/components/AcademicProcess";
import { NotificationsSidebar } from "@/components/NotificationsSidebar";
import { RecommendedSteps } from "@/components/RecommendedSteps";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Main Content */}
          <div className="space-y-6">
            <AcademicProcess />
            <RecommendedSteps />
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <NotificationsSidebar />
          </aside>
        </div>
      </main>
    </div>
  );
}
