# Marketplace Technical Foundation - Furniro E-Commerce

## Day 1: Laying the Foundation for Marketplace Journey
- **Furniro E-Commerce**: Focus on creating a smooth shopping experience.
- **Major Features**:
  - Smooth shopping experience.
  - Product comparison feature.
  - Store liked products for future reference.

## Day 2: Planning the Technical Foundation
### Frontend Requirements
- **Framework**: Next.js.
- **Essential Pages**:
  - Home, About, Product Listing, Cart, Checkout, Product Comparison, Blog, Contact.
- **Dynamic Product Pages**: `/product/[id]` for individual product details.

### Backend Requirements
- **CMS**: Sanity CMS.
- **Data to Store**:
  - Product details, Orders, Customer info, Delivery Zone, Shipment.

### Third-Party APIs
- **Shipment Tracking**: ShipEngine.
- **Payment Gateway**: Stripe.

## Day 3: API Integration and Data Migration
1. **Open Next.js Project**.
2. **Install Sanity**:
   ```bash
   npm create sanity@latest -- --template clean --create-project "learning-sanity-project" --dataset production
3. **Start Sanity Studio.**
4. **Manage Project and Generate API Token.**
5. **Create a Schema in Sanity.**
6. **Add Scripts to Import Data.**
7. **Install Axios.**
8. **Add Script in package.json.**
9. **Import Data into Sanity.**
10. **Fetch Sanity Data in Next.js.**
11. **Allow External Image Sources.**
12. **Display Data in Browser.**

# Day 4: Building Dynamic Frontend Components for Marketplace

## Key Components
- **Search Bar**: Dynamic routing to fetch and display products.
- **Product Listing Component**: Fetch and display products from Sanity.
- **Product Detail Component**: Dynamic routing for product details.
- **Cart Component**: Redux for cart management.
- **Wishlist Component**: Save and manage liked products.
- **Checkout Workflow Component**: Review cart, sign in, enter shipping info.
- **Product Comparison Component**: Compare two products side by side.

# Day 5: Testing, Error Handling, and Backend Integration Refinement

## Key Test Cases
1. **Validate Product Listing Page**.
2. **Validate Dynamic Product Detail Page**.
3. **Validate Add to Cart Page Product Addition**.
4. **Validate Search Bar Result Page**.
5. **Validate Wishlist Page Product Addition**.
6. **Validate Comparison Page Product Addition**.

## Cross-Browser Checking & Responsive
- **Edge Browser**: Accurate working.
- **Mobile & Tablet**: Perfect responsiveness.
- **Website Performance**: 78%.

# Day 6: Preparing for Deployment & Setting Up the Staging Environment

## Deployment Overview
- **Hosting Service**: Vercel.
- **GitHub Repository**: [Hackathon-Furniro-E-Commerce-Website](https://github.com/Hudaibkhan/Hackathon-Furniro-E-Commerce-Website.git).
- **Staging Site URL**: [Furniro](https://furniro-taupe.vercel.app/).

## Steps for Environment Setup & Deployment
1. **Configuring Hosting on Vercel**.
2. **Setting Up Environment Variables**.
3. **Configuring CORS for Sanity**.
4. **Deploying to Staging**.

## Performance Testing Results
- **Desktop Performance**: 93%.
- **Mobile Performance**: 73%.

## Conclusion
This README provides a concise overview of the technical foundation and development process for a general e-commerce marketplace. It covers the planning, implementation, testing, and deployment phases, ensuring a smooth and efficient development journey.
