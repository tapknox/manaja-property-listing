'use client';

import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
} from '@mui/material';
import PropertyCard from '@/components/PropertyCard';
import FilterBar from '@/components/FilterBar';
import { properties, filterProperties } from '@/lib/mock-data';

const ITEMS_PER_PAGE = 9;

export default function HomePage() {
  const [filters, setFilters] = useState({
    search: '',
    state: 'all',
    type: 'all',
    beds: 'all',
    location: 'all',
    status: 'all',
  });
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    const filtered = filterProperties(filters);
    setFilteredProperties(filtered);
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [filters]);

  const visibleProperties = filteredProperties.slice(0, displayedCount);
  const hasMore = displayedCount < filteredProperties.length;

  const handleLoadMore = () => {
    setDisplayedCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0066CC 0%, #004499 100%)',
          color: '#fff',
          py: 8,
          mb: 6,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2 }}>
            Find Your Perfect Home
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, fontWeight: 400 }}>
            Discover premium properties across Lagos and Abuja. Expertly
            curated, intelligently matched.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ width: '100%', px: { xs: 1, sm: 2, md: 3 }, pb: 8 }}>
        {/* Filters */}
        <FilterBar filters={filters} onFilterChange={setFilters} />

        {/* Results Count */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Showing{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#0066CC' }}>
              {visibleProperties.length}
            </Typography>{' '}
            of{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#0066CC' }}>
              {filteredProperties.length}
            </Typography>{' '}
            properties
          </Typography>
        </Box>

        {/* Properties Grid */}
        {visibleProperties.length > 0 ? (
          <>
            <Grid container spacing={2}>
              {visibleProperties.map((property) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={property.id}>
                  <PropertyCard property={property} />
                </Grid>
              ))}
            </Grid>

            {/* Load More Button */}
            {hasMore && (
              <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button
                  variant="contained"
                  onClick={handleLoadMore}
                  sx={{
                    backgroundColor: '#0066CC',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#004499',
                    },
                  }}
                >
                  Load More Properties
                </Button>
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#666' }}>
              No properties found
            </Typography>
            <Typography variant="body2" sx={{ color: '#999', mb: 3 }}>
              Try adjusting your filters
            </Typography>
            <Button
              variant="outlined"
              onClick={() =>
                setFilters({
                  search: '',
                  type: 'all',
                  beds: 'all',
                  location: 'all',
                  status: 'all',
                })
              }
            >
              Reset Filters
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
