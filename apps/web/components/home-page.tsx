"use client";

import Link from "next/link";
import TopBar from "./TopBar";
import { useAuthContext } from "../contexts/AuthContext";
import { getAppName } from "@/lib/app-config";

export default function HomePage() {
  const { user, isAuthenticated } = useAuthContext();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBar />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          {getAppName()}
        </h1>
        <p className="mt-2 text-gray-600 text-center max-w-md">
          {isAuthenticated
            ? `You are signed in as ${user?.email ?? ""}.`
            : "Sign in to use the app."}
        </p>
        {!isAuthenticated && (
          <Link
            href="/login"
            className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Sign in
          </Link>
        )}
      </main>
    </div>
  );
}
