import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { supabase }  from "../lib/supabaseClient.js";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

//   useEffect(() => {
//     checkUser();
//   }, []);

//     async function checkUser() {
//         const { user } = await supabase.auth.getUser();
//         console.log('The user is', user);
//     if (user) {
//       setUser(user);
//       setLoading(false);
//     } else {
//       window.location.href = "/login";
//     }
//   }

//   if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="flex flex-row">
        <div className="bg-gray-800 text-white h-screen w-60 py-8 px-4">
          <div className="flex flex-row items-center space-x-2 px-2">
            <div className="text-2xl font-medium">Logo</div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center space-x-2 px-2">
              <div className="text-lg font-medium">Overview</div>
            </div>
            <div className="mt-2">
              <div className="text-sm font-medium">Total Sales</div>
              <div className="text-2xl font-semibold">N200,000</div>
            </div>
            <div className="mt-2">
              <div className="text-sm font-medium">Total Orders</div>
              <div className="text-2xl font-semibold">1,000</div>
            </div>
            <div className="mt-2">
              <div className="text-sm font-medium">New Customers</div>
              <div className="text-2xl font-semibold">100</div>
            </div>
            <div className="mt-2">
              <div className="text-sm font-medium">Returns</div>
              <div className="text-2xl font-semibold">10</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 h-screen w-full p-8">
          <div className="text-2xl font-medium">Welcome</div>
        </div>
      </div>
    </div>
  );
}
