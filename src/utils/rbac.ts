export function enforceRBAC(role: string, sql: string) {
  if (role !== "Admin" && /salary/i.test(sql)) {
    return "RBAC violation: Access denied";
  }
  return "";
}
