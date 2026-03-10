"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserData {
  name?: string;
  email?: string;
  
  [key: string]: any; // Allows additional user properties
}

interface UserContextType {
  user: UserData | null;
  loading: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const fetchUser = async () => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/login");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/`, {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (response.status === 401) {
        const newToken = await refreshAccessToken();
        if (newToken) return fetchUser();
        router.push("/login");
        return;
      }

      if (!response.ok) throw new Error("Failed to fetch user data");

      const data: UserData = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  };

  const refreshAccessToken = async (): Promise<string | null> => {
    try {
      const refreshToken = sessionStorage.getItem("refreshToken");
      if (!refreshToken) {
        router.push("/login");
        return null;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account/login/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!response.ok) throw new Error("Failed to refresh token");

      const data = await response.json();
      sessionStorage.setItem("accessToken", data.access);
      return data.access;
    } catch (error) {
      console.error("Error refreshing token:", error);
      router.push("/login");
      return null;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
        <div className="w-10 h-10 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
