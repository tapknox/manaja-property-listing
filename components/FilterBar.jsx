'use client';

import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  useMediaQuery,
} from '@mui/material';

const propertyTypes = [
  'Apartment',
  'House',
  'Townhouse',
  'Detached House',
  'Semi-Detached',
  'Penthouse',
  'Mansion',
  'Studio',
];

const locations = [
  'Lagos',
  'Victoria Island',
  'Lekki',
  'Ikoyi',
  'Yaba',
  'VI',
  'Lagos Island',
  'Banana Island',
  'Abuja',
  'Maitama',
  'Wuse II',
];

export default function FilterBar({ filters, onFilterChange }) {
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        p: 3,
        borderRadius: 2,
        mb: 4,
      }}
    >
      <Grid container spacing={2}>
        {/* Search */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            placeholder="Search properties..."
            value={filters.search || ''}
            onChange={(e) => handleChange('search', e.target.value)}
            size="small"
          />
        </Grid>

        {/* Type */}
        <Grid item xs={12} sm={6} md={2}>
          <Select
            fullWidth
            value={filters.type || 'all'}
            onChange={(e) => handleChange('type', e.target.value)}
            size="small"
            displayEmpty
          >
            <MenuItem value="all">All Types</MenuItem>
            {propertyTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        {/* Beds */}
        <Grid item xs={12} sm={6} md={2}>
          <Select
            fullWidth
            value={filters.beds || 'all'}
            onChange={(e) => handleChange('beds', e.target.value)}
            size="small"
            displayEmpty
          >
            <MenuItem value="all">All Beds</MenuItem>
            <MenuItem value="1">1+</MenuItem>
            <MenuItem value="2">2+</MenuItem>
            <MenuItem value="3">3+</MenuItem>
            <MenuItem value="4">4+</MenuItem>
            <MenuItem value="5">5+</MenuItem>
          </Select>
        </Grid>

        {/* Location */}
        <Grid item xs={12} sm={6} md={2}>
          <Select
            fullWidth
            value={filters.location || 'all'}
            onChange={(e) => handleChange('location', e.target.value)}
            size="small"
            displayEmpty
          >
            <MenuItem value="all">All Locations</MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        {/* Status */}
        <Grid item xs={12} sm={6} md={2}>
          <Select
            fullWidth
            value={filters.status || 'all'}
            onChange={(e) => handleChange('status', e.target.value)}
            size="small"
            displayEmpty
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="rented">Rented</MenuItem>
            <MenuItem value="sold">Sold</MenuItem>
          </Select>
        </Grid>

        {/* Reset Button */}
        <Grid item xs={12} sm={6} md={1}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() =>
              onFilterChange({
                search: '',
                type: 'all',
                beds: 'all',
                location: 'all',
                status: 'all',
              })
            }
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
