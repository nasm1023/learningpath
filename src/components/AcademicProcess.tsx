"use client";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const semesterData = [
  { semester: "S1", creditsEarned: 12, requiredCredits: 15 },
  { semester: "S2", creditsEarned: 18, requiredCredits: 18 },
  { semester: "S3", creditsEarned: 22, requiredCredits: 20 },
  { semester: "S4", creditsEarned: 15, requiredCredits: 18 },
  { semester: "S5", creditsEarned: 25, requiredCredits: 22 },
  { semester: "S6", creditsEarned: 20, requiredCredits: 21 },
  { semester: "S7", creditsEarned: 18, requiredCredits: 20 },
  { semester: "S8", creditsEarned: 16, requiredCredits: 18 },
];

const cumulativeData = [
  { semester: "S1", creditsEarned: 12, requiredCredits: 15 },
  { semester: "S2", creditsEarned: 30, requiredCredits: 33 },
  { semester: "S3", creditsEarned: 52, requiredCredits: 53 },
  { semester: "S4", creditsEarned: 67, requiredCredits: 71 },
  { semester: "S5", creditsEarned: 92, requiredCredits: 93 },
  { semester: "S6", creditsEarned: 112, requiredCredits: 114 },
  { semester: "S7", creditsEarned: 130, requiredCredits: 134 },
  { semester: "S8", creditsEarned: 146, requiredCredits: 152 },
];

export function AcademicProcess() {
  const [view, setView] = useState<"semester" | "cumulative">("semester");
  const data = view === "semester" ? semesterData : cumulativeData;
  const totalCredits = 80;
  const requiredCredits = 138;
  const completed = 80;
  return (
    <Card className="w-full border-none shadow-sm rounded-2xl overflow-hidden p-4">
      <CardHeader className=" flex flex-row items-start justify-between space-y-0 pb-8">
        <div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Academic Process
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1">Credits vs Required</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <Button
            variant={view === "semester" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("semester")}
            className={`rounded-lg px-4 ${
              view === "semester"
                ? "bg-blue-700  text-white shadow-sm' : 'text-gray-500"
                : "text-gray-500"
            }`}
          >
            Semester View
          </Button>
          <Button
            variant={view === "cumulative" ? "default" : "ghost"}
            size="sm"
            onClick={() => setView("cumulative")}
            className={`rounded-lg px-4 ${
              view === "cumulative"
                ? "bg-blue-700  text-white shadow-sm"
                : "text-gray-500"
            }`}
          >
            Cumulative View
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-10">
        {/* Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="semester"
                stroke="#9ca3af"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="creditsEarned"
                stroke="#3b82f6"
                fill="#3b82f620"
                strokeWidth={2}
                name="Credits Earned"
              />
              <Area
                type="monotone"
                dataKey="requiredCredits"
                stroke="#9ca3af"
                fill="transparent"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Required Credits"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-600">Credits Earned</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full border-2 border-gray-400 border-dashed bg-transparent"></div>
            <span className="text-gray-600">Required Credits</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-4">
          <div className="text-center">
            <div className="text-3xl font-semibold text-blue-600">
              {totalCredits}
            </div>
            <div className="text-sm text-gray-600">Total Credits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold">{requiredCredits}</div>
            <div className="text-sm text-gray-600">Required Credits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-teal-600">
              {completed}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-gray-500">Process to Graduation</span>
            <span className="text-gray-400 italic">
              On track to graduate in 3 semesters
            </span>
          </div>
          <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[60%] shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
