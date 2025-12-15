export function validateQuery(sql: string) {
  if (/drop|delete/i.test(sql)) {
    return "Blocked destructive query";
  }
  return "";
}
