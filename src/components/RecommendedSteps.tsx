import { GraduationCap, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface Step {
  id: string;
  icon: typeof GraduationCap;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
}

const steps: Step[] = [
  {
    id: "1",
    icon: GraduationCap,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Explore Advanced Data Science Courses",
    description:
      "Based on your AI, Probability, statistics-driven interests, expand your skills with industry-standard tools and techniques.",
    buttonText: "Browse Course",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: "2",
    icon: Users,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Connect with Industry Mentors",
    description:
      "Join our mentorship program to network with AI, cybersecurity or ML specialists who can mentor you and get insight.",
    buttonText: "Browse Course",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
];

export function RecommendedSteps() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recommended Next Steps</CardTitle>
        <CardDescription>
          AI-powered suggestions based on your progress and goals
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <div className="space-y-3">
                  <div
                    className={`inline-flex size-10 items-center justify-center rounded-lg ${step.iconBg}`}
                  >
                    <Icon className={`size-5 ${step.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  <Button className={`w-fit ${step.buttonColor}`}>
                    {step.buttonText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
