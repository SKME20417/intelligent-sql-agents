import { generateSQL } from "../utils/nlToSqlEngine";

export default function NLQueryInput({ onGenerate }: any) {
  return (
    <div className="panel">
      <h3>Ask Your Question (Plain English)</h3>
      <textarea
        id="nlq"
        placeholder="Example: Show top 10 employees from Finance department with highest performance score"
      />
      <button
        onClick={() =>
          onGenerate(
            generateSQL(
              (document.getElementById("nlq") as HTMLTextAreaElement).value
            )
          )
        }
      >
        Generate SQL Query
      </button>
    </div>
  );
}
