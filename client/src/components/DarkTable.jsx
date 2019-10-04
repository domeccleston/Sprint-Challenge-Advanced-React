import React from 'react';
import { Table } from 'semantic-ui-react';
import '../App.scss'

const inverted = true;

const PlayersTable = ({data}) => {
    console.log(data)
    return (
        <Table className="players-table" celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell collapsing>Name</Table.HeaderCell>
                    <Table.HeaderCell collapsing>Searches</Table.HeaderCell>
                    <Table.HeaderCell collapsing>Name</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map(player => (
                    <Table.Row>
                        <Table.Cell collapsing>{player.name}</Table.Cell>
                        <Table.Cell collapsing>{player.country}</Table.Cell>
                        <Table.Cell collapsing>{player.searches}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}
 
export default PlayersTable;