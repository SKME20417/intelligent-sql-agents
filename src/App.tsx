import { useState } from "react";
import Header from "./components/Header";
import RoleSelector from "./components/RoleSelector";
import DataLoader from "./components/DataLoader";
import DataPreview from "./components/DataPreview";
import SchemaViewer from "./components/SchemaViewer";
import NLQueryInput from "./components/NLQueryInput";
import GeneratedSQLPanel from "./components/GeneratedSQLPanel";
import ValidationPanel from "./components/ValidationPanel";
import QueryResultTable from "./components/QueryResultTable";
import AuditLogPanel from "./components/AuditLogPanel";
import { enforceRBAC } from "./utils/rbac";
import { validateQuery } from "./utils/queryValidator";

export default function App() {
  const [role, setRole] = useState("Analyst");
  const [data, setData] = useState<any[]>([]);
  const [sql, setSql] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [executionStatus, setExecutionStatus] = useState("");

  const executeSQL = (finalSQL: string) => {
    const rbacCheck = enforceRBAC(role, finalSQL);
    const validation = validateQuery(finalSQL);

    setLogs((prev) =>
      [
        ...prev,
        `User Role: ${role}`,
        `Executed SQL: ${finalSQL}`,
        rbacCheck,
        validation
      ].filter(Boolean)
    );

    if (rbacCheck || validation) {
      setExecutionStatus("Execution blocked due to policy violation.");
      setResults([]);
      return;
    }

    let executedResults = [...data];

    const limitMatch = finalSQL.match(/limit\s+(\d+)/i);
    if (limitMatch) {
      executedResults = executedResults.slice(0, Number(limitMatch[1]));
    } else {
      executedResults = executedResults.slice(0, 10);
    }

    setResults(executedResults);
    setExecutionStatus(
      `Query executed successfully. Rows returned: ${executedResults.length}`
    );
  };

  return (
    <>
      <Header />
      <RoleSelector role={role} setRole={setRole} />
      <DataLoader setData={setData} />

      {/* ✅ NEW DATA PREVIEW */}
      <DataPreview data={data} />

      <SchemaViewer data={data} />

      <NLQueryInput
        onGenerate={(generatedSQL: string) => {
          setSql(generatedSQL);
          setExecutionStatus("");
        }}
      />

      <GeneratedSQLPanel sql={sql} onExecute={executeSQL} />

      <ValidationPanel status={executionStatus} role={role} />

      <QueryResultTable results={results} />

      <AuditLogPanel logs={logs} />
    </>
  );
}
