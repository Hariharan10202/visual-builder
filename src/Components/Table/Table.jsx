import React, { useEffect, useRef, useState } from "react";
import { tableData } from "../../tableData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";

// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { Button } from "primereact/button";
// import { BsFillTrash3Fill } from "react-icons/bs";
// import { AiFillPlusCircle } from "react-icons/ai";
// import { Dialog } from "primereact/dialog";

import { Toolbar } from "primereact/toolbar";

import "./table.css";
import TableStyleModal from "../TableStyleModal/TableStyleModal";

import { motion, AnimatePresence } from "framer-motion";

const Table = ({ setIsTemplateEditable, isTemplateEditable }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [visible, setVisible] = useState(false);

  const chargesTableRef = useRef(null);

  useEffect(() => {
    setProducts(tableData);
    setVisibleRows(tableData);
  }, []);

  const [visibleRows, setVisibleRows] = useState([]);

  const subHeaderTemplate = (data) => {
    return (
      <div
        style={{
          width: "100%",
          fontWeight: 600,
          fontSize: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{data.legName}</span>
        <span>{data.amount_in_preferred_currency}</span>
      </div>
    );
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

  const handleTable = (e) => {
    console.log(e.target);
  };

  const columns = [
    { field: "charges", header: "Charges" },
    { field: "basic", header: "Basic" },
    { field: "quantity", header: "Quantity" },
    { field: "amount", header: "Amount" },
    {
      field: "amount_in_preferred_currency",
      header: "Amount in Preferred Currency",
    },
  ];

  const [visibleColumns, setVisibleColumns] = useState(columns);

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );
    setVisibleColumns(orderedSelectedColumns);
  };

  const deleteChargeHandler = (e) => {
    let selectedColumns = e.value;
    let orderedSelectedColumns = products.filter((col) =>
      selectedColumns.some((sCol) => sCol.legName === col.legName)
    );
    setVisibleRows(orderedSelectedColumns);
  };

  const leftToolbarTemplate = () => {
    return (
      <div style={{ display: "flex", gap: "15px" }}>
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <span style={{ fontSize: "16px", fontWeight: "600" }}>
            Showed Rows
          </span>
          <MultiSelect
            value={visibleRows}
            onChange={deleteChargeHandler}
            options={products}
            optionLabel="legName"
            display="chip"
            placeholder="Hidden Legs"
            maxSelectedLabels={3}
            className="w-full md:w-20rem"
          />
        </div>
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <span style={{ fontSize: "16px", fontWeight: "600" }}>
            Showed Columns
          </span>
          <MultiSelect
            value={visibleColumns}
            options={columns}
            optionLabel="header"
            onChange={onColumnToggle}
            className="w-full sm:w-20rem"
            display="chip"
          />
        </div>
      </div>
    );
  };

  const tableCustomizationHanlder = () => {
    console.log(chargesTableRef.current);
  };

  return (
    <div style={{ width: "100%", padding: "20px 0" }}>
      <TableStyleModal visible={visible} setVisible={setVisible} />
      {isTemplateEditable && (
        <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>
      )}
      <DataTable
        ref={chargesTableRef}
        value={visibleRows}
        tableClassName="table-background"
        stripedRows
        showGridlines
        rowGroupMode="subheader"
        groupRowsBy="legName"
        rowGroupHeaderTemplate={subHeaderTemplate}
        footer={footerTemplate}
        reorderableColumns
        reorderableRows
        onRowReorder={(e) => setVisibleRows(e.value)}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        onClick={tableCustomizationHanlder}
      >
        <Column
          rowReorder={isTemplateEditable}
          style={{ display: isTemplateEditable ? "block" : "none" }}
        />
        {visibleColumns.map((col) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
};

export default Table;
