import React, { useEffect, useState } from "react";
import DataTable from "../common/dataTable/DataTable";
import axios from "axios";
import flat from "flat";
import { height } from "@mui/system";
import { TablePagination } from "@mui/material";
const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "username", headerName: "userName", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "address.street", headerName: "Street", width: 150 },
  { field: "address.suite", headerName: "Suite", width: 150 },
  { field: "address.city", headerName: "City", width: 150 },
  { field: "address.zipcode", headerName: "Zipcode", width: 150 },
  { field: "address.geo.lat", headerName: "Lat", width: 150 },
  { field: "address.geo.lng", headerName: "Lng", width: 150 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "website", headerName: "Website", width: 150 },
  { field: "company.name", headerName: "company Name", width: 150 },
  { field: "company.catchPhrase", headerName: "CatchPhrase", width: 150 },
  { field: "company.bs", headerName: "Bs", width: 150 },
];

const UserTable = ({ onError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data.map((item) => flat(item)));
      } catch (err) {
        onError();
      }
    })();
  }, []);

  const columnGroupingModel = [
    {
      groupId: "Address",
      headerAlign: "center",
      children: [
        { field: "address.street" },
        { field: "address.suite" },
        { field: "address.city" },
        { field: "address.zipcode" },
        {
          groupId: "Coordinate",
          headerAlign: "center",

          children: [
            { field: "address.geo.lat" },
            { field: "address.geo.lng" },
          ],
        },
      ],
    },

    {
      groupId: "Company",
      headerAlign: "center",

      children: [
        { field: "company.name" },
        { field: "company.catchPhrase" },
        { field: "company.bs" },
      ],
    },
  ];

  return (
    <DataTable
      rows={users}
      columns={columns}
      columnGroupingModel={columnGroupingModel}
      loading={users.length === 0}
      sx={{
        height: "500px",
      }}
    />
  );
};

export default UserTable;
