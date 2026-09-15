# Zaika Indian Restaurant Landing Page

A beautiful, responsive landing page for Zaika Indian Restaurant featuring a rich red and gold theme, showcasing authentic Indian cuisine.

## Features

- **Hero Section** with captivating tagline and call-to-action buttons
- **Menu Section** with categorized dishes and price alignment
- **About Chefs** section highlighting culinary experts
- **Testimonials Carousel** with customer reviews
- **Booking/Contact Form** with client-side validation
- **Responsive Design** optimized for mobile (320px), tablet (768px), and desktop (1024px, 1440px)
- **Rich Red & Gold Theme** using CSS variables for easy customization
- **Accessibility** (WCAG 2.1 AA compliant)
- **SEO Optimized** with meta tags and Open Graph
- **Fast Loading** with optimized assets
- **Form Validation** with real-time feedback
- **Touch-friendly** navigation and interactions

## Design Tokens

### Colors
- `--primary-red`: #C41E3A
- `--secondary-gold`: #FFB400
- `--dark-bg`: #212121
- `--light-text`: #F5F5F5
- `--muted-text`: #A9A9A9
- `--input-bg`: #FFFFFF
- `--input-border`: #CCCCCC
- `--success-green`: #28A745
- `--error-red`: #DC3545

### Typography
- `--font-heading`: 'Playfair Display', serif
- `--font-body`: 'Lato', sans-serif
- `--font-size-base`: 16px
- `--font-size-hero`: 2.5rem

### Spacing
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem

## File Structure

```
zaika-restaurant-landing-page-v2/
├── index.html
├── README.md
├── netlify.toml
├── .gitignore
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── script.js
│   ├── form-validation.js
│   └── carousel.js
└── assets/
    ├── images/
    │   ├── hero.jpg
    │   ├── chef1.jpg
    │   ├── chef2.jpg
    │   ├── chef3.jpg
    │   ├── dish1.jpg
    │   ├── dish2.jpg
    │   ├── testimonial1.jpg
    │   ├── testimonial2.jpg
    │   └── testimonial3.jpg
    └── icons/
        ├── logo.svg
        ├── phone.svg
        ├── email.svg
        └── location.svg
```

## Installation & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/zaika-restaurant-landing-page-v2.git
   ```

2. Open `index.html` in your browser to view the landing page locally.

## Deployment

This site is configured for deployment on Netlify:

1. Push the repository to GitHub
2. In Netlify dashboard, click "New site from Git"
3. Select this repository
4. Keep build command empty and publish directory as "/"
5. Click "Deploy site"

The site will be automatically deployed and accessible via your Netlify subdomain.

## Features Details

### Hero Section
- Full-height background image with gradient overlay
- Prominent tagline and call-to-action buttons
- Smooth scrolling to booking section

### Menu Section
- Grid layout with categorized dishes
- Price right-aligned for easy reading
- Hover effects using secondary gold color
- Responsive grid that adapts to screen size

### About Chefs
- Circular image clips for chef photos
- Detailed bios with specialties
- Hover animations on chef cards

### Testimonials
- Auto-advancing carousel with manual navigation
- Dot indicators for slide position
- Touch swipe support for mobile devices
- Quote styling with gold accents

### Booking Form
- Client-side validation for all fields
- Real-time feedback on input errors
- Success/error message styling
- Phone number formatting
- Date validation (prevents past dates)
- Accessible form labels and error messages

### Accessibility Features
- Semantic HTML5 markup
- ARIA labels and roles
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Touch target sizes >= 44x44px
- Focus visible indicators
- Skip navigation capability

### Performance Optimizations
- Lazy loading for images
- CSS optimization with variables
- Minimal JavaScript footprint
- Efficient CSS selectors
- Optimized asset delivery

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Customization

To customize the theme, modify the CSS variables in `css/style.css`:

```css
:root {
    --primary-red: #C41E3A;      /* Change primary color */
    --secondary-gold: #FFB400;   /* Change accent color */
    --font-heading: 'Playfair Display', serif;  /* Change heading font */
    --font-body: 'Lato', sans-serif;           /* Change body font */
}
```

To update content, simply edit the corresponding sections in `index.html`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Fonts: Playfair Display and Lato from Google Fonts
- Icons: Custom SVG icons
- Images: Placeholder images (replace with actual restaurant photos)
- Inspiration: Modern Indian restaurant websites