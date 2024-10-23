import { GridColDef } from '@mui/x-data-grid';
import { Modal } from '../../components/add/Modal';

export const Login = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'email',
      type: 'string',
      headerName: 'Email',
      width: 400,
    },
    {
      field: 'password',
      type: 'string',
      headerName: 'Password',
      width: 400,
    },
  ];
  return (
    <div>
      <Modal slug="login" columns={columns} />
    </div>
  );
};
