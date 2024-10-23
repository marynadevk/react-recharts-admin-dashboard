import { useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import './Users.scss';
import { userRowsData } from '../../data';
import { Modal } from '../../components/add/Modal';
import { DataTable } from '../../components/dataTable/DataTable';
import { RxAvatar } from 'react-icons/rx';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || <RxAvatar />} alt="" />;
    },
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: 'boolean',
  },
];

export const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button className="buttonAdd" onClick={() => setOpen(true)}>
          Add New User
        </button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRowsData} />
      {open && <Modal slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};
