// Track type enum
enum TrackType {
    GENERIC = "GENERIC",
    SERVICE_BASED = "SERVICE_BASED",
    PRODUCT_BASED = "PRODUCT_BASED",
    FAANG = "FAANG",
    BIG_4 = "BIG_4",
}

interface LearningResource {
    id: string;
}

interface PracticeResource {
    id: string;
}

interface DailyPlan {
    id: string;
    learningPlanId: string;
    dayNumber: number;
    isUnlocked: boolean;
    isCompleted: boolean;
    createdAt: string;
    updatedAt: string;
    mockInterviewId: string | null;
    learningResources: LearningResource[];
    practiceResources: PracticeResource[];
}

interface LearningPlan {
    id: string;
    userId: string;
    track: TrackType;
    durationDays: number;
    startDate: string;
    endDate: string;
    isActive: boolean;
    currentDay: number;
    progress: number;
    createdAt: string;
    updatedAt: string;
    dailyPlans: DailyPlan[];
}

export type {
    LearningPlan,
    DailyPlan,
    LearningResource,
    PracticeResource
};

export { TrackType };