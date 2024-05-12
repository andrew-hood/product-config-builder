import { PlusIcon } from "@heroicons/react/20/solid";

export default function Divider({
  onClick,
  label,
}: {
  onClick?: () => void;
  label?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="isolate inline-flex -space-x-px rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            onClick={onClick}
          >
            <PlusIcon className="h-5 w-5" />
            {!!label && <span className="ml-1">{label}</span>}
          </button>
        </span>
      </div>
    </div>
  );
}
