"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { loginSchema, LoginValues } from "./form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { sleep } from "@/utils"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function LoginForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
    })

    async function onSubmit(data: LoginValues) {
        setIsLoading(true)
        console.log(data)
        try {
            await sleep(2000)
            toast.success("Login Successful")
            router.replace("/dashboard")
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className="grid gap-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder="name@example.com"
                                        disabled={isLoading}
                                        autoComplete="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        disabled={isLoading}
                                        autoComplete="current-password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign in
                    </Button>
                </form>
            </Form>
        </div>
    )

}