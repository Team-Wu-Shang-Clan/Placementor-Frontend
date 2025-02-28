"use client"

import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Clock, Code, ExternalLink, FileText, Info, PlayCircle, Trophy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ComputerNetworksPage = () => {
    return (
        <>
            {/* Main Content */}
            <div className="container mx-auto px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Title Section */}
                        <div>
                            <h1 className="text-2xl font-bold">Computer Networks Fundamentals</h1>
                            <p className="text-muted-foreground mt-1">
                                Today&apos;s focus is on understanding the fundamental concepts of computer networks, including the OSI model, TCP/IP protocol suite, and basic routing algorithms.
                            </p>
                        </div>

                        {/* Learning Objectives */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <Info className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-lg font-bold">We Will Learn</h2>
                                </div>

                                <div className="space-y-3 pl-4">
                                    {[
                                        "Understand the OSI Model's 7 layers and their functions",
                                        "Learn key differences between TCP and UDP protocols",
                                        "Understand IP addressing and subnetting concepts",
                                        "Master the concept of routing algorithms in networks",
                                        "Learn about common network security protocols"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">
                                                {index + 1}
                                            </div>
                                            <span className="text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Resources */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-lg font-bold">Resources</h2>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        {
                                            title: "Understanding TCP/IP Protocol Suite",
                                            url: "https://www.youtube.com/watch?...",
                                            icon: <PlayCircle className="w-5 h-5 text-destructive" />
                                        },
                                        {
                                            title: "OSI Model Explained",
                                            url: "https://www.youtube.com/watch?...",
                                            icon: <PlayCircle className="w-5 h-5 text-destructive" />
                                        },
                                        {
                                            title: "Network Layers Deep Dive",
                                            url: "https://blog.example.com/netwo...",
                                            icon: <FileText className="w-5 h-5 text-primary" />
                                        },
                                        {
                                            title: "LeetCode Problem: Network Delay Time",
                                            url: "https://leetcode.com/problems/...",
                                            icon: <Code className="w-5 h-5 text-secondary" />
                                        },
                                        {
                                            title: "Understanding Routing Algorithms",
                                            url: "https://blog.example.com/routi...",
                                            icon: <FileText className="w-5 h-5 text-primary" />
                                        }
                                    ].map((resource, index) => (
                                        <div key={index} className="flex items-center gap-3 border rounded-lg p-3">
                                            <div className="bg-muted p-2 rounded-full">
                                                <span className="w-5 h-5">{resource.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">{resource.title}</p>
                                                <a
                                                    href={resource.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary text-sm flex items-center gap-1"
                                                >
                                                    {resource.url.substring(0, 30)}...
                                                    <ExternalLink className="w-3 h-3" />
                                                </a>
                                            </div>
                                            <Button size="sm" variant="outline" className="flex-shrink-0">
                                                <span className="text-xs">Add</span>
                                            </Button>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4">
                                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-1">
                                        <span>Progress</span>
                                        <span>0%</span>
                                    </div>
                                    <Progress value={0} className="h-2" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Practice */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="bg-secondary/20 p-2 rounded-full">
                                        <Code className="w-5 h-5 text-secondary" />
                                    </div>
                                    <h2 className="text-lg font-bold">Practice</h2>
                                </div>

                                <div className="space-y-6">
                                    {/* Quiz */}
                                    <div className="border rounded-lg">
                                        <div className="p-4 flex justify-between items-center">
                                            <div>
                                                <h3 className="font-medium">Computer Networks Basics Quiz</h3>
                                                <p className="text-muted-foreground text-sm">Completed in 8 minutes</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Quiz</span>
                                                <div className="flex items-center text-success">
                                                    <CheckCircle className="w-4 h-4 mr-1" />
                                                    <span className="text-sm">Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4">
                                            <Button variant="link" className="text-primary pl-0">
                                                View results <ArrowRight className="w-3 h-3 ml-1" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Mock Interview */}
                                    <div className="border rounded-lg">
                                        <div className="p-4 flex justify-between items-center">
                                            <div>
                                                <h3 className="font-medium">Network Protocols Mock Interview</h3>
                                                <p className="text-muted-foreground text-sm">Completed in 15 minutes</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded">Mock Interview</span>
                                                <div className="flex items-center text-success">
                                                    <CheckCircle className="w-4 h-4 mr-1" />
                                                    <span className="text-sm">Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4">
                                            <Button variant="link" className="text-primary pl-0">
                                                View results <ArrowRight className="w-3 h-3 ml-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quiz Results */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <Trophy className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-lg font-bold">Quiz Results</h2>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="relative">
                                            <svg className="w-24 h-24">
                                                <circle
                                                    cx="48"
                                                    cy="48"
                                                    r="36"
                                                    fill="none"
                                                    stroke="hsl(var(--muted))"
                                                    strokeWidth="8"
                                                />
                                                <circle
                                                    cx="48"
                                                    cy="48"
                                                    r="36"
                                                    fill="none"
                                                    stroke="hsl(var(--primary))"
                                                    strokeWidth="8"
                                                    strokeDasharray="226.2"
                                                    strokeDashoffset="45.2"
                                                    transform="rotate(-90 48 48)"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                                                8/10
                                            </div>
                                        </div>
                                        <span className="text-muted-foreground text-sm mt-2">Score</span>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <div className="bg-muted p-4 rounded-full">
                                            <Clock className="w-8 h-8 text-foreground" />
                                        </div>
                                        <span className="font-medium mt-2">8 minutes</span>
                                        <span className="text-muted-foreground text-sm">Time spent</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-success/10 p-4 rounded-lg">
                                        <h3 className="text-sm font-medium text-success mb-3">Strong Areas</h3>
                                        <ul className="space-y-2">
                                            {["OSI Model", "TCP/IP", "Routing"].map((item, index) => (
                                                <li key={index} className="flex items-center gap-2 text-success-foreground">
                                                    <CheckCircle className="w-4 h-4" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-warning/10 p-4 rounded-lg">
                                        <h3 className="text-sm font-medium text-warning mb-3">Areas to Improve</h3>
                                        <ul className="space-y-2">
                                            {["Network Security", "Subnetting"].map((item, index) => (
                                                <li key={index} className="flex items-center gap-2 text-warning-foreground">
                                                    <span className="w-1 h-1 bg-warning rounded-full"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Mock Interview Results */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="bg-secondary/10 p-2 rounded-full">
                                        <Info className="w-5 h-5 text-secondary" />
                                    </div>
                                    <h2 className="text-lg font-bold">Mock Interview Results</h2>
                                </div>

                                <div className="grid grid-cols-4 gap-3 mb-6">
                                    {[
                                        { label: "Overall Score", score: "7.5/10", variant: "secondary" },
                                        { label: "Technical", score: "8/10", variant: "primary" },
                                        { label: "Communication", score: "7/10", variant: "accent" },
                                        { label: "Problem Solving", score: "7.5/10", variant: "destructive" }
                                    ].map((item, index) => (
                                        <div key={index} className={`bg-${item.variant}/10 text-${item.variant} rounded-lg p-3 text-center`}>
                                            <div className="text-lg font-bold">{item.score}</div>
                                            <div className="text-xs">{item.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-success/10 p-4 rounded-lg">
                                        <h3 className="text-sm font-medium text-success mb-3">Strengths</h3>
                                        <ul className="space-y-2">
                                            {[
                                                "Explaining TCP/IP concepts",
                                                "Understanding of routing algorithms"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-center gap-2 text-success-foreground">
                                                    <CheckCircle className="w-4 h-4" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-warning/10 p-4 rounded-lg">
                                        <h3 className="text-sm font-medium text-warning mb-3">Areas to Improve</h3>
                                        <ul className="space-y-2">
                                            {[
                                                "Deeper knowledge of network security protocols",
                                                "More precise terminology"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-center gap-2 text-warning-foreground">
                                                    <span className="w-1 h-1 bg-warning rounded-full"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Day Progress */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-bold">Day Progress</h2>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Resources</span>
                                        <span>0%</span>
                                    </div>
                                    <Progress value={0} className="h-2 mb-4" />
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Practice</span>
                                        <span>100%</span>
                                    </div>
                                    <Progress value={100} className="h-2 mb-4 bg-muted">
                                        <div className="h-full bg-secondary rounded-full" />
                                    </Progress>
                                </div>

                                <div className="flex items-center gap-2 justify-center mt-6 text-warning">
                                    <Trophy className="w-5 h-5" />
                                    <span className="font-medium">30 coins</span>
                                    <span className="text-sm text-muted-foreground">earned today</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Day Navigation */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-bold">Day Navigation</h2>
                            </CardHeader>
                            <CardContent className="pt-0 space-y-3">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start gap-2"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Previous: Data Structures
                                </Button>

                                <Button
                                    className="w-full justify-between"
                                    variant="default"
                                >
                                    Next Day: Operating Systems
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Help Section */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-bold">Need Help?</h2>
                            </CardHeader>
                            <CardContent className="pt-0 space-y-3">
                                <Button
                                    className="w-full"
                                    variant="secondary"
                                >
                                    Ask AI Assistant
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full"
                                >
                                    Community Forum
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComputerNetworksPage;