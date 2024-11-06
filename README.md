Here’s an updated README structure that reflects the directory layout you've provided.

```markdown
# E-commerce Website

This is a fully functional e-commerce website built using Next.js and Tailwind CSS. The project integrates with the [Fake Store API](https://fakestoreapi.com/) to handle backend functionalities, delivering a responsive and interactive user experience based on the provided Figma design.

## Features

- **Responsive UI**: The website is styled with Tailwind CSS for a consistent, responsive layout.
- **Dynamic Product Listings**: Retrieves products from the Fake Store API, displaying them on the home page and individual product detail pages.
- **User Authentication**: Secures user login, registration, and session management using NextAuth.js.
- **Admin Product Management**: Admin users can perform full CRUD operations on products.
- **Shopping Cart**: Persistent shopping cart for adding, updating, and removing products.
- **Checkout Flow**: Allows users to review their cart, add shipping details, and complete purchases.
- **State Management**: Uses React Context for managing global state, including authentication and cart contents.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ramtanniru/E-commerce.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```plaintext
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key

   FAKE_STORE_API=https://fakestoreapi.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the website.

## Configuration

In `next.config.mjs`, add support for the Fake Store API images:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;
```

## Usage

- **Home Page**: Browse products, view categories, and access promotions.
- **Product Detail Page**: View product details, add products to the cart, and read descriptions.
- **Shopping Cart**: Add, update quantities, and remove items. The cart is stored persistently for returning users.
- **Checkout**: Enter shipping information and complete the order.
- **Admin Panel**: (Admin access only) Create, read, update, and delete products.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework for custom styling.
- **NextAuth.js**: Authentication for Next.js applications.
- **React Context API**: For managing global application state.
- **Fake Store API**: External API for product data.

## Folder Structure

```plaintext
├── app                      # Next.js app directory for pages
│   ├── about                # About page
│   ├── api                  # API routes for authentication
│   │   └── auth
│   │       ├── [...nextauth] # NextAuth configuration
│   │       ├── error        # Error handling for authentication
│   │       ├── signin       # Sign-in page
│   │       └── signup       # Sign-up page
│   ├── cart                 # Shopping cart page
│   ├── contact              # Contact page
│   ├── fonts                # Custom fonts
│   ├── my-account           # User account page
│   ├── products             # Products listing
│   │   └── [id]             # Dynamic routing for individual products
│   └── wishlist             # Wishlist page
├── components               # Reusable components
│   ├── Card                 # Card component for products
│   ├── Footer               # Footer component
│   ├── HOC                  # Higher-order components for cart and wishlist
│   │   ├── CartCard         # Component for cart items
│   │   ├── DiscountedCard   # Component for discounted items
│   │   └── WishListCard     # Component for wishlist items
│   └── Header               # Header component
├── context                  # React Context for global state management
├── hooks                    # Custom hooks
└── utils                    # Utility functions and components
    ├── Account              # Utilities for account management
    ├── Breadcrumbs          # Breadcrumbs component
    ├── Button               # Button component
    ├── Error                # Error handling components
    ├── Featured             # Featured products component
    ├── IconButton           # Icon button component
    ├── Search               # Search functionality
    └── Stars                # Star rating component
```

## API Endpoints

This project uses the [Fake Store API](https://fakestoreapi.com/) for product data. Below are key API endpoints used:

- **Get Products**: `GET /products`
- **Get Product by ID**: `GET /products/:id`
- **Create Product** (Admin): `POST /products`
- **Update Product** (Admin): `PUT /products/:id`
- **Delete Product** (Admin): `DELETE /products/:id`
