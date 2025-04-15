
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.0ce77c267f614fb78d5cffb52e50e6a9',
  appName: 'finny-react-clone',
  webDir: 'dist',
  server: {
    url: 'https://0ce77c26-7f61-4fb7-8d5c-ffb52e50e6a9.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: "always"
  },
  android: {
    backgroundColor: "#ffffff"
  }
};

export default config;
