export default function ValidationPanel({ status, role }: any) {
  if (!status) return null;

  return (
    <div className="panel">
      <h3>Execution Status</h3>
      <p>
        <strong>User Role:</strong> {role}
      </p>
      <p
        style={{
          color: status.includes("successfully") ? "#16a34a" : "#dc2626",
          fontWeight: 600
        }}
      >
        {status}
      </p>
    </div>
  );
}
