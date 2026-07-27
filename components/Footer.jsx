'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0066CC',
        color: '#fff',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              About Manaja
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
              Manaja Listings connects you with premium properties across Lagos
              and Abuja. Expertly curated properties, intelligently matched with
              your needs.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                href="/"
                sx={{
                  color: '#fff',
                  opacity: 0.8,
                  '&:hover': { opacity: 1 },
                  textDecoration: 'none',
                }}
              >
                Browse Properties
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: '#fff',
                  opacity: 0.8,
                  '&:hover': { opacity: 1 },
                  textDecoration: 'none',
                }}
              >
                About Us
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: '#fff',
                  opacity: 0.8,
                  '&:hover': { opacity: 1 },
                  textDecoration: 'none',
                }}
              >
                Terms & Conditions
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: '#fff',
                  opacity: 0.8,
                  '&:hover': { opacity: 1 },
                  textDecoration: 'none',
                }}
              >
                Privacy Policy
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationCityIcon sx={{ fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Lagos, Nigeria
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <LocalPhoneIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  +234 701 234 5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <MailIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  info@manaja.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Subscribe to get updates on new properties
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: 'none',
                  borderRadius: '4px 0 0 4px',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#E8A33D',
                  color: '#1a1a1a',
                  border: 'none',
                  borderRadius: '0 4px 4px 0',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', my: 3 }} />

        {/* Bottom */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Manaja Listings. All rights reserved. Intelligently
            Curated. Expertly Matched.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
