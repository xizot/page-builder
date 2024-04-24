export type OptionType = {
  value: string;
  label: string;
};
type SelectProps = {
  label?: string;
  options: OptionType[];
  initialValue?: string;
  onSelected?: (value: string) => void;
};

const Select = ({ label, initialValue, options, onSelected }: SelectProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <select
        id="countries"
        onChange={(e) => onSelected && onSelected(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={initialValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
