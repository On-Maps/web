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
import ImageIcon from '@mui/icons-material/Image'
import { ModalDelete, ModalEdit } from './components'
import { TPlace } from './types'
import { ModalImage } from './components/ModalImage.component'

const header = ['Ações', 'Lugar', 'Campus', 'Bloco', 'Imagem']

export default function ManagePlace() {
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [openImage, setOpenImage] = useState(false)
  const [data, setData] = useState<TPlace>()

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Gerenciar Lugares
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
            {users.map((place: TPlace) => (
              <TableRow key={place.id} sx={styles.tableRow}>
                <TableCell>
                  <Tooltip title="Editar">
                    <EditIcon
                      onClick={() => {
                        setData(place)
                        setOpenEdit(true)
                      }}
                      sx={{ cursor: 'pointer', mr: 1 }}
                      color="primary"
                    />
                  </Tooltip>
                  <Tooltip title="Deletar">
                    <DeleteIcon
                      onClick={() => {
                        setData(place)
                        setOpenDelete(true)
                      }}
                      sx={{ cursor: 'pointer', ml: 1 }}
                      color="error"
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{place.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{place.campus}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{place.building}</Typography>
                </TableCell>
                <TableCell>
                  <Tooltip title="Ver Imagem">
                    <ImageIcon
                      onClick={() => {
                        setData(place)
                        setOpenImage(true)
                      }}
                      sx={{ cursor: 'pointer', mr: 1 }}
                      color="primary"
                    />
                  </Tooltip>
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

      <ModalImage
        open={openImage}
        handleClose={() => setOpenImage(false)}
        data={data}
      />
    </>
  )
}

const users: TPlace[] = [
  {
    id: 1,
    name: 'Laboratório 1',
    campus: 'bandeirantes',
    category: 'Salas',
    capacity: 130,
    building: 'CCT',
    equipments: ['Livros'],
    floor: '1',
    accessibility: false,
    open24h: true,
    position: '',
    area: false,
    url: '/assets/logo2Equipe.png',
    description: 'Descricao do Lugar',
    role: ['MANAGE_PLACE'],
    createdAt: '2022-02-02T12:30:00.000Z',
    updatedAt: '2022-02-02T12:30:00.000Z',
  },
  {
    id: 2,
    name: 'Laboratório 2',
    campus: 'bandeirantes',
    category: 'Salas',
    capacity: 130,
    building: 'CCT',
    equipments: ['Livros'],
    floor: '1',
    accessibility: false,
    open24h: true,
    position: '',
    area: false,
    url: '/assets/logo2Equipe.png',
    description: 'Descricao do Lugar',
    role: ['MANAGE_PLACE'],
    createdAt: '2022-02-02T12:30:00.000Z',
    updatedAt: '2022-02-02T12:30:00.000Z',
  },
]

const styles = {
  tableRow: {
    '&:last-child td, &:last-child th': { border: 0 },
  },
}
