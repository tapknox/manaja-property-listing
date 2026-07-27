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
        backgroundColor: '#fff',
        p: { xs: 2, md: 3 },
        borderRadius: '12px',
        mb: 4,
        border: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          alignItems: { xs: 'stretch', md: 'flex-end' },
        }}
      >
        {/* Search */}
        <Box sx={{ flex: { xs: 1, md: 1.5 } }}>
          <TextField
            fullWidth
            placeholder="Search properties..."
            value={filters.search || ''}
            onChange={(e) => handleChange('search', e.target.value)}
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f8f9fa',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                '&:hover': {
                  border: '1px solid rgba(0, 102, 204, 0.2)',
                },
                '&.Mui-focused': {
                  border: '1px solid #0066CC',
                  backgroundColor: '#fff',
                },
              },
            }}
          />
        </Box>

        {/* Type */}
        <Box sx={{ flex: { xs: 1, md: 1 } }}>
          <Select
            fullWidth
            value={filters.type || 'all'}
            onChange={(e) => handleChange('type', e.target.value)}
            size="small"
            displayEmpty
            sx={{
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              '&:hover': {
                border: '1px solid rgba(0, 102, 204, 0.2)',
              },
              '&.Mui-focused': {
                border: '1px solid #0066CC',
                backgroundColor: '#fff',
              },
            }}
          >
            <MenuItem value="all">All Types</MenuItem>
            {propertyTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Beds */}
        <Box sx={{ flex: { xs: 1, md: 0.9 } }}>
          <Select
            fullWidth
            value={filters.beds || 'all'}
            onChange={(e) => handleChange('beds', e.target.value)}
            size="small"
            displayEmpty
            sx={{
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              '&:hover': {
                border: '1px solid rgba(0, 102, 204, 0.2)',
              },
              '&.Mui-focused': {
                border: '1px solid #0066CC',
                backgroundColor: '#fff',
              },
            }}
          >
            <MenuItem value="all">All Beds</MenuItem>
            <MenuItem value="1">1+</MenuItem>
            <MenuItem value="2">2+</MenuItem>
            <MenuItem value="3">3+</MenuItem>
            <MenuItem value="4">4+</MenuItem>
            <MenuItem value="5">5+</MenuItem>
          </Select>
        </Box>

        {/* Location */}
        <Box sx={{ flex: { xs: 1, md: 1 } }}>
          <Select
            fullWidth
            value={filters.location || 'all'}
            onChange={(e) => handleChange('location', e.target.value)}
            size="small"
            displayEmpty
            sx={{
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              '&:hover': {
                border: '1px solid rgba(0, 102, 204, 0.2)',
              },
              '&.Mui-focused': {
                border: '1px solid #0066CC',
                backgroundColor: '#fff',
              },
            }}
          >
            <MenuItem value="all">All Locations</MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Status */}
        <Box sx={{ flex: { xs: 1, md: 0.9 } }}>
          <Select
            fullWidth
            value={filters.status || 'all'}
            onChange={(e) => handleChange('status', e.target.value)}
            size="small"
            displayEmpty
            sx={{
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              '&:hover': {
                border: '1px solid rgba(0, 102, 204, 0.2)',
              },
              '&.Mui-focused': {
                border: '1px solid #0066CC',
                backgroundColor: '#fff',
              },
            }}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="rented">Rented</MenuItem>
            <MenuItem value="sold">Sold</MenuItem>
          </Select>
        </Box>

        {/* Reset Button */}
        <Box sx={{ flex: { xs: 1, md: 0.7 } }}>
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
            sx={{
              color: '#0066CC',
              borderColor: '#0066CC',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '8px',
              py: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#0066CC',
                color: '#fff',
                borderColor: '#0066CC',
              },
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
