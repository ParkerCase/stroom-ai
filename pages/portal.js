import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import Head from "next/head";

export default function Portal() {
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        router.push("/dashboard");
      } else {
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      router.push("/auth/login");
    }
  };

  return (
    <>
      <Head>
        <title>StroomAI Portal - Loading...</title>
        <meta name="description" content="StroomAI Referral Dashboard" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portal...</p>
        </div>
      </div>
    </>
  );
}
