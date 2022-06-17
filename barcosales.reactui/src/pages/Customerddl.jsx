import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Customerddl() {
    const [customer, setCustomer] = React.useState('');

    const handleChange = (event) => {
        setCustomer(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 20 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Customer</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={customer}
                    label="Select Prior Year"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>PEERLESS SUPPLY INC</MenuItem>
                    <MenuItem value={2}>Midland Metal KANSAS CITY MO</MenuItem>
                    <MenuItem value={3}>LESSIN SUPPLY</MenuItem>
                    <MenuItem value={4}>KAMAN INDUSTRIAL TECHNOLOGIES</MenuItem>
                    <MenuItem value={5}>IBT MISC KS</MenuItem>
                    <MenuItem value={6}>IBT MISC KS</MenuItem>



                </Select>
            </FormControl>
        </Box>
    );
}
