"use client";
import { useState } from "react";
import { BookOpen, Users, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface Notification {
  id: string;
  type: "course" | "forum";
  icon: typeof BookOpen;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "course",
    icon: BookOpen,
    title: "Course Update",
    message: "New assignment posted in Advanced ML Course",
    time: "2h ago",
    unread: true,
  },
  {
    id: "2",
    type: "forum",
    icon: Users,
    title: "Forum activity",
    message: "3 new replies to your ML discussion post",
    time: "5h ago",
    unread: false,
  },
  {
    id: "3",
    type: "course",
    icon: BookOpen,
    title: "Course Update",
    message: "New assignment posted in Advanced ML Course",
    time: "1d ago",
    unread: false,
  },
  {
    id: "4",
    type: "course",
    icon: BookOpen,
    title: "Course Update",
    message: "New assignment posted in Advanced ML Course",
    time: "2d ago",
    unread: false,
  },
];

export function NotificationsSidebar() {
  const [view, setView] = useState<"unread" | "all">("unread");
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <Card className="h-fit">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Notifications</CardTitle>
        </div>

        <Tabs defaultValue="unread" className="w-full pt-2">
          <TabsList className="grid w-full grid-cols-2">
            <div className="flex gap-2 pt-2">
              <Button
                variant={view === "unread" ? "default" : "ghost"}
                size="sm"
                onClick={() => setView("unread")}
                className={`rounded-lg px-4 text-xs ${
                  view === "unread"
                    ? "bg-blue-700 text-white shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Unread
              </Button>
              <Button
                variant={view === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setView("all")}
                className={`rounded-lg px-4 text-xs ${
                  view === "all"
                    ? "bg-blue-700 text-white shadow-sm"
                    : "text-gray-500"
                }`}
              >
                Mark all as read
              </Button>
            </div>
          </TabsList>
        </Tabs>
      </CardHeader>

      <CardContent className="space-y-3 px-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`group rounded-lg border p-3 transition-colors ${
                notification.unread
                  ? "border-blue-200 bg-blue-50"
                  : "border-gray-100 bg-white hover:bg-gray-50"
              }`}
            >
              <div className="flex gap-3">
                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-md ${
                    notification.type === "course"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  <Icon className="size-4" />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-sm font-medium">
                      {notification.title}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-6 shrink-0 opacity-0 group-hover:opacity-100"
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-600">
                    {notification.message}
                  </p>
                  <div className="text-xs text-gray-400">
                    {notification.time}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <Button
          variant="ghost"
          className="w-full text-sm text-blue-600 hover:text-blue-700"
        >
          View all notifications
        </Button>
      </CardContent>
    </Card>
  );
}
