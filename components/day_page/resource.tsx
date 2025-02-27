'use client';

import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import axios from "axios";

const baseUrl = "YOUR_API_ENDPOINT";

type ResourceType = {
  link: string;
  title: string;
};

type ResourceDataType = {
  resources: ResourceType[];
  progress: number;
};

export function Resource() {
  const [resources, setResources] = useState<ResourceType[]>([]);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    async function fetchResources() {
      try {
        const response = await axios.get<ResourceDataType>(baseUrl);
        const data = response.data;

        setResources(data.resources || []);
        setProgress(data.progress || 0);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    }

    fetchResources();
  }, []);

  return (
    <Card className="w-full max-w-lg p-4 mt-6">
      <CardHeader className="flex items-center gap-2">
        <BookOpen className="text-blue-500" />
        <CardTitle>Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <div key={resource.link}>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {resource.title}
              </a>
            </div>
          ))
        ) : (
          <p>Loading resources...</p>
        )}

        <div className="mt-4">
          <p className="text-sm font-medium mb-2">
            Resources Progress: {progress}%
          </p>
          <Progress value={progress} className="h-3" />
        </div>
      </CardContent>
    </Card>
  );
}
