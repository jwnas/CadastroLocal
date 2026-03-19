import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../../CommonStyles';
import ProdutoItem from '../../components/ProdutoItem';
import GestorDados from '../../dados/GestorDados';

export default function ProdutoLista() {
  const gestor = new GestorDados();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    gestor.listar().then(objs => setProdutos(objs));
  }, []);

  const myKeyExtractor = item => item.codigo.toString();

  function excluirProduto(codigo) {
    gestor.remover(codigo).then(() => {
      gestor.listar().then(objs => setProdutos(objs));
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.scrollContainer}
        data={produtos}
        contentContainerStyle={styles.itemsContainer}
        keyExtractor={myKeyExtractor}
        renderItem={({ item }) => (
          <ProdutoItem
            onDelete={() => excluirProduto(item.codigo)}
            produto={item}
          />
        )}
      />
    </View>
  );
}
