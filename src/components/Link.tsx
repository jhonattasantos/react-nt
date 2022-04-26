type LinkProps = {
  label: string;
  click?: (e: any) => void;
};

export const Link: React.FC<LinkProps> = ({ label, click }) => {
  return (
    <a
      className="cursor-pointer	px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      onClick={click}
    >
      {label}
    </a>
  );
};
