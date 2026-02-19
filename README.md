# Daniel Rodrigues - Professional Portfolio

A lightweight, fully static professional website with zero build steps. Created with vanilla HTML, CSS, and JavaScript for maximum compatibility and simplicity.

## Features

✨ **Fully Static** - No frameworks, no build pipeline, zero dependencies  
📱 **Responsive Design** - Works beautifully on all devices  
⚡ **Fast Loading** - Minimal CSS and vanilla JS only  
🎯 **Interactive Timeline** - Hover (desktop) or tap (mobile) to explore career milestones  
📖 **Clean Layout** - Professionally organized sections with modern typography  
🌐 **GitHub Pages Ready** - Deploy directly to GitHub Pages  

## File Structure

```
.
├── index.html      # Main HTML file with all content
├── styles.css      # Responsive styling (12KB gzipped)
├── script.js       # Interactive timeline functionality (~1KB)
└── README.md       # This file
```

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. **Open in your browser:**
   - **Option A:** Double-click `index.html` to open it directly
   - **Option B:** Use a simple local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (if installed)
     npx http-server
     ```
     Then open `http://localhost:8000` in your browser

3. **That's it!** The site works completely offline.

## How to Deploy to GitHub Pages

### Method 1: Deploy from Your Branch (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository settings: `https://github.com/yourname/personal-website/settings`
   - Scroll down to the **Pages** section
   - Under "Source," select your branch (e.g., `main`)
   - Leave the folder as `/ (root)`
   - Click **Save**

3. **Wait a few minutes** - GitHub will build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/personal-website/`

### Method 2: Custom Domain (Optional)

If you own a domain and want to use it:
1. In the Pages settings, add your custom domain in the "Custom domain" field
2. Update your domain's DNS records to point to GitHub Pages

## Features Explained

### Interactive Timeline
- **Desktop:** Hover over any year to see details
- **Mobile:** Tap a year to see details
- Smooth animations and responsive positioning
- Easy to customize with new milestones

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly on mobile devices
- Optimized for all screen sizes

### Accessibility
- Semantic HTML structure
- Good color contrast ratios
- Readable font sizes and spacing
- Works without JavaScript (timeline just won't show cards)

## Customization

### Update Content
Edit `index.html`:
- Update name, title, and summary in the `<header>` section
- Modify contact links (email, phone, LinkedIn)
- Edit experience, skills, education, and other sections
- Add or remove timeline entries by duplicating `.timeline-dot` elements

### Change Colors
Edit `styles.css`:
- Primary color: `#0066cc` (search and replace)
- Background gradients: lines 141-142
- Header background: lines 141-142

### Add Sections
Simply add new `<section>` elements following the existing pattern:
```html
<section class="new-section">
    <h2>Section Title</h2>
    <!-- Your content -->
</section>
```

Then add CSS for `.new-section` to `styles.css`.

## Browser Support

Works in all modern browsers:
- Chrome/Chromium (all versions)
- Firefox (all versions)
- Safari 10+
- Edge (all versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Total size:** ~20KB uncompressed
- **No external dependencies** ✓
- **No network requests** (except for links you click)
- **Instant load time** on all connections

## License

This portfolio template is free to use and modify. Update it with your own information and deploy!

## Questions?

Need help customizing? The code is straightforward:
- `index.html` - Pure HTML, easy to edit
- `styles.css` - Standard CSS with comments
- `script.js` - Vanilla JavaScript, no frameworks
- No build tools, no npm, no configuration needed

Just edit, save, and refresh your browser.

---

**Created:** 2026  
**Last Updated:** February 2026
