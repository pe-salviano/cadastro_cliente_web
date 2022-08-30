<?php
session_start(); // inicializa a sessão
include_once 'conexao.php';

//verifica se o usuario clicou no botão, clicou no botão acessa o IF  e tenta cadastrar, caso contrario acessa o else

$botao_cadastro = filter_input(INPUT_POST,'botao_cadastro', FILTER_UNSAFE_RAW);
if($botao_cadastro){

}else{
    $_SESSION['msg'] = "<p style='color=red;'> Mensagem não foi enviada</p>";
    header("Location: formulario.php");
}

?>