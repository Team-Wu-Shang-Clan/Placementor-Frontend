'use client'

// Note yaha pe previous day ka naam router ke naam pe hone chahiye, component samajh na aaye to tanmay se pooch lio
// path be like - /day/next-module

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export function DayNavigation({ previousDay = "DSA", nextDay = "Algo" }) {
    const router = useRouter();

    const onPrevious = (previousDay: any) => {
        if (previousDay) router.push(`/day/${previousDay.toLowerCase().replace(/\s+/g, '-')}`);
    };

    const onNext = (nextDay: any) => {
        if (nextDay) router.push(`/day/${nextDay.toLowerCase().replace(/\s+/g, '-')}`);
    }

    return (
      <Card className="w-full max-w-lg p-4 mt-6">
        <CardHeader>
          <CardTitle>Day Navigation</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button onClick={onPrevious} disabled={!previousDay}>
            ← {previousDay || "No Previous"}
          </Button>
          <Button onClick={onNext} disabled={!nextDay} className="bg-green-500">
            {nextDay || "No Next"} →
          </Button>
        </CardContent>
      </Card>
    );
}