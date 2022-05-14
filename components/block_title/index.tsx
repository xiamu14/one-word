function BlockTitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <h3 className="font-bold text-1xl md:text-3xl tracking-tight mb-6 dark:text-white">
      {children}
    </h3>
  );
}

export default BlockTitle;
