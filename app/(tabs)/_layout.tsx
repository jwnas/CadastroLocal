import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'index') {
          iconName = 'list';
        } else if (route.name === 'produtoForm') {
          iconName = 'add-circle';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Produtos' }}
      />
      <Tabs.Screen
        name="produtoForm"
        options={{ title: 'Adicionar' }}
      />
    </Tabs>
  );
}
