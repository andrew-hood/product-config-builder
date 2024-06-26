import { useEffect, useState } from "react";
import RowControls from "./RowControl";
import Divider from "./Divider";

const PROPERTIES = [
  "portal.data.user_plan.license",
  "portal.configuration.locale",
  "portal.title",
  "portal.data_residency_region",
];

const OPERATORS = { in: "IN", eq: "=", gt: ">", lt: "<" };

const Rules = ({ onChange, data }: any) => {
  const [rules, setRules] = useState<any>(data || []);

  const handleAddRule = () => {
    setRules([...rules, {}]);
  };

  useEffect(() => onChange(rules), [rules]);

  const Rule = ({ rule, ruleIndex }: { rule: any; ruleIndex: number }) => {
    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7 mb-3 items-center">
        <div className="sm:col-span-2">
          <select
            className="mt-1 block w-full px-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={rule.property}
            onChange={(e) => {
              rule.property = e.target.value;
              setRules([...rules]);
            }}
          >
            <option disabled selected>
              {" "}
              -- select --{" "}
            </option>
            {PROPERTIES.map((property) => (
              <option key={property} value={property}>
                {property}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-1">
          <select
            className="mt-1 block w-full px-2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={rule.operator}
            onChange={(e) => {
              rule.operator = e.target.value;
              setRules([...rules]);
            }}
          >
            <option disabled selected>
              --
            </option>
            {Object.keys(OPERATORS).map((op: string) => (
              <option key={op} value={op}>
                {(OPERATORS as any)[op]}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <div className="mt-1">
            <input
              placeholder="Value"
              className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={rule.value}
              onChange={(e) => {
                rule.value = e.target.value;
              }}
              onBlur={() => {
                setRules([...rules]);
              }}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <RowControls rows={rules} rowIndex={ruleIndex} setRows={setRules} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3>WHEN...</h3>
      {rules.map((rule: any, index: number) => (
        <Rule rule={rule} ruleIndex={index} key={index} />
      ))}
      <Divider label="AND" onClick={handleAddRule} />
    </div>
  );
};

export default Rules;
