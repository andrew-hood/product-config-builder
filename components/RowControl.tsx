import {
  ChevronDownIcon,
  ChevronUpIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

const RowControls = ({ rows, rowIndex, setRows }: any) => {
  return (
    <div className="isolate flex flex-row justify-end text-sm font-semibold text-gray-900">
      {rowIndex > 0 ? (
        <button
          type="button"
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
          className="relative inline-flex items-center bg-white px-3 py-2 hover:bg-gray-50 focus:z-10 rounded-md"
        >
          <ChevronUpIcon className="h-4 w-4" />
        </button>
      ) : null}
      {rowIndex < rows.length - 1 && (
        <button
          type="button"
          onClick={() => {
            const index = rowIndex;
            if (index < rows.length - 1) {
              const temp = rows[index + 1];
              rows[index + 1] = Object.assign({}, rows[index]);
              rows[index] = Object.assign({}, temp);
              setRows([...rows]);
            }
          }}
          className="relative inline-flex items-center bg-white px-3 py-2 hover:bg-gray-50 focus:z-10 rounded-md"
        >
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          setRows(rows.filter((_: any, i: number) => i !== rowIndex));
        }}
        className="relative inline-flex items-center bg-white px-3 py-2 hover:bg-gray-50 focus:z-10 rounded-md"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default RowControls;
