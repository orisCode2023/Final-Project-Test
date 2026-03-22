function Table({ dataTable }) {
  if (!dataTable || dataTable.length === 0) {
    return <p>No data</p>
  }
  const dbHeaders = Object.keys(dataTable[0]);
  const headers = dbHeaders.filter(head => head !== '__v' && head !== 'id');
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((data, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header} >{data[header]}</td>
                // <td key={header} onClick={handleClick} >{data[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
