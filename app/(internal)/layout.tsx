
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/internal/app-sidebar";
import { AppHeader } from "@/components/layouts/internal/header/index";
import { BodyContainer } from "@/components/layouts/internal/body-container";
import { AuthWrapper } from "@/components/layouts/internal/AuthWrapper";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthWrapper>
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full h-full bg-background">
                    <AppHeader />
                    <BodyContainer>
                        {children}
                    </BodyContainer>
                </main>
            </SidebarProvider>
        </AuthWrapper>
    );
}
