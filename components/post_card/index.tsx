import Link from "next/link";
import clsx from "clsx";

export default function PostCard({
  title,
  slug,
  gradient,
  description,
}: {
  title: string;
  slug: string;
  gradient: string;
  description: string;
}) {
  const views = Math.ceil(Math.random()) * 100;
  return (
    <Link href={`/post/${slug}`}>
      <a
        className={clsx(
          "transform hover:scale-[1.01] transition-all",
          "rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1",
          gradient
        )}
      >
        <div className="  flex flex-col justify-between h-full bg-white dark:bg-gray-700 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <h3 className="text-xl font-bold mb-4 w-full dark:text-gray-100 tracking-tight">
              {title}
            </h3>
          </div>
          <p className="line-clamp-2 text-gray-600 mb-[20px]">{description}</p>
          <div className="flex-1"></div>
          <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="ml-2 align-baseline capsize">
              {views && "–––"}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}
