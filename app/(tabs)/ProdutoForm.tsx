import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../CommonStyles';
import GestorDados from '../../dados/GestorDados';
import Produto from '../../dados/Produto';

export default function ProdutoForm() {
  const gestor = new GestorDados();
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const salvar = () => {
    const prodAux = new Produto(parseInt(codigo), nome, parseInt(quantidade));
    gestor.salvar(prodAux).then(() => {
      setCodigo('');
      setNome('');
      setQuantidade('');
    });
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Código"
        keyboardType="numeric"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonTextBig}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
