import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FactoryCategoryddl() {
    const [factoryCategory, setFactoryCategory] = React.useState('');

    const handleChange = (event) => {
        setFactoryCategory(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 20 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Factory Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={factoryCategory}
                    label="Select Prior Year"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>PVL Lines</MenuItem>
                    <MenuItem value={2}>Hose Lines</MenuItem>
                    <MenuItem value={3}>Steel Lines</MenuItem>
                    <MenuItem value={4}>Lines</MenuItem>


                </Select>
            </FormControl>
        </Box>
    );
}
