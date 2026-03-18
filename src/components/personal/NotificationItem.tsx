import { BookOpen, MessageSquare, MoreVertical } from "lucide-react";

interface NotificationItemProps {
    type: 'course' | 'forum';
    title: string;
    description: string;
    time: string;
    isUnread?: boolean;
}

export const NotificationItem = ({ type, title, description, time, isUnread }: NotificationItemProps) => {
    return (
        <div className={`relative flex gap-3 p-4 rounded-xl bg-zinc-50 border-l-4 transition-all hover:bg-zinc-100 ${isUnread ? "border-blue-600 shadow-sm" : "border-transparent"
            }`}>
            {/* Icon nền tảng */}
            <div className="mt-1">
                {type === 'course' ? (
                    <BookOpen size={18} className="text-zinc-600" />
                ) : (
                    <MessageSquare size={18} className="text-zinc-600" />
                )}
            </div>

            {/* Nội dung */}
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-zinc-800">{title}</h4>
                    <span className="text-[10px] text-zinc-400 font-medium">{time}</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>

            {/* Nút menu phụ */}
            <button className="text-zinc-400 hover:text-zinc-600">
                <MoreVertical size={14} />
            </button>
        </div>
    );
};