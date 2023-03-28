import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Tooltip,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { TUser } from './types'
import { DataRole } from '@/data'
import { ModalDelete, ModalEdit } from './components'

const header = ['Ações', 'Nome', 'Email', 'Permissões']

export default function ManageUser() {
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [data, setData] = useState<TUser>()

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Gerenciar Usuários
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              {header.map((item, index) => (
                <TableCell key={index}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row: TUser) => (
              <TableRow key={row.id} sx={styles.tableRow}>
                <TableCell>
                  <Tooltip title="Editar">
                    <EditIcon
                      onClick={() => {
                        setData(row)
                        setOpenEdit(true)
                      }}
                      sx={{ cursor: 'pointer', mr: 1 }}
                      color="primary"
                    />
                  </Tooltip>
                  <Tooltip title="Deletar">
                    <DeleteIcon
                      onClick={() => {
                        setData(row)
                        setOpenDelete(true)
                      }}
                      sx={{ cursor: 'pointer', ml: 1 }}
                      color="error"
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    {row.firstName} {row.lastName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    {row.role
                      .map((item, _index) => {
                        return DataRole[item].name
                      })
                      .join(', ')}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalDelete
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        data={data}
      />

      <ModalEdit
        open={openEdit}
        handleClose={() => setOpenEdit(false)}
        data={data}
      />
    </>
  )
}

const users: TUser[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    role: ['MANAGE_PLACE'],
    createdAt: '2022-02-01T10:00:00.000Z',
    updatedAt: '2022-02-01T10:00:00.000Z',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com',
    role: ['MANAGE_PLACE', 'MANAGE_USER'],
    createdAt: '2022-02-02T12:30:00.000Z',
    updatedAt: '2022-02-02T12:30:00.000Z',
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bobsmith@example.com',
    role: ['MANAGE_PLACE'],
    createdAt: '2022-02-03T14:00:00.000Z',
    updatedAt: '2022-02-03T14:00:00.000Z',
  },
]

const styles = {
  tableRow: {
    '&:last-child td, &:last-child th': { border: 0 },
  },
}
