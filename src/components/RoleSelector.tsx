export default function RoleSelector({ role, setRole }: any) {
  return (
    <div className="panel">
      <label>User Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Analyst</option>
        <option>Manager</option>
        <option>Admin</option>
      </select>
    </div>
  );
}
