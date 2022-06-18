import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SalesmanDropdownlist({ddlOnchang}) {
    const [salesman, setSalesman] = React.useState('');

    const handleChange = (event) => {
        setSalesman(event.target.value); 
        ddlOnchang(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 20 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Salesman</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={salesman}
                    label="Select Salesman"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Barrett B.</MenuItem>
                    <MenuItem value={2}>Dan B.</MenuItem>
                    <MenuItem value={3}>Tom B.</MenuItem>
                    <MenuItem value={4}>Don R.</MenuItem>
                    <MenuItem value={5}>Steve B.</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}
