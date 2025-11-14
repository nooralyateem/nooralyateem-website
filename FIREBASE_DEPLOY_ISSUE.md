# Firebase Deploy Issue - Node.js v25 Compatibility

## Problem
You're getting this error when trying to deploy:
```
TypeError: Converting circular structure to JSON
--> starting at object with constructor 'TLSSocket'
```

This is a known compatibility issue between `firebase-tools@14.25.0` and Node.js v25.0.0.

## Solutions

### Solution 1: Use Node.js v20 or v22 (Recommended)

Firebase Tools officially supports Node.js v20 and v22. Switch to one of these versions:

**Using nvm-windows (if installed):**
```powershell
nvm install 20
nvm use 20
firebase deploy --only hosting
```

**Or download Node.js v20 LTS from:**
https://nodejs.org/en/download/

### Solution 2: Deploy via GitHub Actions / CI/CD

Set up automated deployment through GitHub Actions which can use Node.js v20:

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Firebase
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: nooralyateem-2542f
```

### Solution 3: Use Firebase Console (Temporary Workaround)

For now, you can manually upload files through the Firebase Console:
1. Go to https://console.firebase.google.com/project/nooralyateem-2542f/hosting
2. Click "Get started" or "Add another site"
3. Use the web interface to upload your build folder

### Solution 4: Wait for Update

Firebase Tools will likely release a fix for Node.js v25 compatibility soon. Monitor:
- https://github.com/firebase/firebase-tools/releases

## Current Status
- **Node.js Version:** v25.0.0
- **Firebase Tools Version:** 14.25.0 (latest)
- **Issue:** Incompatibility causing circular JSON error

## Quick Fix (If you can't change Node.js version)

Try deploying smaller batches by excluding more files temporarily:

```json
// firebase.json - temporarily exclude large media
"ignore": [
  "firebase.json",
  "**/.*",
  "**/node_modules/**",
  "**/*.mp4",
  "**/*.mov",
  "**/*.MOV",
  "**/media/**"  // Temporarily exclude all media
]
```

Then host media files on Firebase Storage or a CDN instead.


