import { InfoGrid } from "@/src/components/personal/InfoGrid";
import { NotificationSidebar } from "@/src/components/personal/NotificationSidebar";
import { ProfileCard } from "@/src/components/personal/ProfileCard";

export default function PersonalPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column */}
      <div className="lg:col-span-3">
        <ProfileCard />
      </div>

      {/* Middle Column */}
      <div className="lg:col-span-6 h-full">
        <InfoGrid />
      </div>

      {/* Right Column */}
      <div className="lg:col-span-3">
        <NotificationSidebar />
      </div>
    </div>
  );
}