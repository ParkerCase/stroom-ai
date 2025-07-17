import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabase";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ReferralDashboard from "../../components/dashboard/ReferralDashboard";
import Analytics from "../../components/dashboard/Analytics";
import CommissionManager from "../../components/dashboard/CommissionManager";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  useEffect(() => {
    checkUser();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session?.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        router.push("/auth/login");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUser = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      } else {
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Error checking user:", error);
      router.push("/auth/login");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const isStroomTeam = user.email?.endsWith("@stroomai.com");

  return (
    <DashboardLayout
      user={user}
      onSignOut={handleSignOut}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      isStroomTeam={isStroomTeam}
    >
      {activeTab === "overview" && (
        <ReferralDashboard user={user} isStroomTeam={isStroomTeam} />
      )}
      {activeTab === "analytics" && (
        <Analytics user={user} isStroomTeam={isStroomTeam} />
      )}
      {activeTab === "commissions" && (
        <CommissionManager user={user} isStroomTeam={isStroomTeam} />
      )}
    </DashboardLayout>
  );
}
