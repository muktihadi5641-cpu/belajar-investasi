@echo off
setlocal
cd /d "%~dp0"
set PORT=8765

echo.
echo  Belajar Investasi Reader
echo  -------------------------
echo  Laptop:  http://localhost:%PORT%/
echo.
echo  Dari HP (WiFi sama):
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /C:"IPv4 Address"') do (
    for /f "tokens=* delims= " %%b in ("%%a") do echo           http://%%b:%PORT%/
)
echo.
echo  Tekan Ctrl+C untuk stop.
echo.

start "" "http://localhost:%PORT%/"
python -m http.server %PORT% --bind 0.0.0.0
