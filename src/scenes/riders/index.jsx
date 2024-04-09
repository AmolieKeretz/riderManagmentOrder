import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Header } from "../../components";
import { riders } from "../data";
import { Link } from "react-router-dom";

const Riders = () => {
  // theme
  const theme = useTheme();
  // get data
//   const { data, isLoading } = useGetCustomersQuery();

  // data columns
  const columns = [
    {
      field: "id",
      headerName: "RiderID",
      width: 100,
    },
    {
      field: "img",
      headerName: "Photo",
      width: 150,
      renderCell: (params) => {
        return <img src={params.row.img || "/1.jpg"} alt="1.jpg" />;
      },
    },
    {
      field: "riderName",
      headerName: "Rider Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 150,
    },
    {
        field: "status",
        headerName: "Status",
        type: "boolean",
        editable: true,
        width: 200,
      },
  ];
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/riders/${params.row.id}`}>
          <img src="/view.svg" alt=""/>
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="RIDERS" subtitle="List of Riders" />

      {/* Content */}
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButtom-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        {/* Grid table */}
        <DataGrid
          slug="riders"
          rows={riders}
          columns={[...columns, actionColumn]}
        />
      </Box>
    </Box>
  );
};

export default Riders;
