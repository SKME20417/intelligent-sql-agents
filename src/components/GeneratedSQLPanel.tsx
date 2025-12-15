export default function GeneratedSQLPanel({ sql }: any) {
  if (!sql) return null;
  return (
    <div className="panel">
      <h3>Generated SQL</h3>
      <pre>{sql}</pre>
    </div>
  );
}
