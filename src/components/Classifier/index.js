import React, { useState } from "react";
import Table from "../Table";

import { dataColumn, dataRow } from "../../mock";

const Classifier = () => {
  const [tableData, setTableData] = useState(dataRow);
  const [columns, setColumns] = useState(dataColumn);

  return (
    <>
      <Table columns={columns} tableData={dataRow} />
    </>
  );
};

export default Classifier;
