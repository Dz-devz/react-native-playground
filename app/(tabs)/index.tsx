import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return(
  <SafeAreaView>
  <Text className='text-2xl text-white text-center flex items-center justify-center font-bold'>
    Hello Darwin</Text>
  </SafeAreaView>
);
}
