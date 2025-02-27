export interface LearningPlan {
    track: string;
    durationDays: number;
    id: string;
    isActive: boolean;
    currentDay: number;
    progress: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    startDate: Date;
    endDate: Date;
}