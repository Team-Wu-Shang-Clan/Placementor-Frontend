import { api } from "@/lib/axios"
import { LearningPlan } from "@/types/learning-plan.types"

export const createLearningPlan = async (data: { track: string, durationDays: number }): Promise<{ status: string, message:string, data: {learningPlan: LearningPlan} }> => {
    return (await api.post("/learning-plan", data)).data
}