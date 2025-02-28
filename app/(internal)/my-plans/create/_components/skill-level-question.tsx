// components/create-plan/skill-level-question.tsx
import React from "react"
import { useFormContext } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { InfoIcon } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { questionToSkillIdMap, ratingDescriptions } from "./create-plan-form-schema"

interface SkillLevelQuestionProps {
    question: string
    className?: string
}

export function SkillLevelQuestion({ question, className }: SkillLevelQuestionProps) {
    const { control } = useFormContext()
    const skillId = questionToSkillIdMap[question]

    // Generate numbers from 0 to 10 for the rating scale
    const ratingOptions = Array.from({ length: 11 }, (_, i) => i)

    return (
        <FormField
            control={control}
            name={`skillLevels.${skillId}`}
            render={({ field }) => (
                <FormItem className={cn("space-y-3", className)}>
                    <div className="flex items-center gap-2">
                        <FormLabel>{question}</FormLabel>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    type="button"
                                    className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80"
                                >
                                    <InfoIcon className="h-3.5 w-3.5" />
                                    <span className="sr-only">Rating scale info</span>
                                </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs p-3">
                                <div className="space-y-1 text-xs">
                                    {ratingOptions.map((rating) => (
                                        <p key={rating}>
                                            <strong>{rating}</strong>: {ratingDescriptions[rating as keyof typeof ratingDescriptions]}
                                        </p>
                                    ))}
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <FormControl>
                        <RadioGroup
                            onValueChange={(value) => field.onChange(parseInt(value))}
                            defaultValue={field.value?.toString()}
                            className="flex flex-wrap gap-2"
                        >
                            {ratingOptions.map((rating) => (
                                <FormItem key={rating} className="flex items-center space-x-0">
                                    <FormControl>
                                        <RadioGroupItem
                                            value={rating.toString()}
                                            id={`${skillId}-${rating}`}
                                            className="peer sr-only"
                                        />
                                    </FormControl>
                                    <label
                                        htmlFor={`${skillId}-${rating}`}
                                        className={cn(
                                            "flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-input text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                                            "peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                                        )}
                                    >
                                        {rating}
                                    </label>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}