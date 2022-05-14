import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";

import Footer from "../footer";
import styles from "./index.module.scss";
function NavItem({
  href,
  text,
  isActive,
}: {
  href: string;
  text: string;
  isActive: boolean;
}) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          isActive
            ? "font-extrabold text-gray-700 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

export default function Container(
  props: React.PropsWithChildren<{ title?: string }>
) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const router = useRouter();

  const { children } = props;

  return (
    <div className="flex w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll justify-center items-center">
      <Head>
        <title>{props.title ?? "言之有物"}</title>
      </Head>
      <div className=" flex flex-col items-center justify-between w-4xl h-full margin-auto">
        <div
          className={`flex w-full justify-start items-center px-4 sticky  ${styles["nav-box"]}`}
        >
          <div className="mr-4">
            <Image
              src="/images/feather-pen-log.png"
              alt="logo"
              width={32}
              height={32}
            />
          </div>
          <nav className="flex items-center justify-between relative">
            <NavItem
              href="/"
              text="言之有物"
              isActive={router.pathname === "/"}
            />
            <NavItem
              href="/posts"
              text="博客"
              isActive={router.pathname.includes("/post")}
            />
            <NavItem
              href="/snippets"
              text="片段"
              isActive={router.pathname === "/snippets"}
            />
            {/* <NavItem href="/profile" text="我的" /> */}
            <NavItem
              href="/dashboard"
              text="仪表盘"
              isActive={router.pathname === "/dashboard"}
            />
          </nav>
          <div className="ml-4">
            <a
              className="github"
              href="https://github.com/xiamu14"
              title="github"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={20} />
            </a>
          </div>
          <div className="ml-4">
            <a
              className="twitter"
              href="https://twitter.com/BenjarminX"
              title="@BenjarminX"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size={20} />
            </a>
          </div>
        </div>
        <main className="flex-1 w-full p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
