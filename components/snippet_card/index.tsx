import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  slug: string;
  logo: string;
}

function SnippetCard({ title, description, slug, logo }: Props) {
  return (
    <Link href={`/snippet/${slug}`}>
      <a className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full min-h-[150px] bg-white dark:bg-gray-900">
        <Image
          alt={title}
          height={32}
          width={32}
          src={`/logos/${logo}`}
          className="rounded-sm"
        />
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
      </a>
    </Link>
  );
}

export default SnippetCard;
