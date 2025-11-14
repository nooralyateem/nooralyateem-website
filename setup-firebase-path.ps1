# Firebase Tools PATH Setup Script
# This script ensures Firebase CLI is accessible in your current PowerShell session

Write-Host "Checking Firebase Tools installation..." -ForegroundColor Cyan

# Check if firebase-tools is installed globally
$firebaseInstalled = npm list -g firebase-tools 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Firebase Tools is not installed globally." -ForegroundColor Yellow
    Write-Host "Installing firebase-tools..." -ForegroundColor Cyan
    npm install -g firebase-tools
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install firebase-tools. Please check your npm installation." -ForegroundColor Red
        exit 1
    }
}

# Get npm global bin directory
$npmGlobalPath = npm config get prefix
$npmGlobalBin = "$npmGlobalPath"

# Check if npm global bin is in PATH
$currentPath = [Environment]::GetEnvironmentVariable('Path', 'User')
if ($currentPath -notlike "*$npmGlobalBin*") {
    Write-Host "Adding npm global bin directory to user PATH..." -ForegroundColor Cyan
    [Environment]::SetEnvironmentVariable('Path', "$currentPath;$npmGlobalBin", 'User')
    Write-Host "Added to PATH permanently. Please restart your terminal." -ForegroundColor Green
} else {
    Write-Host "npm global bin directory is already in PATH." -ForegroundColor Green
}

# Refresh PATH in current session
$env:PATH = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Verify Firebase is accessible
Write-Host "`nVerifying Firebase CLI..." -ForegroundColor Cyan
try {
    $firebaseVersion = firebase --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Firebase CLI is working! Version: $firebaseVersion" -ForegroundColor Green
        Write-Host "`nYou can now use 'firebase' commands in this terminal session." -ForegroundColor Green
    } else {
        Write-Host "✗ Firebase CLI is not accessible. Please restart your terminal." -ForegroundColor Yellow
    }
} catch {
    Write-Host "✗ Firebase CLI is not accessible. Please restart your terminal." -ForegroundColor Yellow
}

Write-Host "`nNote: If you open a new terminal, Firebase should work automatically." -ForegroundColor Cyan
Write-Host "If it doesn't work in a new terminal, restart your computer or IDE." -ForegroundColor Cyan



