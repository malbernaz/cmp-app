import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { users } from "../mock-api/data";

const ROWS_PER_PAGE = 2;

export default function ConsentsTable() {
  const [page, setPage] = React.useState(0);

  const rows = users.slice(
    page * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE + ROWS_PER_PAGE,
  );

  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Consent given for</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.consents.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={users.length}
        rowsPerPage={ROWS_PER_PAGE}
        page={page}
        labelDisplayedRows={() =>
          `page ${page + 1} of ${Math.ceil(users.length / 2)}`
        }
        onPageChange={(_event, newPage) => setPage(newPage)}
      />
    </TableContainer>
  );
}
