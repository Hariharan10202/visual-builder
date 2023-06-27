import React from "react";
import { tableData } from "../../tableData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./table.css";

const Table = () => {
  const subHeaderTemplate = (data) => {
    return (
      <span style={{ fontWeight: 600, fontSize: "16px" }}>{data.legName}</span>
    );
  };

  const footerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    textAlign: "right",
  };

  const footerTemplate = () => {
    return (
      <React.Fragment>
        <div className="table-footer">
          <span>View exchange rates</span>
          <span>Total SGD 0.13</span>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <DataTable
        value={tableData}
        stripedRows
        tableStyle={{ width: "100%" }}
        rowGroupMode="subheader"
        groupRowsBy="legName"
        rowGroupHeaderTemplate={subHeaderTemplate}
        footer={footerTemplate}
      >
        <Column field="charges" header="Charges"></Column>
        <Column field="basic" header="Basic"></Column>
        <Column field="unitprice" header="Unit Price"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="amount" header="Amount"></Column>
        <Column
          className="table-amount-in-preferred-currency"
          field="amount_in_preferred_currency"
          header="Amount in Preferred Currency"
        ></Column>
      </DataTable>
    </div>
  );
};

export default Table;
