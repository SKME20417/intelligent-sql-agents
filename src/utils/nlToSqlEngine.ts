export function generateSQL(nl: string) {
  return `SELECT * FROM database WHERE description LIKE '%${nl}%' LIMIT 10;`;
}
