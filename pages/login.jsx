import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient.js";


const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/homepage");
    }
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Login to Inventory Management App</title>
        <meta name="description" content="Login to your account." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">


              <div className="text-sm">
                <Link
                  href="/forgot_password"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>


              <Link
                href="/signup"
                className="text-center font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up instead
              </Link>
            </form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
