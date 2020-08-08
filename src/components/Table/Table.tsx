import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface SimpleTableProps {
  /**Headers for the table. */
  headers: [];
  /*Data. */
  data: [{}];
  className?: string;
}

const SimpleTable: React.FC<SimpleTableProps> = ({
  headers,
  data,
  className,
}) => {
  const classes = useStyles();
  const keys = Object.keys(data && data[0]);

  return (
    <TableContainer className={className}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead component="thead">
          <TableRow>
            {headers.map((header: string, index: number) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any, index: number) => (
            <TableRow key={index}>
              {keys.map((item: string, index: number) => (
                <TableCell key={index}>{row[item]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
