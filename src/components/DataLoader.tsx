import Papa from "papaparse";

export default function DataLoader({ setData }: any) {
  const loadSample = async () => {
    const res = await fetch("/src/data/sample_database.csv");
    const text = await res.text();
    const parsed = Papa.parse(text, { header: true });
    setData(parsed.data);
  };

  const upload = (e: any) => {
    Papa.parse(e.target.files[0], {
      header: true,
      complete: (r) => setData(r.data)
    });
  };

  return (
    <div className="panel">
      <button onClick={loadSample}>Load Sample Data</button>
      <input type="file" accept=".csv" onChange={upload} />
      <a href="/src/data/csv_template.csv" download>Download CSV Template</a>
    </div>
  );
}
