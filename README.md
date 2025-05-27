# EALF NGO Website

This is a feature-rich NGO website built with React, Tailwind CSS, and various integrations for donations, content management, and email functionality.

## Core Features

- Responsive design with Home, About, Mission, Blog, and Contact pages
- Donation functionality with Stripe integration
- User-friendly donation form capturing donor information
- MongoDB integration for storing user and donation data
- SendGrid integration for email notifications
- Contentful CMS integration for managing blog content
- Admin dashboard for managing donations and users

## Technology Stack

### Frontend

- React with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- React Router for navigation
- React Query for data fetching

### Backend

- Node.js with Express
- MongoDB (via Mongoose)
- Stripe for payment processing
- SendGrid for email notifications
- Contentful for content management

## Project Setup

### Prerequisites

- Node.js (v14 or later)
- MongoDB account
- Stripe account
- SendGrid account
- Contentful account

### Installation

1. Clone the repository:

```sh
git clone <repository-url>
cd kindhearts-ngo
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the project root with the following variables:

```
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Stripe
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@kindhearts.org

# Contentful
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
CONTENTFUL_ENVIRONMENT=master
```

4. Start the development server:

```sh
npm run dev
```

## API Routes

### Donation Routes

- `POST /api/donate`: Process a donation via Stripe
- `GET /api/donations`: Get all donations (admin only)

### User Routes

- `POST /api/users`: Create a new user
- `GET /api/users`: Get all users (admin only)
- `GET /api/users/:id`: Get a specific user
- `PUT /api/users/:id`: Update a user
- `DELETE /api/users/:id`: Delete a user

### Newsletter Routes

- `POST /api/newsletter/subscribe`: Subscribe a user to the newsletter

## MongoDB Schema Structure

### User Schema

```javascript
{
  name: String,
  email: String,
  role: String,
  joinedAt: Date
}
```

### Donation Schema

```javascript
{
  userId: ObjectId,
  name: String,
  email: String,
  amount: Number,
  currency: String,
  message: String,
  stripePaymentId: String,
  status: String,
  createdAt: Date
}
```

### Newsletter Subscriber Schema

```javascript
{
  email: String,
  subscribedAt: Date,
  active: Boolean
}
```

## Contentful Setup

### Content Types

1. **Blog Post**

   - Title (Short text)
   - Slug (Short text)
   - Author (Short text)
   - Content (Rich text)
   - Excerpt (Short text)
   - Featured Image (Media)
   - Category (Short text)
   - Publication Date (Date)

2. **Team Member**

   - Name (Short text)
   - Position (Short text)
   - Bio (Rich text)
   - Photo (Media)

3. **Project**
   - Title (Short text)
   - Description (Rich text)
   - Featured Image (Media)
   - Location (Short text)
   - Status (Short text)
   - Start Date (Date)
   - End Date (Date)

## Deployment

This project can be deployed to various platforms:

- Netlify or Vercel for the frontend
- Heroku, DigitalOcean, or AWS for the backend
- MongoDB Atlas for the database

## Project Structure

```
kindhearts-ngo/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── donation/
│   │   └── ui/
│   ├── pages/
│   ├── lib/
│   ├── hooks/
│   ├── App.tsx
│   └── main.tsx
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

Built with ❤️ for making a difference.
