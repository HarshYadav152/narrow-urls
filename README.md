# NarrowLinks - URL Shortener

NarrowLinks is a modern URL shortening service built with Next.js that helps you convert long URLs into concise, shareable links.

![NarrowLinks](https://res.cloudinary.com/everywherebackend/image/upload/v1742222421/uj4mkuy14eet3e6zwp7r.png)

## ✨ Features

- **URL Shortening**: Convert long URLs into short, memorable links
- **Custom Short URLs**: Customize your shortened links with preferred names
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **MongoDB Integration**: Reliable data storage for your links
- **Clean UI**: Modern user interface built with Tailwind CSS


### Prerequisites
- Node.js 18.x or later
- MongoDB database (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/narrowlinks.git
   cd narrowlinks
   ```
2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Environment Setup
Create a .env.local file in the root directory with:

```bash
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000 # Or your production URL
```
4. Run the development server:
```bash
npm run dev
# or
yarn dev
```
5. Open http://localhost:3000 with your browser to see the application.


## 🛠️ Built With
- [Next.js](https://nextjs.org) - React framework for production
- [Tailwind CSS](https://tailwindcss.com) - For styling
- [MongoDB](https://mongodb.om) - Database
- [Geist](https://vercel.com/font) Font - Typography by Vercel

## 📝 Usage
1. Enter a long URL in the input field
2. After that enter a narrow url name of your choice
3. Click `Generate` button for generating narrow url (after validating all inputs)
4. Copy and share your new short(narrow) URL

## 🔧 Project Structure
```bash
narrowlinks/
├── app/                # Next.js app router components
│   ├── api/            # API routes
│   ├── [narrowUrl]/    # Dynamic route for short URLs
│   └── narrow/         # URL creation page
├── components/         # Reusable UI components
└── public/             # Static assets
```

# 👨‍💻 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

# 🌐 Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
