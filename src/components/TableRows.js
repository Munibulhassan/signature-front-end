function TableRows({ rowsData, deleteTableRows, handleChange }) {
  return rowsData.map((data, index) => {
    const { sno, item, unit, price, total } = data;
    return (
      <tr key={index}>
        <td className="invoicetd">{sno}</td>
        <td className="invoicetd">
          <input
            type="text"
            placeholder="Item"
            value={item}
            onChange={(evnt) => handleChange(index, evnt)}
            name="item"
            className="form-control"
          />
        </td>
        <td className="invoicetd">
          <input
            type="Number"
            value={unit}
            placeholder="0"

            onChange={(evnt) => handleChange(index, evnt)}
            name="unit"
            className="form-control"
          />{" "}
        </td>
        <td className="invoicetd">
          <input
            type="Number"
            value={price}
            placeholder="0"

            onChange={(evnt) => handleChange(index, evnt)}
            name="price"
            className="form-control"
          />{" "}
        </td>
        <td className="invoicetd">
          <input
            type="Number"
            placeholder="0"

            value={unit * price}
            onChange={(evnt) => handleChange(index, evnt)}
            name="total"
            className="form-control"
          />{" "}
        </td>

        <td className="invoicetd">

        
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteTableRows(index)}
          >
            x
          </button>
        </td>
      </tr>
    );
  });
}

export default TableRows;
