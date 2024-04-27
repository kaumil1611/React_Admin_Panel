import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
// import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

import { IconTrash } from '@tabler/icons-react';
import { IconPencil } from '@tabler/icons-react';
// ===============================|| SHADOW BOX ||=============================== //

// const columns = [
//   { field: 'id', headerName: 'ID', minWidth: 300 },
//   { field: 'firstName', headerName: 'First name', width: 200 },
//   { field: 'lastName', headerName: 'Last name', width: 200 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 100,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     minWidth: 300,
//     headerAlign: 'right',
//     align: 'right',
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
// ];
const columns = [
  { field: 'id', headerName: 'ID', headerAlign: "center", align: 'center', minWidth: 50 },
  {
    field: 'avtar', headerName: 'Avtar', width: 150, headerAlign: "center", align: 'center', renderCell: (params) => <div style={{ padding: 1 }}>
      <img
        alt={params.row.avatar}
        src={params.row.avatar}
        width={60}
        height={60}
        style={{ borderRadius: '50%', objectFit: 'cover', margin: 'auto' }}
      />
    </div>,
  },
  { field: 'fullName', headerAlign: "center", align: 'center', headerName: 'Full name', width: 200, valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`, },
  { field: 'displayName', headerAlign: "center", align: 'center', headerName: 'Display Name', width: 200 },
  { field: 'countryOfCitizenship', headerAlign: "center", align: 'center', headerName: 'Country of Citizenship', width: 200 },
  { field: 'phoneNumber', headerAlign: "center", align: 'center', headerName: 'Phone Number', width: 200 },
  {
    field: 'actions', headerAlign: "center", align: 'center', headerName: 'Actions', width: 300, renderCell: (row) => <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'flex-end', paddingTop: 7 }}>
      <span
        onClick={() => console.log(row.id + ' edit')}
        tabIndex={0}
        role="button"
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            console.log(row.id + 'onKeyDown edit');
          }
        }}
      >
        <IconPencil color='blue' />
      </span>
      <span
        onClick={() => console.log(row.id + ' trash')}
        tabIndex={0}
        role="button"
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            console.log(row.id + 'onKeyDown trash');
          }
        }}
      >
        <IconTrash color='red' />
      </span>
    </div>
  },
];

const rows = [
  {
    id: "1",
    avatar: "https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg",
    firstName: "John",
    lastName: "Doe",
    displayName: "JD",
    countryOfCitizenship: "USA",
    phoneNumber: "123-456-7890"
  },
  {
    id: "2",
    avatar: "https://t3.ftcdn.net/jpg/06/56/82/38/360_F_656823821_5ljvVcIotsWiK5l7Aet3MYLyIPmGfB1T.jpg",
    firstName: "Alice",
    lastName: "Smith",
    displayName: "AS",
    countryOfCitizenship: "Canada",
    phoneNumber: "234-567-8901"
  },
  {
    id: "3",
    avatar: "https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg",
    firstName: "Bob",
    lastName: "Johnson",
    displayName: "BJ",
    countryOfCitizenship: "UK",
    phoneNumber: "345-678-9012"
  },
  {
    id: "4",
    avatar: "https://t3.ftcdn.net/jpg/06/56/82/38/360_F_656823821_5ljvVcIotsWiK5l7Aet3MYLyIPmGfB1T.jpg",
    firstName: "Emily",
    lastName: "Brown",
    displayName: "EB",
    countryOfCitizenship: "Australia",
    phoneNumber: "456-789-0123"
  },
  {
    id: "5",
    avatar: "https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg",
    firstName: "Michael",
    lastName: "Wilson",
    displayName: "MW",
    countryOfCitizenship: "Germany",
    phoneNumber: "567-890-1234"
  },
  {
    id: "6",
    avatar: "https://t3.ftcdn.net/jpg/06/56/82/38/360_F_656823821_5ljvVcIotsWiK5l7Aet3MYLyIPmGfB1T.jpg",
    firstName: "Emma",
    lastName: "Martinez",
    displayName: "EM",
    countryOfCitizenship: "Spain",
    phoneNumber: "678-901-2345"
  },
  {
    id: "7",
    avatar: "https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg",
    firstName: "David",
    lastName: "Garcia",
    displayName: "DG",
    countryOfCitizenship: "France",
    phoneNumber: "789-012-3456"
  },
  {
    id: "8",
    avatar: "https://t3.ftcdn.net/jpg/06/56/82/38/360_F_656823821_5ljvVcIotsWiK5l7Aet3MYLyIPmGfB1T.jpg",
    firstName: "Sophia",
    lastName: "Rodriguez",
    displayName: "SR",
    countryOfCitizenship: "Brazil",
    phoneNumber: "890-123-4567"
  },
  {
    id: "9",
    avatar: "https://t3.ftcdn.net/jpg/03/79/17/00/360_F_379170051_7No0Yg8z2uxbyby4Y0WFDNCBZo18tNGr.jpg",
    firstName: "James",
    lastName: "Lopez",
    displayName: "JL",
    countryOfCitizenship: "Mexico",
    phoneNumber: "901-234-5678"
  },
  {
    id: "10",
    avatar: "https://t3.ftcdn.net/jpg/06/56/82/38/360_F_656823821_5ljvVcIotsWiK5l7Aet3MYLyIPmGfB1T.jpg",
    firstName: "Olivia",
    lastName: "Gonzalez",
    displayName: "OG",
    countryOfCitizenship: "Argentina",
    phoneNumber: "012-345-6789"
  }
];

const ShadowBox = ({ shadow }) => (
  <Card sx={{ mb: 3, boxShadow: shadow }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4.5,
        bgcolor: 'primary.light',
        color: 'grey.800'
      }}
    >
      <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
    </Box>
  </Card>
);

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired
};

const ViewUser = () => {
  return (
    <MainCard title="View Users" >
      {/* <MainCard title="View Users" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}> */}
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard title="User table">
            <DataGrid
              density='comfortable'
              rows={rows}
              columns={columns}
              autoHeight={true}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />

          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  )
}

export default ViewUser
