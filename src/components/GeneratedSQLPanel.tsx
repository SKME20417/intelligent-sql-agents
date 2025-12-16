import { useEffect, useState } from "react";

export default function GeneratedSQLPanel({ sql, onExecute }: any) {
  const [editableSQL, setEditableSQL] = useState("");

  useEffect(() => {
    setEditableSQL(sql);
  }, [sql]);

  if (!sql) return null;

  return (
    <div className="panel">
      <h3>Generated SQL (Review & Edit Before Execution)</h3>

      <textarea
        value={editableSQL}
        onChange={(e) => setEditableSQL(e.target.value)}
        style={{
          fontFamily: "monospace",
          minHeight: "140px",
          backgroundColor: "#f8fafc"
        }}
      />

      <p style={{ fontSize: "12px", color: "#6b7280" }}>
        You may edit the SQL before execution. All executions are logged.
      </p>

      <button
        onClick={() => onExecute(editableSQL)}
        style={{ marginTop: "10px" }}
      >
        Execute SQL
      </button>
    </div>
  );
}
