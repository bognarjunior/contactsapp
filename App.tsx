import { 
  useFonts, 
  Ubuntu_700Bold, 
  Ubuntu_500Medium, 
  Ubuntu_400Regular 
} from '@expo-google-fonts/ubuntu';
import Home from '@/app/home';
import Loading from '@/components/loading';
import { StatusBar } from 'react-native';
import React from 'react';
export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold, 
    Ubuntu_500Medium, 
    Ubuntu_400Regular
  })

  if(!fontsLoaded){
    return <Loading />
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Home />
    </>
  );
}

