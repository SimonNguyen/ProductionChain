import React from 'react';
import {
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from '@material-ui/core';
import DataTableRow from './DataTableRow';
import { TierNames } from '../../data/data';

function DataTableContainer(props) {
  return (
    <Paper variant="outlined" my={2}>
      <TableContainer>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {props.headers.map((header) => (
                <TableCell key={header.field}>{header.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.recipes.map((recipe) => (
              <DataTableRow
                recipe={recipe}
                tierNames={TierNames}
                key={recipe.step}
                onChangeOC={props.onChangeOC}
                onChangeTier={props.onChangeTier}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default DataTableContainer;
