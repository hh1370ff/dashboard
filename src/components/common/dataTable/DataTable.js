import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import BasicCard from "../basicCard/BasicCard";

const DataTable = ({ rows, columns, sx, columnGroupingModel, loading }) => {
  const [pageSize, setPageSize] = React.useState(3);

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        loading={loading}
        sx={sx}
        columnGroupingModel={columnGroupingModel}
        experimentalFeatures={{ columnGrouping: true }}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[3, 5, 10]}
        pageSize={pageSize}
        pagination
      />
    </div>
  );
};

export default DataTable;
