type TabPanelProps = {
  slug: string;
  value: string;
  children: any;
};

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  slug,
  value,
}) => {
  return (
    <div className={`${slug === value ? "" : "hidden"} p-4 rounded-lg `}>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};
