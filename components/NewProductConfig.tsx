"use client";

import { useState } from "react";
import Divider from "./Divider";
import RowControls from "./RowControl";
import Rules from "./Rules";
import Actions from "./Actions";

export default function NewProductConfig() {
  const [configs, setConfigs] = useState<any>([]);

  const handleAddConfig = () => {
    setConfigs([...configs, {}]);
  };

  return (
    <div className="w-full grid grid-cols-2 gap-x-6">
      <div>
        {configs.map((config: any, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white shadow mb-6"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-row justify-between items-center mb-5">
                <span className="text-lg font-medium leading-6 text-gray-900 inline-flex">
                  Rule Set #{index + 1}
                </span>
                <RowControls
                  rows={configs}
                  rowIndex={index}
                  setRows={setConfigs}
                />
              </div>
              <Rules
                data={config.conditions}
                onChange={(conditions: any) => {
                  configs[index].conditions = conditions;
                  setConfigs([...configs]);
                }}
              />
              <Actions
                data={config.actions}
                onChange={(actions: any) => {
                  configs[index].actions = actions;
                  setConfigs([...configs]);
                }}
              />
            </div>
          </div>
        ))}
        <Divider label="OR" onClick={handleAddConfig} />
      </div>

      <div className="bg-slate-200 p-2 rounded-md h-full">
        <pre>{JSON.stringify(configs, null, 2)}</pre>
      </div>
    </div>
  );
}
