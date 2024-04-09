import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Header } from "../../components";
import { orders} from "../data";
import "./index.css";

const Orders = (props) => {
  const [action,setAction] = useState("Assign");
  // theme
  const theme = useTheme();
  // get data
  // const { data, isLoading } = useGetCustomersQuery();
  //delete
  const handleDelete = (id) => {
    //delete the item
    // mutation.mutate(id)
  };
  const assignRider = {
    field: "assign",
    headerName: "AssignRider",
    width: 150,
    renderCell: (params) => {
      return(
        <div className="assign">
          <button id="assign" 
          onClick={()=> {action==="Assign"?setAction("unAssign"):setAction("Assign");
          handleAssign(params.row.id)}}>
          {action}
          </button>
        </div>
      );
    },
  };
 //assignRider
  // const handleAssign = (id) => {
  //   const assign = document.getElementById("assign");
  //   {action ==="Assign"?"unAssign":"Assign"}
  // };

  // data columns
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "img",
      headerName: "Item",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/1.jpg"} alt="1.jpg" />;
      },
    },
    {
      field: "customerName",
      headerName: "Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 150,
    },
    {
      field: "customerAddress",
      headerName: "CustomerAddress",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
    },
    {
      field: "riderName",
      headerName: "RiderName",
      width: 100,
    },
    {
      field: "delivered",
      headerName: "Delivered",
      type: "boolean",
      editable: true,
      width: 150,
    },
  ];
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/orders/${params.row.id}`}>
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
      <Header title="ORDERS" subtitle="List of Orders" />

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
          slug="orders"
          rows={orders}
          columns={[...columns, assignRider, actionColumn]}
        />
      </Box>
    </Box>
  );
};

export default Orders;
