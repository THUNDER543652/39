# TestAppara

A modern browser-based device testing and diagnostic platform built with **Next.js 15, React 19, TypeScript, and Tailwind CSS**.

TestAppara provides a collection of interactive tools for testing computer and mobile devices, including input devices, display, camera, microphone, speakers, browser capabilities, internet performance, and typing performance — directly from the browser.

## 🚀 Features

* **Next.js 15** - Modern React framework with App Router and optimized production performance
* **React 19** - Latest React capabilities for interactive web applications
* **TypeScript** - Type-safe and maintainable application development
* **Tailwind CSS** - Responsive and utility-first styling
* **Device Testing** - Test keyboard, mouse, clicks, display, camera, microphone, speakers, and other device capabilities
* **Typing Test** - Measure typing speed, accuracy, errors, and detailed performance statistics
* **CPS Test** - Measure clicks per second and clicking performance
* **Internet Speed Test** - Test internet connection performance with detailed results
* **Browser Test** - Check browser and device capabilities
* **Dead Pixel Test** - Full-screen display testing for identifying display issues
* **Device Test Series** - Guided testing workflows for multiple device components
* **Certificate Generator** - Generate branded certificates from completed typing tests
* **Certificate Verification** - Verify generated certificates using unique verification links and QR codes
* **Responsive Design** - Designed for desktop, laptop, tablet, and mobile browsers
* **Dark & Light Themes** - Modern interface with theme support
* **Google AdSense Integration** - Advertising support for monetization
* **SEO-Friendly Structure** - Page-based routing and metadata support for search visibility

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Start the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open http://localhost:4028 with your browser to see the result.
    original:- http://testappara.com
## 📁 Project Structure

```text
36-main/
├── public/                 # Static assets, images, icons and branding
├── src/
│   └── app/                # Next.js App Router
│       ├── api/            # API routes
│       │   └── certificate/ # Certificate generation API
│       ├── components/     # Reusable application components
│       ├── certificate-generator/
│       ├── device-test-series/
│       ├── dead-pixel-test/
│       ├── browser-test/
│       ├── cps-test/
│       ├── typing-test/
│       ├── ...             # Additional testing tools and pages
│       ├── layout.tsx      # Root layout
│       └── page.tsx        # Main homepage
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project documentation
```

## 🧩 Page Editing

You can start editing the homepage by modifying:

```text
src/app/page.tsx
```

Individual testing tools and pages are organized inside their respective directories under:

```text
src/app/
```

The development server automatically updates the application as you edit the source files.

## 🎨 Styling

This project uses **Tailwind CSS** for styling with the following features:

* Utility-first approach for rapid UI development
* Responsive design utilities
* Custom application styling
* Dark and light theme support
* Reusable UI components
* PostCSS integration
* Mobile-friendly layouts
* Consistent TestAppara branding

## 📦 Available Scripts

* `npm run dev` - Start the development server on port 4028
* `npm run build` - Build the application for production
* `npm run start` - Start the production server
* `npm run serve` - Start the production server
* `npm run lint` - Run ESLint to check code quality
* `npm run lint:fix` - Fix ESLint issues automatically
* `npm run format` - Format code with Prettier

## 📱 Deployment

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Vercel Deployment

TestAppara is built with Next.js and can be deployed directly to **Vercel**.

Recommended deployment flow:

```text
Private Git Repository
        ↓
     Vercel
        ↓
Production Deployment
        ↓
Custom Domain
```

A private Git repository can be connected to Vercel. The repository does not need to be public for the deployed website to work.

For production, configure the required environment variables in the Vercel project settings.

## 📢 Google AdSense

TestAppara includes Google AdSense integration for website monetization.

The AdSense script is intended to be loaded through the application's shared/global structure rather than duplicated unnecessarily across every page.

Individual ad units can be placed on the pages and locations where advertisements are required.

Before production launch, verify that:

* The production domain is configured in the AdSense account
* The AdSense publisher code is correct
* Required ad units are enabled
* `ads.txt`, if required, is correctly configured
* Ads are displayed correctly on the production domain

## 📜 TestAppara Certificate Generator

The typing test's **Download Certificate** action opens the integrated certificate studio at:

```text
/certificate-generator
```

The certificate studio:

* Uses the existing TestAppara visual theme
* Receives completed typing-test results
* Generates a unique certificate ID
* Creates a unique signed verification token
* Generates a QR code pointing to the certificate verification route
* Exports the certificate as a high-resolution landscape PDF
* Provides certificate verification through a dedicated verification URL

### Certificate Environment Variables

Create `.env.local` for local development and configure the same variables in your production hosting environment:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CERTIFICATE_SECRET=replace-with-a-long-random-secret
```

**Important:** Never commit `.env.local` or `CERTIFICATE_SECRET` to a public or private Git repository.

After pulling the project, install the required dependencies:

```bash
npm install
```

Then run:

```bash
npm run dev
```

## 🔐 Security

Keep sensitive configuration outside the source code.

Do not commit:

```text
.env
.env.local
.env.production
```

Environment variables should be configured through the hosting provider for production deployments.

The Git repository can remain **private** while the deployed website remains publicly accessible.

## 🌐 Production Checklist

Before launching the production domain, verify:

* Application builds successfully with `npm run build`
* All testing tools load correctly
* Desktop and mobile layouts work correctly
* Camera and microphone permissions work
* Speaker and audio tests work
* Full-screen display tests work
* Internet speed test works
* Typing test records results correctly
* Certificate generation works
* Certificate verification works
* Production environment variables are configured
* Custom domain is connected
* HTTPS is working
* Google AdSense configuration is correct
* Important pages are indexed/configured for SEO

## 📚 Learn More

To learn more about the technologies used in TestAppara:

* [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and APIs
* [React Documentation](https://react.dev/) - Learn about React
* [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
* [Vercel Documentation](https://vercel.com/docs) - Learn about deployment and hosting

## 🙏 Acknowledgments

* Powered by **Next.js and React**
* Styled with **Tailwind CSS**
* Built with **TypeScript**
* Deployed with **Vercel**
* Certificate generation and verification integrated into TestAppara
* Google AdSense integration for monetization

---

**TestAppara — Test your device. Understand your results.**

Then run:

```bash
npm run dev
```
