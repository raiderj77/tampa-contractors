# Tampa Contractors Directory

A free alternative to Yelp for Tampa contractors. No monthly fees, just real reviews from real homeowners.

## Live Site
https://raiderj77.github.io/tampa-contractors/

## Features

- **Free forever** for basic listings
- **$49 one-time** premium badge (not monthly!)
- **Verified contractors** only
- **Real homeowner reviews**
- **Tampa-focused** (not national like Yelp)
- **Mobile-responsive** design

## For Contractors

### Free Listing Includes:
- Business name and description
- Service category and location  
- Phone number (displayed to users)
- Appear in search results
- Basic verification badge

### Premium Badge ($49 one-time):
- ✅ "Verified" checkmark badge
- ✅ Featured placement (top of directory)
- ✅ Priority in search results
- ✅ Contact info displayed prominently
- ✅ Business highlighted in listings

### How to List Your Business:
1. Go to the [Issues page](https://github.com/raiderj77/tampa-contractors/issues)
2. Click "New Issue"
3. Select "New Contractor Submission" template
4. Fill out the form
5. We'll verify and list you within 24 hours

## For Homeowners

### How to Find Contractors:
1. Visit the [directory](https://raiderj77.github.io/tampa-contractors/)
2. Search by service type or location
3. Filter by premium/standard
4. Contact contractors directly

### Services Available:
- Plumbing
- HVAC
- Electrical  
- Carpentry
- General Contracting
- Roofing
- Landscaping
- Painting
- Flooring
- Handyman

## Why We Built This

Yelp charges contractors $300-500/month just for a basic listing. That cost gets passed to homeowners through higher prices.

We built Tampa Contractors Directory as a free alternative:
- **Free** for contractors (no monthly fees)
- **Better reviews** (no algorithm filtering)
- **Local focus** (Tampa only, not every city)
- **Transparent** (no hidden costs)

## Technology

- **Hosting:** GitHub Pages (free)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** JSON file (contractors.json)
- **Submissions:** GitHub Issues
- **Version Control:** Git

## Development

### Local Setup:
```bash
git clone https://github.com/raiderj77/tampa-contractors.git
cd tampa-contractors
# Open index.html in browser
```

### File Structure:
```
tampa-contractors/
├── index.html          # Main page
├── style.css          # Styles
├── script.js          # JavaScript
├── contractors.json   # Contractor database
├── .github/           # Issue templates
└── README.md          # This file
```

### Adding Contractors:
1. Edit `contractors.json`
2. Add new contractor object
3. Set `verified: true` after verification
4. Commit and push

## Roadmap

- [x] Basic directory with sample data
- [x] GitHub Issues submission system
- [ ] Payment integration (Ko-fi/Stripe)
- [ ] Review system
- [ ] Email notifications
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Mobile app (future)

## Contributing

Found a bug? Have a feature request?
1. Check existing [Issues](https://github.com/raiderj77/tampa-contractors/issues)
2. Create a new issue with details
3. Or submit a pull request

## License

MIT License - see LICENSE file

## Contact

For business inquiries or support, create an issue on GitHub.

---

**Built for the Tampa community. Not affiliated with Yelp.**