import React from "react";

import Head from 'next/head';
import Link from 'next/link';

const HomePage = () => {
    return (<div className="bg-gray-100 min-h-screen">
        <Head>
            <title>Inventory Management App</title>
            <meta name="description" content="A modern inventory management app."/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Inventory Management App</h1>
            <p className="mt-4 text-lg text-gray-500">Keep track of your inventory with ease.</p>
<p className = "mt-4 text-lg text-gray-500"> Sell to your local community</p>

            <div className="mt-8">
                <Link href="/login">
                    <p className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                        Sign in to your account
                    </p>
                </Link>
            </div>
        </div>
    </div>);
};

export default HomePage;


