### Setup Lokal Mobile

```bash
cd mobile
npm install

# Setup environment
cp .env.example .env.local
# Edit API_URL di .env.local
cek ipconfig di terminal baru
copy IPv4 ke .env.local
misal 192.168.0.1
LOCAL_API_URL=http://192.168.0.1:8000/api

# Run Expo
# kalo hp sama laptopnya satu WiFi
npx expo start --clear --lan
# kalo beda
npx expo start --clear --tunnel
```