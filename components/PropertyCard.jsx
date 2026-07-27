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
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-6px)',
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
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography
          variant="caption"
          sx={{ color: '#999', mb: 1, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px', fontSize: '0.7rem' }}
        >
          {property.location}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.3 }}>
          {property.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#777', mb: 2.5, flex: 1, lineHeight: 1.5, fontSize: '0.9rem' }}>
          {property.description.substring(0, 80)}...
        </Typography>

        {/* Stats */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 3, pb: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75 }}>
            <MeetingRoomIcon sx={{ fontSize: 20, color: '#0066CC' }} />
            <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem' }}>
              {property.beds}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75 }}>
            <BathtubIcon sx={{ fontSize: 20, color: '#0066CC' }} />
            <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem' }}>
              {property.baths}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75 }}>
            <AspectRatioIcon sx={{ fontSize: 20, color: '#0066CC' }} />
            <Typography variant="body2" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem' }}>
              {property.area}m²
            </Typography>
          </Box>
        </Box>

        {/* Rating */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ color: '#666', fontSize: '0.85rem' }}>
            Rating:{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#0066CC', fontSize: '0.95rem' }}>
              {property.rating}/5
            </Typography>
          </Typography>
        </Box>

        {/* Button */}
        <Button
          component={Link}
          href={`/properties/${property.id}`}
          fullWidth
          sx={{
            backgroundColor: '#0066CC',
            color: '#fff',
            fontWeight: 700,
            py: 1.2,
            textTransform: 'none',
            fontSize: '0.95rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#0052A3',
              boxShadow: '0 8px 24px rgba(0, 102, 204, 0.35)',
            },
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
