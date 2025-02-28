export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImage: string | null;
    role: "USER" | "ADMIN"; // Add more roles if needed
    coins: number;
    isEmailVerified: boolean;
    createdAt: string; // Use Date if you want to parse it as a Date object
    updatedAt: string;
};
