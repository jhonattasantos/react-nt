type TabsProps = {
  children: any;
};

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <div
      className="mb-4 whitespace-nowrap 
    overflow-x-auto overflow-y-hidden no-scrollbar
    border-b border-gray-200"
    >
      <ul className="flex -mb-px text-sm font-medium text-center">
        {children}
      </ul>
    </div>
  );
};
