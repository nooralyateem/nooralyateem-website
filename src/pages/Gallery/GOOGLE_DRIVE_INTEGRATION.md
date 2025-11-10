# Google Drive Integration Guide for Gallery

This guide explains how to integrate your Google Drive photos and videos into the Gallery page.

## Quick Start (Recommended)

### Method 1: Public Folder (Easiest)

1. **Create a Google Drive folder** for your photos
2. **Upload your photos/videos** to this folder
3. **Right-click the folder** → Share → Change to "Anyone with the link can view"
4. **Get file IDs** from your photos:
   - Right-click a photo → "Get link"
   - Copy the link: `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
   - Extract the FILE_ID from the URL

5. **Update the Gallery.js file** with your file IDs:

```javascript
// Replace the sample data with your actual Google Drive file IDs
const photoAlbums = [
  {
    id: 'education',
    title: 'Education',
    description: 'Children engaged in learning activities',
    thumbnail: 'https://drive.google.com/uc?export=view&id=YOUR_THUMBNAIL_FILE_ID',
    photos: [
      { id: 1, url: 'https://drive.google.com/uc?export=view&id=YOUR_PHOTO_FILE_ID_1', type: 'image' },
      { id: 2, url: 'https://drive.google.com/uc?export=view&id=YOUR_PHOTO_FILE_ID_2', type: 'image' },
      { id: 3, url: 'https://drive.google.com/uc?export=download&id=YOUR_VIDEO_FILE_ID', type: 'video' }
    ]
  }
];
```

### Method 2: Using the Utility Functions

1. **Import the utility functions** in your Gallery.js:
```javascript
import { getGoogleDriveDirectLink, getGoogleDriveVideoLink } from '../utils/googleDrive';
```

2. **Use the helper functions**:
```javascript
const photoAlbums = [
  {
    id: 'education',
    title: 'Education',
    description: 'Children engaged in learning activities',
    thumbnail: getGoogleDriveDirectLink('YOUR_THUMBNAIL_FILE_ID'),
    photos: [
      { 
        id: 1, 
        url: getGoogleDriveDirectLink('YOUR_PHOTO_FILE_ID'), 
        type: 'image' 
      },
      { 
        id: 2, 
        url: getGoogleDriveVideoLink('YOUR_VIDEO_FILE_ID'), 
        type: 'video' 
      }
    ]
  }
];
```

## Advanced Integration (Google Drive API)

For more control and security, you can use the Google Drive API:

### Setup Steps:

1. **Google Cloud Console Setup**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google Drive API
   - Create credentials (API key or OAuth 2.0)

2. **Install Google APIs Client Library**:
```bash
npm install googleapis
```

3. **Create API service**:
```javascript
import { google } from 'googleapis';

const drive = google.drive({
  version: 'v3',
  auth: 'YOUR_API_KEY' // or OAuth2 client
});

export const listFolderContents = async (folderId) => {
  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: 'files(id, name, mimeType, thumbnailLink)'
    });
    return response.data.files;
  } catch (error) {
    console.error('Error fetching files:', error);
    return [];
  }
};
```

## Security Considerations

### Public Folder Method:
- ✅ **Pros**: Easy setup, no API keys needed
- ❌ **Cons**: Anyone with link can access, less secure
- 🔒 **Security Level**: Low
- 📝 **Best for**: Public galleries, portfolios

### Google Drive API Method:
- ✅ **Pros**: Secure, access control, professional
- ❌ **Cons**: Complex setup, requires backend
- 🔒 **Security Level**: High
- 📝 **Best for**: Private content, production apps

## Best Practices

1. **Image Optimization**:
   - Use appropriate image sizes
   - Implement lazy loading
   - Consider using a CDN

2. **Performance**:
   - Preload thumbnails
   - Use progressive loading
   - Implement caching

3. **User Experience**:
   - Show loading states
   - Handle errors gracefully
   - Provide fallback images

4. **Security**:
   - Regularly review sharing permissions
   - Use HTTPS for all requests
   - Implement proper access controls

## Troubleshooting

### Common Issues:

1. **Images not loading**:
   - Check sharing permissions
   - Verify file IDs are correct
   - Ensure URLs are properly formatted

2. **Videos not playing**:
   - Use `getGoogleDriveVideoLink()` for videos
   - Check video format compatibility
   - Verify video sharing permissions

3. **Slow loading**:
   - Implement image optimization
   - Use thumbnails for previews
   - Consider lazy loading

### URL Format Examples:

**Image URL**: `https://drive.google.com/uc?export=view&id=FILE_ID`
**Video URL**: `https://drive.google.com/uc?export=download&id=FILE_ID`
**Thumbnail URL**: `https://drive.google.com/uc?export=view&id=FILE_ID&sz=w400-h300`

## Migration from Sample Data

To replace the sample Unsplash images with your Google Drive photos:

1. **Gather your Google Drive file IDs**
2. **Update the `photoAlbums` array** in `Gallery.js`
3. **Test each album** to ensure images load correctly
4. **Optimize images** for web use if needed

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify Google Drive sharing permissions
3. Test URLs directly in browser
4. Review the utility functions in `src/utils/googleDrive.js`
