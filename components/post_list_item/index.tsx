import Link from "next/link";
import { AiOutlineRead } from "react-icons/ai";
export default function PostListItem({
  href,
  length,
  title,
  index,
}: {
  href: string;
  length: string;
  title: string;
  index: string;
}) {
  return (
    <Link href={href}>
      <a className="w-full" aria-label={title} rel="noopener noreferrer">
        <div className="w-full border-b border-gray-200 dark:border-gray-700 py-4 transform hover:scale-[1.01] transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-baseline">
            <div className="flex items-center">
              <div className="text-gray-300 dark:text-gray-400 text-left mr-6">
                {index}
              </div>
              <h4 className="text-lg font-medium w-full text-gray-800 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <div className="flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between">
              <p className="text-gray-500 dark:text-gray-400 text-left sm:text-right w-32 md:mb-0 mr-2 ml-10 sm:ml-0">
                {length}
              </p>
              <AiOutlineRead size={18} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
