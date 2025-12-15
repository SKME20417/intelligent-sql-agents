export default function QueryResultTable({ results }: any) {
  if (!results.length) return null;
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(results[0]).map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((r: any, i: number) => (
          <tr key={i}>
            {Object.values(r).map((v: any, j: number) => (
              <td key={j}>{v}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
