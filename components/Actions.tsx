import { useEffect, useState } from "react";
import Divider from "./Divider";
import RowControls from "./RowControl";

const Actions = ({ onChange, data }: any) => {
  const [actions, setActions] = useState<any>(data || []);

  const handleAddAction = () => {
    setActions([...actions, {}]);
  };

  useEffect(() => {
    onChange(actions);
  }, [actions]);

  const Action = ({
    action,
    actionIndex,
  }: {
    action: any;
    actionIndex: number;
  }) => {
    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7 mb-3">
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Type
          </label>
          <select
            className="mt-1 block w-full px-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={action.type}
            onChange={(e) => {
              action.type = e.target.value;
            }}
          >
            <option disabled selected>
              {" "}
              -- select an option --{" "}
            </option>
            <option value="subscribe_recipient_group">
              Subscribe to recipient groups
            </option>
            <option value="add_to_collection">Add to library</option>
            <option value="enable_portal_config">Enable portal config</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Data
          </label>
          <div className="mt-1">
            <input
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={action.value}
              onChange={(e) => {
                action.value = e.target.value;
              }}
            />
          </div>
        </div>

        <div className="sm:col-span-2 pt-7">
          <RowControls
            rows={actions}
            rowIndex={actionIndex}
            setRows={setActions}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3>THEN...</h3>
      {actions.map((action: any, index: number) => (
        <Action action={action} actionIndex={index} key={index} />
      ))}
      <Divider label="AND" onClick={handleAddAction} />
    </div>
  );
};

export default Actions;
