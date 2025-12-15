export default function SchemaViewer({ data }: any) {
  if (!data.length) return null;
  return (
    <div className="panel">
      <h3>Detected Schema</h3>
      <ul>
        {Object.keys(data[0]).map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
