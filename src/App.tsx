import { useState } from "react";
import Header from "./components/Header";
import RoleSelector from "./components/RoleSelector";
import DataLoader from "./components/DataLoader";
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

  return (
    <>
      <Header />
      <RoleSelector role={role} setRole={setRole} />
      <DataLoader setData={setData} />
      <SchemaViewer data={data} />

      <NLQueryInput
        onGenerate={(generatedSQL) => {
          const rbacCheck = enforceRBAC(role, generatedSQL);
          const validation = validateQuery(generatedSQL);

          setSql(generatedSQL);
          setLogs((l) => [...l, rbacCheck, validation].filter(Boolean) as string[]);

          if (!rbacCheck && !validation) {
            setResults(data.slice(0, 10));
          }
        }}
      />

      <GeneratedSQLPanel sql={sql} />
      <ValidationPanel sql={sql} role={role} />
      <QueryResultTable results={results} />
      <AuditLogPanel logs={logs} />
    </>
  );
}
