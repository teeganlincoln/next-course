"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";

import logo from "@/public/images/logo.jpg";
// import dynamic from "next/dynamic";

// import _ from "lodash";

import { useState } from "react";

export default function Home() {
    const [isVisible, setVisible] = useState(false);
    return (
        <main>
            <h1>Hello</h1>
            {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}

            <button
                onClick={async () => {
                    const _ = (await import("lodash")).default;
                    const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
                    const sorted = _.orderBy(users, ["name"]);

                    console.log(sorted);
                }}
            >
                Show
            </button>

            <Link href="/users">Users</Link>
            <ProductCard />

            <Image src={logo} alt="Logo" />

            <div className="relative h-screen">
                <Image
                    src="https://bit.ly/react-cover"
                    className="object-cover"
                    fill
                    alt="Logo"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    quality={75}
                    priority
                />
            </div>
        </main>
    );
}

// export async function generateMetadata(): Promise<Metadata> {
//     const product = await fetch("/");
//     return {
//         title: product.title,
//         description: "...",
//     };
// }
