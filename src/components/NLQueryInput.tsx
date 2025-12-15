import { generateSQL } from "../utils/nlToSqlEngine";

export default function NLQueryInput({ onGenerate }: any) {
  return (
    <div className="panel">
      <textarea id="nlq" placeholder="Ask in plain English..." />
      <button
        onClick={() =>
          onGenerate(generateSQL((document.getElementById("nlq") as HTMLTextAreaElement).value))
        }
      >
        Generate SQL
      </button>
    </div>
  );
}
