'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export function NeedHelp({aiAssistantLink = "/ai-assistant"}, communityForum = "/community-forum") {
    const router = useRouter();
  
    return (
      <Card className="w-full max-w-lg p-4 mt-6">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button onClick={() => router.push(aiAssistantLink)} className="bg-purple-500">Ask AI Assistant</Button>
          <Button onClick={() => router.push(communityForum)}>Community Forum</Button>
        </CardContent>
      </Card>
    );
}