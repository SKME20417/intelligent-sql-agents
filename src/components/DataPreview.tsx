export default function DataPreview({ data }: any) {
  if (!data || data.length === 0) return null;

  const previewData = data.slice(0, 10);

  return (
    <div className="panel">
      <h3>Data Loaded Successfully</h3>

      <p style={{ marginBottom: "10px", color: "#065f46", fontWeight: 600 }}>
        Dataset loaded successfully. Showing preview of first 10 records.
      </p>

      <p style={{ fontSize: "13px", marginBottom: "12px" }}>
        <strong>Total Records Available:</strong> {data.length}
      </p>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              {Object.keys(previewData[0]).map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {previewData.map((row: any, idx: number) => (
              <tr key={idx}>
                {Object.values(row).map((val: any, i: number) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
