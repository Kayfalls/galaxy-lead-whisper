# AI Lead Generation Platform

A comprehensive AI-powered lead generation platform built with React, TypeScript, and modern web technologies. This platform provides advanced features for campaign management, voice automation, lead scoring, and analytics.

## 🚀 Features

- **Dashboard Analytics** - Real-time insights and performance metrics
- **Campaign Management** - Create and manage lead generation campaigns
- **AI Voice Configuration** - Customize AI voice settings for calls
- **Call Execution** - Automated voice calling system
- **Lead Database** - Comprehensive lead management and tracking
- **Analytics & Reporting** - Detailed performance analytics
- **Lead Scoring** - AI-powered lead qualification
- **Team Management** - User and team collaboration tools
- **Compliance Tools** - Built-in compliance and regulatory features
- **CRM Integration** - Customer relationship management
- **Calendar Integration** - Schedule and manage appointments

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Radix UI, Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Forms**: React Hook Form, Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-lead-generation-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🏗️ Build & Deploy

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build:prod
```

### Preview Production Build
```bash
npm run preview
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the Vite configuration

3. **Configure Environment Variables** (if needed)
   - In your Vercel project dashboard
   - Go to Settings → Environment Variables
   - Add any required environment variables

### Option 3: Deploy via Vercel Dashboard

1. **Prepare your build**
   ```bash
   npm run build
   ```

2. **Upload to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop your `dist` folder
   - Vercel will automatically deploy

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=AI Lead Generation Platform
VITE_API_URL=your-api-url
VITE_ANALYTICS_ID=your-analytics-id
```

### Build Configuration

The project uses Vite for building. Key configurations:

- **Output Directory**: `dist/`
- **Base Path**: `/` (configurable in `vite.config.ts`)
- **Chunk Splitting**: Optimized for better performance

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AppSidebar.tsx  # Main navigation sidebar
│   └── Header.tsx      # Top header component
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Campaigns.tsx   # Campaign management
│   ├── Leads.tsx       # Lead management
│   └── ...             # Other pages
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── main.tsx           # App entry point
```

## 🎨 Customization

### Styling
- Uses Tailwind CSS for styling
- Custom theme configuration in `tailwind.config.ts`
- shadcn/ui components for consistent design

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation item in `src/components/AppSidebar.tsx`

## 🔍 Performance Optimization

- **Code Splitting**: Automatic chunk splitting for better loading
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized asset loading
- **Caching**: Proper cache headers for static assets

## 🛡️ Security

- **HTTPS**: Automatic SSL/TLS encryption on Vercel
- **CSP Headers**: Content Security Policy headers
- **XSS Protection**: Built-in React security features

## 📊 Analytics

The platform includes built-in analytics capabilities:
- Performance monitoring
- User behavior tracking
- Campaign effectiveness metrics
- Conversion tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using modern web technologies**
