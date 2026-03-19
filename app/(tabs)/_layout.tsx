import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Listagem de Produtos' }}
      />
      <Stack.Screen
        name="produtoForm"
        options={{ title: 'Novo Produto' }}
      />
    </Stack>
  );
}
