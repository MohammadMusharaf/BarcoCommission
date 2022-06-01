import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdownlist() {
    const [Factory, setFactory] = React.useState('');

    const handleChange = (event) => {
        setFactory(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 20 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Factory</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Factory}
                    label="Factory"
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
