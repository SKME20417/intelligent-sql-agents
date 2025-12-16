import * as Papa from "papaparse";

export default function DataLoader({ setData }: any) {
  const loadSample = async () => {
    try {
      const response = await fetch("/data/sample_database.csv");
      const csvText = await response.text();

      const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true
      });

      setData(parsed.data as any[]);
    } catch (error) {
      alert("Failed to load sample data");
    }
  };

  const upload = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data as any[]);
      }
    });
  };

  return (
    <div className="panel">
      <h3>Data Source</h3>

      <button onClick={loadSample}>Load Sample Data</button>

      <input
        type="file"
        accept=".csv"
        onChange={upload}
        style={{ marginLeft: "10px" }}
      />

      <div style={{ marginTop: "8px" }}>
        <a href="/data/csv_template.csv" download>
          Download CSV Template
        </a>
      </div>
    </div>
  );
}
