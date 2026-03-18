import { NotificationItem } from "./NotificationItem";

export const NotificationSidebar = () => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm min-h-[600px] flex flex-col">
            {/* Header của Sidebar */}
            <h2 className="text-2xl font-bold mb-6">Notifications</h2>

            {/* Filter & Actions */}
            <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm font-medium text-zinc-600">Unread</span>
                </label>
                <button className="text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 px-3 py-1.5 rounded-lg transition-colors">
                    Mark all as read
                </button>
            </div>

            {/* Danh sách thông báo */}
            <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                <NotificationItem
                    type="course"
                    title="Course Update"
                    description="New assignment posted in Advanced ML Course"
                    time="2h ago"
                    isUnread={true}
                />
                <NotificationItem
                    type="forum"
                    title="Forum activity"
                    description="3 new replies to your ML discussion post"
                    time="2h ago"
                    isUnread={true}
                />
                <NotificationItem
                    type="course"
                    title="Course Update"
                    description="New assignment posted in Advanced ML Course"
                    time="2h ago"
                />
                <NotificationItem
                    type="course"
                    title="Course Update"
                    description="New assignment posted in Advanced ML Course"
                    time="2h ago"
                />
            </div>

            {/* Footer link */}
            <button className="mt-6 w-full py-2 text-sm font-medium text-zinc-500 hover:text-blue-700 transition-colors border-t border-zinc-100 pt-4">
                View all notifications
            </button>
        </div>
    );
};