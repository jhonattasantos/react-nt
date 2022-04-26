type CardProps = {
  title: string;
  description: string;
  children?: any;
};

export const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div>
      <a
        href="#"
        className="my-5 flex flex-col bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </a>
      <div>{children}</div>
    </div>
  );
};
