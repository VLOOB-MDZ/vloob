@echo off
echo Starting VLOOB portfolio...

:: Kill any existing server on port 3000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000 " 2^>nul') do (
  taskkill /PID %%a /F >nul 2>&1
)

:: Start the server in a hidden background window
start "" /min cmd /c "cd /d "%~dp0" && node serve.mjs"

:: Wait for server to start
timeout /t 2 /nobreak >nul

:: Open in default browser
start "" "http://localhost:3000"
