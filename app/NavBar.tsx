"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
    const { status, data: session } = useSession();

    return (
        <>
            <nav className="mb-5 bg-slate-100 p-5">
                <h2 className="sr-only">Main Menu</h2>
                <ul className="flex gap-5">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/users">Users</Link>
                    </li>
                    {status === "loading" && <span className="loading loading-spinner loading-md"></span>}
                    {status === "authenticated" && (
                        <li>
                            {session.user!.name}

                            <Link href="/api/auth/signout" className="ml-3">
                                Sign out
                            </Link>
                        </li>
                    )}
                    {status === "unauthenticated" && (
                        <li>
                            <Link href="/api/auth/signin">Sign in</Link>
                        </li>
                    )}
                    {status === "unauthenticated" && (
                        <li>
                            <Link href="/register">Sign Up</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
