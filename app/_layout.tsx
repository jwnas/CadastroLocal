import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="tabs"
        options={{ title: 'Menu Principal' }}
      />
      <Stack.Screen
        name="detalhes"
        options={{ title: 'Detalhes do Produto' }}
      />
    </Stack>
  );
}
