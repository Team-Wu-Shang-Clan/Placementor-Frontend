import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";

export default function DayProgress({ resourcesProgress = 0, practiceProgress = 0, coins = 0 }) {
  return (
    <Card className="w-full max-w-lg p-4">
      <CardHeader>
        <CardTitle>Day Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm font-medium mb-2">Resources Completed: {resourcesProgress}%</p>
          <Progress value={resourcesProgress} className="h-3" />
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Practice Completed: {practiceProgress}%</p>
          <Progress value={practiceProgress} className="h-3" />
        </div>

        <div className="flex items-center gap-2">
          <CircleDollarSign className="text-yellow-500" />
          <span className="text-lg font-semibold">{coins} Coins Earned</span>
        </div>
      </CardContent>
    </Card>
  );
} 




// Usage Example
// <DayProgress resourcesProgress={70} practiceProgress={50} coins={120} />
