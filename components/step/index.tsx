import { PropsWithChildren } from "react";

function Step({
  number,
  title,
  children,
}: PropsWithChildren<{ number: string; title: string }>) {
  return (
    <div>
      <div className="step flex items-center py-1">
        <div className="flex items-center justify-center border border-gray-300 font-bold dark:border-gray-800 rounded-full h-7 w-7 text-blue-500">
          {number}
        </div>
        <h4 className="ml-2 tracking-tight">{title}</h4>
      </div>
      <div className="mx-[36px]">{children}</div>
    </div>
  );
}

export default Step;
