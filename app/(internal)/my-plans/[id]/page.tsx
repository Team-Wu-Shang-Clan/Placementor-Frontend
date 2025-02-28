"use client"
import React from 'react';
import { Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGetLearningPlanQuery } from '@/services/learning-plan/queries';
import { useParams, useRouter } from 'next/navigation';
import { LearningPlan } from '@/types/learning-plan.types';

interface QueryResponse {
    status: string;
    message: string;
    data: {
        learningPlan: LearningPlan;
    };
}

interface LearningPlanProgressProps {
    learningPlan?: QueryResponse;
    isLoading: boolean;
}


const Header = () => {
    return (
        <div className="rounded-lg border border-blue-300 bg-green-50 p-6 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-green-700">Generic Plan</h1>
                <p className="text-xl text-green-600 mt-1">Learn & Prepare for Interview Skills</p>
            </div>
        </div>
    );
};



const LearningPlanProgress: React.FC<LearningPlanProgressProps> = ({
    learningPlan,
    isLoading
}) => {
    const router = useRouter()
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!learningPlan?.data?.learningPlan) {
        return <div>No learning plan found</div>;
    }

    const plan = learningPlan.data.learningPlan;

    return (
        <div className="flex flex-col items-center space-y-6">
            {/* <h1 className="text-2xl font-bold text-center">
                {plan.track} Companies
            </h1> */}

            <Header />

            <div className="relative w-full max-w-[12rem]">
                <div className="relative space-y-6 ">
                    {plan.dailyPlans.map((dailyPlan, index) => {
                        const handleOnClick = (isUnlocked: boolean) => {
                            if (!isUnlocked) return
                            router.push(`/my-plans/${plan.id}/days/${dailyPlan.id}`);
                        }
                        return (
                            <div
                                key={dailyPlan.id}
                                className={cn("flex items-center justify-start", {
                                    "justify-end": index % 2
                                })}
                            >
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className={cn(
                                        "w-20 h-20 hover:cursor-pointer rounded-full border-2",
                                        dailyPlan.isUnlocked
                                            ? dailyPlan.isCompleted
                                                ? "bg-green-500 text-foreground border-green-500"
                                                : "bg-background text-foreground border-primary"
                                            : "bg-muted text-muted-foreground",
                                        "flex items-center justify-center"
                                    )}
                                    disabled={!dailyPlan.isUnlocked}
                                    onClick={() => handleOnClick(dailyPlan.isUnlocked)}
                                >
                                    {dailyPlan.isUnlocked ? (
                                        index + 1
                                    ) : (
                                        <Lock className="w-5 h-5" />
                                    )}
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="text-center">
                <p className="text-sm text-gray-600">
                    Progress: {plan.progress}%
                    ({plan.currentDay}/{plan.durationDays} Days)
                </p>
            </div>
        </div>
    );
};


// Example usage in a page
const LearningPlanPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading } = useGetLearningPlanQuery({ id });

    return (
        <LearningPlanProgress
            learningPlan={data}
            isLoading={isLoading}
        />
    );
};

export default LearningPlanPage