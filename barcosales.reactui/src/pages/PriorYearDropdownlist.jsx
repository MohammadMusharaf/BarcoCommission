import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PriorYearDropdownlist() {
    const [priorYear, setPriorYear] = React.useState('');

    const handleChange = (event) => {
        setPriorYear(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 20 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Prior Year</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priorYear}
                    label="Select Prior Year"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>2020</MenuItem>
                    <MenuItem value={2}>2021</MenuItem>
                    <MenuItem value={3}>2022</MenuItem>
                    <MenuItem value={4}>2023</MenuItem>
                    <MenuItem value={5}>2024</MenuItem>
                    <MenuItem value={6}>2025</MenuItem>
                    <MenuItem value={7}>2026</MenuItem>
                    <MenuItem value={8}>2027</MenuItem>
                    <MenuItem value={9}>2028</MenuItem>
                    <MenuItem value={10}>2029</MenuItem>
                    <MenuItem value={11}>2030</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}
