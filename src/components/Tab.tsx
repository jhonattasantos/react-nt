type TabProps = {
  label: string;
  active?: boolean | false;
  click?: () => void;
};

export const Tab: React.FC<TabProps> = ({ label, active, click }) => {
  return (
    <>
      <li className="mr-2">
        <a
          href="#"
          onClick={click}
          className={
            active
              ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
              : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 "
          }
        >
          {label}
        </a>
      </li>
    </>
  );
};
