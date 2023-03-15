import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import { Tab, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const getAllItems = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/items/");
    console.log(data.item);
    setItems(data.item);
  };
  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <Container>
      <Typography variant="h2" m="2rem" sx={{ textAlign: "center" }}>
        Inventory Details
      </Typography>{" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SL No</TableCell>
              <TableCell align="center">ITEM ID</TableCell>
              <TableCell align="center">ITEM NAME</TableCell>
              <TableCell align="center">DESCRIPTION</TableCell>
              <TableCell align="center">PRICE</TableCell>
              <TableCell align="center">ITEM QTY</TableCell>
              {/* <TableCell align="center">OPERATION 2</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {items.map((item) => console.log("each item", item.item_name))} */}
            {items.map((item, id) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {" "}
                {console.log("each item", item)}
                <TableCell component="th" scope="row">
                  {id + 1}
                </TableCell>
                <TableCell align="center">{item.item_id}</TableCell>
                <TableCell align="center">{item.item_name}</TableCell>
                <TableCell align="center">{item.item_description}</TableCell>
                <TableCell align="center">{item.item_price}</TableCell>
                <TableCell align="center">{item.item_qty}</TableCell>
                {/* <TableCell align="center">
                  <button onClick={() => handleDelete(book.isbn)}>
                    Delete
                  </button>
                </TableCell>
                <TableCell align="center">
                  <Link to={`update/${book.isbn}`}>Edit</Link>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
