type ButtonProps = {
  label: string;
  value?: string | number;
  click?: (e: any) => void;
};

export const Button: React.FC<ButtonProps> = ({ label, value, click }) => {
  return (
    <button
      className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
      value={value}
      onClick={click}
    >
      {label}
    </button>
  );
};
