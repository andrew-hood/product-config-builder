import {
  ChevronDownIcon,
  ChevronUpIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";

const RowControls = ({ rows, rowIndex, setRows }: any) => {
  return (
    <div className="isolate flex flex-row justify-end">
      <button
        type="button"
        disabled={rowIndex === 0}
        onClick={() => {
          const index = rowIndex;
          if (index > 0) {
            const temp = rows[index - 1];
            rows[index - 1] = rows[index];
            rows[index] = temp;
            console.log(rows, rowIndex, rows[rowIndex]);
            setRows([...rows]);
          }
        }}
        className={clsx(
          rowIndex === 0 ? "bg-gray-100 hover:bg-gray-100" : "",
          "relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        )}
      >
        <ChevronUpIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        disabled={rowIndex === rows.length - 1}
        onClick={() => {
          const index = rowIndex;
          if (index < rows.length - 1) {
            const temp = rows[index + 1];
            rows[index + 1] = Object.assign({}, rows[index]);
            rows[index] = Object.assign({}, temp);
            setRows([...rows]);
          }
        }}
        className={clsx(
          rowIndex === rows.length - 1 ? "bg-gray-100 hover:bg-gray-100" : "",
          "relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        )}
      >
        <ChevronDownIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => {
          setRows(rows.filter((_: any, i: number) => i !== rowIndex));
        }}
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default RowControls;
