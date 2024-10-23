import { GridColDef } from '@mui/x-data-grid';
import './modal.scss';
import { IoClose, IoSend } from 'react-icons/io5';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.setOpen) props.setOpen(false);
  };
  return (
    <div className="add">
      <div className="modal">
        <span
          className="close"
          onClick={() => {
            if (props.setOpen) {
              props.setOpen(false);
            }
          }}
        >
          <IoClose />
        </span>
        <h1>{props.slug === 'login' ? 'Login form' : `Add new ${props.slug}`}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>
            <IoSend />
          </button>
        </form>
      </div>
    </div>
  );
};
