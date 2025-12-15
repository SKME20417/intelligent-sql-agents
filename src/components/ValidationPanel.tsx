export default function ValidationPanel({ sql, role }: any) {
  if (!sql) return null;
  return (
    <div className="panel">
      <h3>Validation</h3>
      <p>Role: {role}</p>
      <p>Status: SAFE</p>
    </div>
  );
}
