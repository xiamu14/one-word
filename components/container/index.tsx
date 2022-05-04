import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";

import Footer from "../footer";
import styles from "./index.module.scss";
function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = (router.asPath = href);

  return (
    <Link href={href}>
      <a
        className={clsx(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

export default function Container(props: React.PropsWithChildren<{}>) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { children } = props;

  return (
    <div className="flex w-[100vw] h-[100vh] overflow-x-hidden overflow-y-scroll justify-center items-center">
      <div className=" flex flex-col items-center justify-between max-w-[1000px] w-[70vw] h-full margin-auto">
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
          {/* <div className="flex-1"></div> */}
          <nav className="flex items-center justify-between relative">
            <NavItem href="/" text="Home" />
            <NavItem href="/blog" text="Blog" />
            <NavItem href="/snippets" text="Snippets" />
            <NavItem href="/profile" text="Profile" />
            <NavItem href="/dashboard" text="Dashboard" />
          </nav>
          <div className="ml-4">
            <a
              className="github"
              href="https://github.com/xiamu14"
              title="github"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={20} />
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
              <FiTwitter size={20} />
            </a>
          </div>
        </div>
        <main className="flex-1 w-full p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
