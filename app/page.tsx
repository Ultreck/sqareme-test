import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { steps } from "@/lib/helper";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div className="p-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to FundR</h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Your central hub for managing accounts, tracking transactions, and
          making transfers — all in one intuitive dashboard.
        </p>
        <Button asChild className="mt-6">
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CardHeader>
              <step.icon className={`w-8 h-8 ${step.color}`} />
              <CardTitle className="mt-3">{step.title}</CardTitle>
              <CardDescription>{step.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href={step.href}>Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
