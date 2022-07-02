import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FactoriesDropdownlist({ ddlOnchang }) {

    const [Factory, setFactory] = React.useState('');

    const handleChange = (event) => {
        setFactory(event.target.value);
        console.log(event.target.value);
        ddlOnchang(event.target.value);

    };
    debugger;
    console.log(Factory);
    return (
        <Box sx={{ minWidth: 20 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Factory / Princ Code</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Factory}
                    label="Select Factory / Princ Code"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Alpha Fittings</MenuItem>
                    <MenuItem value={2}>Kentak</MenuItem>
                    <MenuItem value={3}>U S Hose</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
