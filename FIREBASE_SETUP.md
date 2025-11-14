# Firebase Tools Setup Guide

## Issue
After running `npm install -g firebase-tools`, the `firebase` command is not recognized in the terminal.

## Solution

### Quick Fix (Current Session)
If you need Firebase to work immediately in your current terminal session, run:

```powershell
$env:PATH += ";$env:APPDATA\npm"
```

Then verify it works:
```powershell
firebase --version
```

**Note:** This fix has been automatically applied to your PowerShell profile, so Firebase will work in all new PowerShell sessions automatically!

### Permanent Fix

1. **Verify Firebase Tools is installed:**
   ```powershell
   npm list -g firebase-tools
   ```

2. **Check if PATH is set (it should already be):**
   ```powershell
   [Environment]::GetEnvironmentVariable('Path', 'User') -split ';' | Select-String -Pattern 'npm'
   ```
   This should show: `C:\Users\tariq\AppData\Roaming\npm`

3. **If PATH is not set, add it:**
   ```powershell
   $currentPath = [Environment]::GetEnvironmentVariable('Path', 'User')
   $npmPath = "$env:APPDATA\npm"
   if ($currentPath -notlike "*$npmPath*") {
       [Environment]::SetEnvironmentVariable('Path', "$currentPath;$npmPath", 'User')
   }
   ```

4. **Restart your terminal or IDE** to load the updated PATH.

### Automated Setup Script

Run the provided script to automatically set everything up:

```powershell
.\setup-firebase-path.ps1
```

This script will:
- Check if firebase-tools is installed
- Install it if missing
- Add npm global bin to PATH (if not already there)
- Refresh PATH in current session
- Verify Firebase CLI works

### Troubleshooting

**If Firebase still doesn't work after restarting:**

1. **Verify installation:**
   ```powershell
   Test-Path "$env:APPDATA\npm\firebase.cmd"
   ```
   Should return `True`

2. **Check PATH in new terminal:**
   ```powershell
   $env:PATH -split ';' | Select-String -Pattern 'npm'
   ```

3. **Manually verify the path:**
   ```powershell
   & "$env:APPDATA\npm\firebase.cmd" --version
   ```

4. **If still not working, reinstall:**
   ```powershell
   npm uninstall -g firebase-tools
   npm install -g firebase-tools
   ```

### Why This Happens

On Windows, when you install a package globally with npm, it installs to `C:\Users\<username>\AppData\Roaming\npm`. This directory needs to be in your PATH environment variable for the command to be accessible.

Sometimes:
- The PATH is set, but the current terminal session hasn't loaded it yet
- The PATH wasn't set correctly during npm installation
- There are permission issues preventing PATH updates

### Additional Notes

- After adding to PATH, you may need to restart your terminal/IDE
- Some IDEs cache the PATH, so a full restart might be necessary
- The PATH is set per-user, so each user account needs it set separately


