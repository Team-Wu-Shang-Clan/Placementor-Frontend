import React from "react"
import { useFormContext } from "react-hook-form"
import {
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { trackOptions } from "./create-plan-form-schema"

interface TrackSelectorProps {
    className?: string
}

export function TrackSelector({ className }: TrackSelectorProps) {
    const { control } = useFormContext()

    return (
        <FormField
            control={control}
            name="track"
            render={({ field }) => (
                <FormItem className={cn("space-y-4", className)}>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {trackOptions.map((track) => (
                                <FormItem key={track.id}>
                                    <FormControl>
                                        <RadioGroupItem
                                            value={track.id}
                                            id={track.id}
                                            className="peer sr-only"
                                        />
                                    </FormControl>
                                    <label
                                        htmlFor={track.id}
                                        className="flex cursor-pointer flex-col rounded-lg border-2 border-muted bg-transparent p-4 hover:border-primary hover:bg-accent peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <CardHeader className="p-0">
                                            <CardTitle className="text-lg">{track.title}</CardTitle>
                                            {track.subtitle ? (
                                                <CardDescription>{track.subtitle}</CardDescription>
                                            ) : (
                                                <CardDescription>{track.companies}</CardDescription>
                                            )}
                                        </CardHeader>
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
