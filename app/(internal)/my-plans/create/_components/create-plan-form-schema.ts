import { z } from "zod"

export const ratingDescriptions = {
    0: "I don't know anything about this topic",
    1: "I know very basic concepts",
    2: "I understand fundamental principles",
    3: "I can solve basic problems",
    4: "I have working knowledge",
    5: "I can implement medium-difficulty solutions",
    6: "I understand advanced concepts",
    7: "I can solve complex problems",
    8: "I have comprehensive knowledge",
    9: "I can teach this topic to others",
    10: "I'm an expert in this topic"
}

// Skill questions with their IDs
export const skillQuestions = [
    {
        id: "DSA",
        question: "What is your current level in DSA?",
    },
    {
        id: "ProgrammingLanguages",
        question: "What is your current level in Programming Languages?",
    },
    {
        id: "OperatingSystems",
        question: "What is your current level in Operating Systems?",
    },
    {
        id: "ComputerNetworks",
        question: "What is your current level in Computer Networks?",
    },
    {
        id: "WebDevelopment",
        question: "What is your current level in Web Development?",
    },
    {
        id: "DatabaseManagement",
        question: "What is your current level in Database Management?",
    },
    {
        id: "MachineLearning",
        question: "What is your current level in Machine Learning?",
    },
    {
        id: "SystemDesign",
        question: "What is your current level in System Design?",
    },
    {
        id: "QuantitativeAptitude",
        question: "What is your current level in Quantitative Aptitude?",
    },
    {
        id: "VerbalAbility",
        question: "What is your current level in Verbal Ability?",
    },
]

export const trackOptions = [
    {
        id: "PRODUCT_BASED",
        title: "Product Based Companies",
        companies: "Google, Microsoft, Amazon, Meta, etc.",
    },
    {
        id: "SERVICE_BASED",
        title: "Service Based Companies",
        companies: "TCS, Infosys, Wipro, Accenture, etc.",
    },
    {
        id: "BIG_4",
        title: "Big 4",
        companies: "Deloitte, PwC, KPMG, EY",
    },
    {
        id: "FAANG",
        title: "FAANG",
        companies: "Facebook, Amazon, Apple, Netflix, Google",
    },
    {
        id: "GENERIC",
        title: "Generic Plan",
        subtitle: "Well suited for any company",
    },
]

export const durationOptions = [
    { value: 15, label: "15 days" },
    { value: 30, label: "30 days" },
    { value: 60, label: "60 days" },
    { value: 90, label: "90 days" },
]

// Create a map of question text to skill ID
export const questionToSkillIdMap = skillQuestions.reduce((acc, skillInfo) => {
    acc[skillInfo.question] = skillInfo.id
    return acc
}, {} as Record<string, string>)

export const createPlanSchema = z.object({
    track: z.string({
        required_error: "Please select a track",
    }),
    durationDays: z.number({
        required_error: "Please select a duration",
    }),
    skillLevels: z.record(z.string(), z.number().min(0).max(10)),
})

export type CreatePlanFormValues = z.infer<typeof createPlanSchema>