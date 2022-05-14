function Step({ number, title }: { number: string; title: string }) {
  return (
    <div className="step flex items-center py-1">
      <div className="flex items-center justify-center border border-gray-200 pt-1 font-bold dark:border-gray-800 rounded-full h-7 w-7 text-blue-500">
        {number}
      </div>
      <h4 className="ml-2 tracking-tight">{title}</h4>
    </div>
  );
}

export default Step;
