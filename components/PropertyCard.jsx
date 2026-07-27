'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
  Typography,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

export default function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const formatPrice = (price) => {
    if (price >= 1000000000) {
      return `₦${(price / 1000000000).toFixed(1)}B`;
    }
    return `₦${(price / 1000000).toFixed(0)}M`;
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '&:hover': {
          '& .property-image': {
            transform: 'scale(1.08)',
          },
        },
      }}
    >
      {/* Image Container */}
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 300 }}>
        <CardMedia
          component="img"
          height="300"
          image={property.images[currentImageIndex]}
          alt={property.title}
          className="property-image"
          sx={{
            transition: 'transform 0.4s ease',
            objectFit: 'cover',
          }}
        />

        {/* Price Badge */}
        <Chip
          label={formatPrice(property.price)}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: '#E8A33D',
            color: '#1a1a1a',
            fontWeight: 700,
            fontSize: '0.9rem',
          }}
        />

        {/* Type Badge */}
        <Chip
          label={property.type}
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            backgroundColor: '#0066CC',
            color: '#fff',
            fontWeight: 600,
          }}
        />

        {/* Like Button */}
        <Tooltip title={liked ? 'Remove from favorites' : 'Add to favorites'}>
          <IconButton
            onClick={() => setLiked(!liked)}
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': { backgroundColor: '#fff' },
            }}
          >
            {liked ? (
              <FavoriteIcon sx={{ color: '#E8A33D' }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Tooltip>

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': { backgroundColor: '#fff' },
              }}
              size="small"
            >
              {'<'}
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': { backgroundColor: '#fff' },
              }}
              size="small"
            >
              {'>'}
            </IconButton>
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 0.5,
              }}
            >
              {property.images.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor:
                      idx === currentImageIndex
                        ? '#E8A33D'
                        : 'rgba(255, 255, 255, 0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </Box>

      {/* Content */}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="caption"
          sx={{ color: '#666', mb: 0.5, textTransform: 'uppercase', fontWeight: 600 }}
        >
          {property.location}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: '#1a1a1a' }}>
          {property.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', mb: 2, flex: 1 }}>
          {property.description.substring(0, 80)}...
        </Typography>

        {/* Stats */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <MeetingRoomIcon sx={{ fontSize: 18, color: '#0066CC' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {property.beds}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <BathtubIcon sx={{ fontSize: 18, color: '#0066CC' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {property.baths}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AspectRatioIcon sx={{ fontSize: 18, color: '#0066CC' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {property.area}m²
                    </Typography>
                  </Box>
        </Box>

        {/* Rating */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Rating:{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#0066CC' }}>
              {property.rating}/5
            </Typography>
          </Typography>
        </Box>

        {/* Button */}
        <Button
          component={Link}
          href={`/properties/${property.id}`}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#0066CC',
            '&:hover': {
              backgroundColor: '#053847',
            },
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
