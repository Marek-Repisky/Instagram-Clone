# Instagram Clone

A modern Instagram clone built with Vue.js 3, featuring a responsive design, interactive posts, and social media functionality.
<p align="center">
  <img src="https://github.com/Marek-Repisky/Instagram-Clone/blob/main/Instagram clone home page.png" alt="Instagram clone home page">
  <br />
  <i>Instagram clone home page</i>
</p>

## 🚀 Features

### Core Functionality
- **📱 Responsive Design** - Mobile-first approach with responsive navigation
- **🏠 Home Feed** - Browse posts from various users with "For you" and "Followed" tabs
- **👤 User Profiles** - Individual account pages with posts grid and user statistics
- **❤️ Like System** - Like and unlike posts with real-time counter updates
- **🔖 Bookmarks** - Save posts for later viewing
- **💬 Comments** - Add comments to posts with expandable comment sections
- **🔍 Story Circles** - User story circles at the top of the feed
- **📝 Account Suggestions** - Discover new accounts to follow

### User Interface
- **Dark Theme** - Modern dark Instagram-inspired design
- **Smooth Navigation** - Vue Router with clean URL structure
- **Interactive Elements** - Hover effects and smooth transitions
- **Mobile Responsive** - Optimized for various screen sizes
- **Icon Integration** - Custom icon set for all UI elements

## 🛠️ Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Client-side routing
- **Pinia** - State management for likes, bookmarks, and comments
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with Flexbox and Grid
- **JSON** - Local data storage for posts and accounts

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Marek-Repisky/Instagram-Clone.git
   cd Instagram-Clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable Vue components
│   ├── AccountComponent.vue      # User account card
│   ├── CirclesComponent.vue      # Story circles
│   ├── NavigationComponent.vue   # Main navigation
│   ├── NavigationLink.vue        # Navigation links
│   └── PostComponent.vue         # Individual post
├── views/               # Page components
│   ├── HomeView.vue             # Main feed
│   ├── AccountView.vue          # User profile page
│   ├── BookmarksView.vue        # Saved posts
│   ├── LikesView.vue           # Liked posts
│   └── NotFoundView.vue         # 404 page
├── stores/              # Pinia state management
│   ├── bookmarks.js             # Bookmark functionality
│   ├── comments.js              # Comment system
│   └── likes.js                 # Like system
├── router/              # Vue Router configuration
│   └── index.js
├── assets/              # Static assets
│   ├── fonts/                   # Custom fonts
│   └── icons/                   # UI icons
├── data.json            # Sample data
└── main.js             # App entry point
```

## 🎯 Key Components

### PostComponent
- Handles post display, likes, comments, and bookmarks
- Integrates with Pinia stores for state management
- Responsive image handling and interactive elements

### NavigationComponent
- Collapsible sidebar navigation
- Responsive design with icon-only view on smaller screens
- Custom Instagram-style branding

### AccountView
- User profile pages with post grids
- Follower/following statistics
- Responsive layout with account information

## 🔧 State Management

The app uses Pinia for state management across three main stores:

- **Bookmarks Store** - Manages saved posts
- **Likes Store** - Tracks liked posts and updates counters
- **Comments Store** - Handles post comments

## 📱 Responsive Design

- **Desktop** - Full sidebar navigation with labels
- **Tablet** - Condensed navigation, hidden right sidebar
- **Mobile** - Icon-only navigation, single-column layout

## 🎨 Styling

- Custom dark theme matching Instagram's aesthetic
- CSS Grid and Flexbox for responsive layouts
- Hover effects and smooth transitions
- Custom font integration (Geraldine for branding)

## 📊 Sample Data

The project includes sample data with:
- 13 posts from 8 different users
- User profiles with followers/following counts
- Various post types with descriptions and timestamps

## 🚀 Getting Started

1. The app starts with a home feed showing all posts
2. Click on user avatars or names to visit their profiles
3. Like posts by clicking the heart icon
4. Bookmark posts using the bookmark icon
5. Add comments by typing in the comment input
6. Navigate between pages using the sidebar

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes. Instagram is a trademark of Meta Platforms, Inc.

## 🙏 Acknowledgments

- Inspired by Instagram's user interface and functionality
- Built as a learning project to demonstrate Vue.js capabilities
- Custom icons and design elements created for educational use
