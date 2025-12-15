export default function AuditLogPanel({ logs }: any) {
  if (!logs.length) return null;
  return (
    <div className="panel">
      <h3>Audit Log</h3>
      <ul>{logs.map((l: string, i: number) => <li key={i}>{l}</li>)}</ul>
    </div>
  );
}
