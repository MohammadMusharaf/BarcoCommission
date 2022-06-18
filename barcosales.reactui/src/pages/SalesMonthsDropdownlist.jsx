import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SalesMonthsDropdownlist({ ddlOnchang }) {
    const [salesMonths, setSalesMonths] = React.useState('');

    const handleChange = (event) => {
        setSalesMonths(event.target.value);
        ddlOnchang(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 20 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Sales Months </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={salesMonths}
                    label="Select Month"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Jan</MenuItem>
                    <MenuItem value={2}>Feb</MenuItem>
                    <MenuItem value={3}>March</MenuItem>
                    <MenuItem value={4}>Apr</MenuItem>
                    <MenuItem value={5}>May</MenuItem>
                    <MenuItem value={6}>Jun</MenuItem>
                    <MenuItem value={7}>Jul</MenuItem>
                    <MenuItem value={8}>Aug</MenuItem>
                    <MenuItem value={9}>Sep</MenuItem>
                    <MenuItem value={10}>Oct</MenuItem>
                    <MenuItem value={11}>Nov</MenuItem>
                    <MenuItem value={12}>Dec</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
