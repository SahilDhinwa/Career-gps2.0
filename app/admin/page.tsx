"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../lib/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { ShieldAlert, Users, Database, Activity, LogOut, ChevronRight, Terminal, Crown, Shield, User as UserIcon, Eye, Globe2, Clock } from "lucide-react";

type AdminTab = "analytics" | "users" | "cms";

export default function AdminCommandCenter() {
  const { user, userData, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("users");
  const [mounted, setMounted] = useState(false);
  
  // User Protocols State
  const [dbUsers, setDbUsers] = useState<any[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  // Analytics Node State
  const [analyticsStats, setAnalyticsStats] = useState({ totalViews: 0, uniqueIPs: 0, recent: [] as any[] });
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // MASTER ADMIN CHECK
  const isMasterAdmin = user?.email === "sahilkumardhinwa82@gmail.com";
  const hasAdminClearance = userData?.role === "admin" || isMasterAdmin;

  // 🔒 VAULT DOOR: Kick out anyone who isn't an admin or the founder
  useEffect(() => {
    if (!isLoading && mounted) {
      if (!user || !hasAdminClearance) {
        router.push("/"); 
      }
    }
  }, [user, hasAdminClearance, isLoading, mounted, router]);

  // Fetch Users (Tab 1)
  useEffect(() => {
    if (activeTab === "users" && hasAdminClearance) {
      const fetchUsers = async () => {
        setLoadingUsers(true);
        try {
          const querySnapshot = await getDocs(collection(db, "users"));
          const usersData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setDbUsers(usersData);
        } catch (error) {
          console.error("Error fetching users:", error);
        } finally {
          setLoadingUsers(false);
        }
      };
      fetchUsers();
    }
  }, [activeTab, hasAdminClearance]);

  // Fetch Analytics (Tab 2)
  useEffect(() => {
    if (activeTab === "analytics" && hasAdminClearance) {
      const fetchAnalytics = async () => {
        setLoadingAnalytics(true);
        try {
          const querySnapshot = await getDocs(collection(db, "visitors"));
          let total = 0;
          const ipSet = new Set();
          const logs: any[] = [];

          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const visits = data.visits || 1;
            total += visits;
            
            if (data.ip) ipSet.add(data.ip);
            
            logs.push({
              id: doc.id,
              name: data.name || "Unknown Page",
              ip: data.ip || "Unknown IP",
              visits: visits,
              time: data.visitedAt?.toDate() || new Date()
            });
          });

          logs.sort((a, b) => b.time.getTime() - a.time.getTime());

          setAnalyticsStats({
            totalViews: total,
            uniqueIPs: ipSet.size,
            recent: logs
          });
        } catch (error) {
          console.error("Error fetching analytics:", error);
        } finally {
          setLoadingAnalytics(false);
        }
      };
      fetchAnalytics();
    }
  }, [activeTab, hasAdminClearance]);

  // Grant or Revoke Premium
  const togglePremium = async (userId: string, currentStatus: boolean) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { isPremium: !currentStatus });
      setDbUsers(prev => prev.map(u => u.id === userId ? { ...u, isPremium: !currentStatus } : u));
    } catch (error) {
      console.error("Error updating premium status:", error);
      alert("System Error: Could not update user status.");
    }
  };

  if (isLoading || !mounted || !hasAdminClearance) {
    return (
      <div className="min-h-screen bg-[#020101] flex flex-col justify-center items-center">
        <ShieldAlert className="w-12 h-12 text-red-600 animate-pulse mb-4" />
        <p className="text-red-500 font-mono text-sm tracking-widest uppercase">Verifying Clearance...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020101] text-gray-300 font-sans flex overflow-hidden selection:bg-red-500/30">
      
      {/* BACKGROUND GRID & GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#1a0505 1px, transparent 1px), linear-gradient(90deg, #1a0505 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* LEFT SIDEBAR */}
      <aside className="w-72 bg-[#050101] border-r border-red-900/30 flex flex-col relative z-10 shadow-[4px_0_24px_rgba(0,0,0,0.8)]">
        <div className="p-6 border-b border-red-900/30">
          <div className="flex items-center gap-3 text-red-500 mb-1">
            <Terminal className="w-6 h-6" />
            <h1 className="font-bold text-xl tracking-wider uppercase">Batcomputer</h1>
          </div>
          <p className="text-xs text-red-900/80 font-mono tracking-widest ml-9">Root Access Granted</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab("users")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-medium transition-all duration-300 ${activeTab === "users" ? 'bg-red-950/40 text-red-500 border border-red-900/50 shadow-[inset_0_0_12px_rgba(255,0,0,0.1)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
          >
            <Users className="w-5 h-5" /> User Protocols
            {activeTab === "users" && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>

          <button 
            onClick={() => setActiveTab("analytics")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-medium transition-all duration-300 ${activeTab === "analytics" ? 'bg-red-950/40 text-red-500 border border-red-900/50 shadow-[inset_0_0_12px_rgba(255,0,0,0.1)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
          >
            <Activity className="w-5 h-5" /> Analytics Node
            {activeTab === "analytics" && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>

          <button 
            onClick={() => setActiveTab("cms")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm font-medium transition-all duration-300 ${activeTab === "cms" ? 'bg-red-950/40 text-red-500 border border-red-900/50 shadow-[inset_0_0_12px_rgba(255,0,0,0.1)]' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
          >
            <Database className="w-5 h-5" /> Mainframe CMS
            {activeTab === "cms" && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>
        </nav>

        <div className="p-4 border-t border-red-900/30">
          <button 
            onClick={() => router.push("/")}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-400 hover:bg-red-950/30 rounded-sm font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" /> Exit Terminal
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 relative z-10 h-screen overflow-y-auto custom-scrollbar">
        <div className="p-8 md:p-12 max-w-7xl mx-auto">
          
          <header className="mb-10 pb-6 border-b border-red-900/20">
            <h2 className="text-3xl font-bold text-white capitalize tracking-wide flex items-center gap-3">
              {activeTab === "users" && <><Users className="text-red-500 w-8 h-8" /> User Protocols</>}
              {activeTab === "analytics" && <><Activity className="text-red-500 w-8 h-8" /> System Analytics</>}
              {activeTab === "cms" && <><Database className="text-red-500 w-8 h-8" /> Content Mainframe</>}
            </h2>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* ========================================== */}
            {/* 1. USER PROTOCOLS TAB                      */}
            {/* ========================================== */}
            {activeTab === "users" && (
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white">Registered Operatives</h3>
                    <p className="text-sm text-gray-500 font-mono mt-1">Total count: {dbUsers.length}</p>
                  </div>
                  <button onClick={() => window.location.reload()} className="text-xs font-mono text-red-500 hover:text-white transition-colors border border-red-900/50 bg-red-950/30 px-3 py-1.5 rounded-sm">
                    [ REFRESH DATABASE ]
                  </button>
                </div>

                {loadingUsers ? (
                  <div className="border border-red-900/30 bg-[#050101] p-12 flex justify-center items-center rounded-sm">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
                  </div>
                ) : (
                  <div className="overflow-x-auto border border-red-900/30 rounded-sm bg-[#050101] shadow-xl">
                    <table className="w-full text-left text-sm text-gray-400">
                      <thead className="text-xs uppercase bg-red-950/20 text-red-500 border-b border-red-900/30">
                        <tr>
                          <th className="px-6 py-4 font-mono tracking-wider">Operative ID</th>
                          <th className="px-6 py-4 font-mono tracking-wider">Identity</th>
                          <th className="px-6 py-4 font-mono tracking-wider">Clearance</th>
                          <th className="px-6 py-4 font-mono tracking-wider">Status</th>
                          <th className="px-6 py-4 font-mono tracking-wider text-right">Overrides</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-red-900/20">
                        {dbUsers.map((u) => (
                          <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                            <td className="px-6 py-4 font-mono text-xs text-gray-500">{u.id.substring(0, 8)}...</td>
                            <td className="px-6 py-4">
                              <div className="font-bold text-white flex items-center gap-2">
                                {u.photoURL ? (
                                  /* eslint-disable-next-line @next/next/no-img-element */
                                  <img src={u.photoURL} alt="Avatar" className="w-6 h-6 rounded-full border border-red-900/50" />
                                ) : (
                                  <UserIcon className="w-5 h-5 text-gray-600" />
                                )}
                                {u.displayName || "Unknown Identity"}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">{u.email || "No email on record"}</div>
                            </td>
                            <td className="px-6 py-4">
                              {u.role === "admin" || u.email === "sahilkumardhinwa82@gmail.com" ? (
                                <span className="inline-flex items-center gap-1 text-red-500 text-xs font-bold font-mono bg-red-500/10 px-2 py-1 rounded-sm border border-red-500/20">
                                  <Shield className="w-3 h-3" /> ROOT
                                </span>
                              ) : (
                                <span className="text-gray-500 text-xs font-mono">STANDARD</span>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              {u.isPremium ? (
                                <span className="inline-flex items-center gap-1 text-amber-500 text-xs font-bold uppercase tracking-wider">
                                  <Crown className="w-3.5 h-3.5" /> Premium
                                </span>
                              ) : (
                                <span className="text-gray-600 text-xs font-bold uppercase tracking-wider">Free Tier</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-right">
                              {u.email !== "sahilkumardhinwa82@gmail.com" && (
                                <button 
                                  onClick={() => togglePremium(u.id, !!u.isPremium)}
                                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm transition-all border ${
                                    u.isPremium 
                                      ? 'bg-black text-gray-500 border-gray-800 hover:text-red-400 hover:border-red-900' 
                                      : 'bg-amber-500/10 text-amber-500 border-amber-500/30 hover:bg-amber-500 hover:text-black'
                                  }`}
                                >
                                  {u.isPremium ? 'Revoke Premium' : 'Grant Premium'}
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* ========================================== */}
            {/* 2. ANALYTICS NODE TAB                      */}
            {/* ========================================== */}
            {activeTab === "analytics" && (
              <div className="space-y-8">
                
                {loadingAnalytics ? (
                  <div className="border border-red-900/30 bg-[#050101] p-12 flex justify-center items-center rounded-sm">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#050101] border border-red-900/30 p-6 rounded-sm shadow-xl relative overflow-hidden group hover:border-red-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-red-500 group-hover:scale-110 transition-transform"><Eye className="w-24 h-24" /></div>
                        <h4 className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-2 relative z-10">Total Page Views</h4>
                        <div className="text-5xl font-bold text-white relative z-10">{analyticsStats.totalViews}</div>
                        <div className="mt-4 text-xs text-red-500 font-mono relative z-10 flex items-center gap-2">
                          <Activity className="w-3 h-3" /> Live Telemetry Active
                        </div>
                      </div>

                      <div className="bg-[#050101] border border-red-900/30 p-6 rounded-sm shadow-xl relative overflow-hidden group hover:border-red-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-red-500 group-hover:scale-110 transition-transform"><Globe2 className="w-24 h-24" /></div>
                        <h4 className="text-gray-500 font-mono text-sm tracking-widest uppercase mb-2 relative z-10">Unique Visitors (IPs)</h4>
                        <div className="text-5xl font-bold text-white relative z-10">{analyticsStats.uniqueIPs}</div>
                        <div className="mt-4 text-xs text-gray-500 font-mono relative z-10 flex items-center gap-2">
                          <Shield className="w-3 h-3" /> Encrypted Fingerprints
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-red-500" /> Incoming Traffic Logs
                      </h3>
                      <div className="overflow-x-auto border border-red-900/30 rounded-sm bg-[#050101] shadow-xl max-h-[500px] overflow-y-auto custom-scrollbar">
                        <table className="w-full text-left text-sm text-gray-400">
                          <thead className="text-xs uppercase bg-red-950/20 text-red-500 border-b border-red-900/30 sticky top-0 backdrop-blur-md">
                            <tr>
                              <th className="px-6 py-4 font-mono tracking-wider">Timestamp</th>
                              <th className="px-6 py-4 font-mono tracking-wider">Target Node (Page)</th>
                              <th className="px-6 py-4 font-mono tracking-wider">Origin IP</th>
                              <th className="px-6 py-4 font-mono tracking-wider text-right">Visits</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-red-900/20">
                            {analyticsStats.recent.map((log, i) => (
                              <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-gray-500 whitespace-nowrap">
                                  {log.time.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 font-bold text-white">{log.name}</td>
                                <td className="px-6 py-4 font-mono text-xs text-red-400">{log.ip}</td>
                                <td className="px-6 py-4 font-mono text-right text-gray-300">{log.visits}</td>
                              </tr>
                            ))}
                            {analyticsStats.recent.length === 0 && (
                              <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-600 font-mono text-xs">
                                  [ NO TRAFFIC DETECTED ]
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ========================================== */}
            {/* 3. CMS TAB (Placeholder for Phase 3)       */}
            {/* ========================================== */}
            {activeTab === "cms" && (
              <div className="text-gray-500 border border-red-900/20 bg-black/50 p-10 rounded-sm text-center font-mono">
                [ INIT: CONTENT INJECTION SYSTEM ]
                <br/><br/>(Next phase: MCQ & PDF Upload Forms)
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
