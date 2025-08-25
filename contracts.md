# PV Consulting Website - Technical Contracts

## Frontend-Backend Integration Plan

### Current Frontend Implementation
- ✅ Modern homepage with SEO optimization
- ✅ Responsive navigation and footer
- ✅ Service cards with proper routing
- ✅ Contact information displays
- ✅ SEO components with JSON-LD schema

### Mock Data Currently Used (to be replaced with backend)
1. **Company Information** (`/app/frontend/src/data/mock.js`)
   - Company details, contact info, establishment date
   - Will be stored in MongoDB as company profile

2. **Services Data**
   - 8 main services with descriptions, features, icons
   - Will be managed via backend API endpoints

3. **Special Offers**
   - 3 promotional packages with pricing
   - Will be dynamic content manageable via admin

### Required Backend API Endpoints

#### Company Profile
- `GET /api/company` - Get company information
- `PUT /api/company` - Update company information

#### Services Management
- `GET /api/services` - Get all services
- `GET /api/services/:slug` - Get service by slug
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

#### Contact & Inquiries
- `POST /api/contact` - Submit contact form
- `GET /api/inquiries` - Get all inquiries (admin)

#### SEO Management
- `GET /api/seo/:page` - Get SEO data for specific page
- `PUT /api/seo/:page` - Update SEO data

#### Sitemap Generation
- `GET /api/sitemap.xml` - Generate dynamic sitemap

### Database Schema (MongoDB)

#### Companies Collection
```javascript
{
  _id: ObjectId,
  name: String,
  tagline: String,
  description: String,
  established: String,
  location: String,
  contact: {
    phone: String,
    email: String,
    address: String
  },
  socialMedia: {
    linkedin: String,
    facebook: String
  },
  updatedAt: Date
}
```

#### Services Collection
```javascript
{
  _id: ObjectId,
  id: String, // URL slug
  title: String,
  description: String,
  icon: String,
  features: [String],
  seo: {
    title: String,
    description: String,
    keywords: String
  },
  active: Boolean,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

#### Inquiries Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  serviceInterest: String,
  status: String, // 'new', 'contacted', 'resolved'
  createdAt: Date
}
```

### SEO Implementation Plan
1. **Dynamic Meta Tags** - Backend provides page-specific SEO data
2. **JSON-LD Schema** - Generated per page type (Organization, Service, etc.)
3. **Sitemap Generation** - Dynamic XML sitemap with all pages
4. **Google Analytics** - Environment variable integration

### Frontend Pages to Create
1. Service detail pages (8 pages)
2. Contact page with form
3. Special offers page
4. Privacy policy & Terms of use
5. Sitemap page

### Integration Steps
1. ✅ Create frontend with mock data
2. ⏳ Create backend API endpoints
3. ⏳ Replace frontend mock data with API calls
4. ⏳ Implement SEO optimization
5. ⏳ Generate sitemap
6. ⏳ Test full integration

### Notes
- All content remains in Croatian language
- Mobile-first responsive design
- Modern shadcn UI components
- Proper error handling and loading states
- Google Analytics placeholder setup ready