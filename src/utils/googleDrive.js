// Google Drive Integration Utility
// This file provides methods to integrate Google Drive photos and videos into your gallery

/**
 * Google Drive Integration Options:
 * 
 * 1. PUBLIC FOLDER METHOD (Recommended for ease of use):
 *    - Create a public Google Drive folder
 *    - Share it with "Anyone with the link can view"
 *    - Use direct links to images/videos
 * 
 * 2. GOOGLE DRIVE API METHOD (More secure but complex):
 *    - Requires Google Cloud Console setup
 *    - Needs API keys and authentication
 *    - Better for private content
 * 
 * 3. GOOGLE PHOTOS API METHOD (If using Google Photos):
 *    - Requires Google Photos API setup
 *    - Good for personal photo collections
 */

// Method 1: Direct Link Integration (Easiest)
export const getGoogleDriveDirectLink = (fileId) => {
  // Convert Google Drive share link to direct image link
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // To: https://drive.google.com/uc?export=view&id=FILE_ID
  
  if (fileId.includes('drive.google.com/file/d/')) {
    const match = fileId.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (match) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }
  
  // If it's already a file ID
  if (fileId.length > 20 && !fileId.includes('http')) {
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  return fileId; // Return as-is if already formatted
};

// Method 2: Folder-based Integration
export const getGoogleDriveFolderContents = async (folderId) => {
  // This would require Google Drive API setup
  // For now, return a placeholder structure
  
  console.warn('Google Drive API integration requires setup. Using placeholder data.');
  
  return {
    files: [],
    folders: []
  };
};

// Method 3: Batch Image Processing
export const processGoogleDriveImages = (imageUrls) => {
  return imageUrls.map(url => ({
    url: getGoogleDriveDirectLink(url),
    thumbnail: getGoogleDriveDirectLink(url) + '&sz=w400-h300', // Smaller thumbnail
    fullSize: getGoogleDriveDirectLink(url) + '&sz=w1920-h1080' // Full size
  }));
};

// Method 4: Video Support
export const getGoogleDriveVideoLink = (fileId) => {
  // For videos, we need a different approach
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // To: https://drive.google.com/uc?export=download&id=FILE_ID
  
  if (fileId.includes('drive.google.com/file/d/')) {
    const match = fileId.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (match) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
  }
  
  if (fileId.length > 20 && !fileId.includes('http')) {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  
  return fileId;
};

// Sample data structure for your photo albums
export const createAlbumFromGoogleDrive = (albumData) => {
  return {
    id: albumData.id,
    title: albumData.title,
    description: albumData.description,
    thumbnail: getGoogleDriveDirectLink(albumData.thumbnailId),
    photos: albumData.photos.map(photo => ({
      id: photo.id,
      url: photo.type === 'video' 
        ? getGoogleDriveVideoLink(photo.fileId)
        : getGoogleDriveDirectLink(photo.fileId),
      type: photo.type || 'image',
      poster: photo.posterId ? getGoogleDriveDirectLink(photo.posterId) : null
    }))
  };
};

// Security considerations and best practices
export const GOOGLE_DRIVE_SECURITY_GUIDE = {
  public: {
    description: "Public folder method - easiest to implement",
    security: "Low - anyone with link can access",
    setup: "Create folder, set to 'Anyone with link can view'",
    pros: ["Easy setup", "No API keys needed", "Fast implementation"],
    cons: ["Less secure", "No access control", "Public visibility"]
  },
  
  api: {
    description: "Google Drive API method - more secure",
    security: "High - requires authentication",
    setup: "Requires Google Cloud Console, API keys, OAuth setup",
    pros: ["Secure", "Access control", "Professional"],
    cons: ["Complex setup", "Requires backend", "Rate limits"]
  },
  
  recommendations: [
    "Start with public folder method for quick implementation",
    "Use API method for production with sensitive content",
    "Always set appropriate sharing permissions",
    "Consider using CDN for better performance",
    "Implement image optimization and lazy loading"
  ]
};

// Helper function to validate Google Drive URLs
export const isValidGoogleDriveUrl = (url) => {
  const patterns = [
    /drive\.google\.com\/file\/d\/[a-zA-Z0-9-_]+/,
    /drive\.google\.com\/open\?id=[a-zA-Z0-9-_]+/,
    /^[a-zA-Z0-9-_]{20,}$/ // Just file ID
  ];
  
  return patterns.some(pattern => pattern.test(url));
};

// Example usage:
/*
// Replace the sample data in Gallery.js with this structure:
const photoAlbums = [
  createAlbumFromGoogleDrive({
    id: 'education',
    title: 'Education',
    description: 'Children engaged in learning activities',
    thumbnailId: 'YOUR_GOOGLE_DRIVE_FILE_ID_HERE',
    photos: [
      { id: 1, fileId: 'FILE_ID_1', type: 'image' },
      { id: 2, fileId: 'FILE_ID_2', type: 'image' },
      { id: 3, fileId: 'FILE_ID_3', type: 'video', posterId: 'POSTER_FILE_ID' }
    ]
  })
];
*/
