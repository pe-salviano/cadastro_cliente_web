<?
session_start();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="imagens/favicon.ico.png" type="image/x-icon">
    <link rel="stylesheet" href="CSS/Style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap" rel="stylesheet">    
    <title>área do cliente</title>
</head>
<body>
    
    <!-- Container, delimita toda a área do formulário. O tamanho será ajustado no CSS -->
    <div class="container">
    
        <div>
            <h2 class="titulo__principal">Área do Cliente</h2>
            <p class="p__informacao">Preencha o formulário, logo entraremos em contato</p>
        </div>
        <?php
        if(isset($_SESSION['msg'])){
            echo $_SESSION['msg'];
            unset ($_SESSION['msg']);
        }
        ?>
        
        <!-- Formulario, toda a parte digitável-->
        <form id="form" class="formulario" method="POST" action="cadastro_msg.php">
            <!-- controle de formulário, comanda todas as div's abaixo -->
            <div class="controle__formulario ">
                <label class="controle__formulario--informacao" for="nome__usuario">Nome</label>
                <input id="nome__usuario" name="nome" type="text" placeholder="Digite seu nome"> <!-- required deixa o campo como obrigatório -->
                <i class="fas fa-exclamation-circle"></i> <!--Adiciona o icone de erro -->
                <i class="fas fa-check-circle"></i> <!--Adiciona o icone de Certo -->
                <small>mensagem</small> <!--Mensagem de erro que será chamada na validaçaõ via JavaScript-->
            </div>
            <!--Separação dos input por DIV e "identificação" por class para facilitar a manipulação via CSS -->
            <div class="controle__formulario">
                <label class="controle__formulario--informacao" for="data__nascimento">Data de nascimento</label>
                <input id="data__nascimento" name="data_nasc" type="date" placeholder="Digite sua data de nascimento"> <!-- Todos inputs tem um name. O name serve para identificar o input na hora de passar para o backend (banco de dados)-->
                <small>Mensagem </small>
            </div>

            <div class="controle__formulario">
                <label class="controle__formulario--informacao" for="cpf">Digite o CPF</label>
                <input id="cpf" name="cpf" type="text" placeholder="Ex.: 425.708.268-84">
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem</small>
            </div>

            <div class="controle__formulario">
                <label class="controle__formulario--informacao" for="contato__telefone">Telefone de contato com DDD</label>
                <input id="contato__telefone" name="telefone" type="tel" placeholder="EX.: 11995243121">
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem</small>
            </div>

            <div class="controle__formulario">
                <label class="controle__formulario--informacao" for="email">E-mail</label>
                <input id="email" name="email" type="text" placeholder="Digite seu E-mail"> 
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem</small>
            </div>

            <div class="controle__formulario">
                <label class="controle__formulario--informacao" for="estado">Estado</label>
                <input id="estado" name="estado" type="text" placeholder="EX.: São Paulo">
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem</small>
            </div>

            <div class="controle__formulario">
                <label class="controle__formulario--informacao" for="cidade">Cidade</label>
                <input id="cidade" name="cidade" type="text" placeholder="EX.: Cajamar">
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem</small>
            </div>

            <div class="controle__formulario">
                <label class="controle__formulario--informacao" for="endereco">Endereço</label>
                <input id="endereco" name="endereco" type="text" placeholder="EX.: Rua diadema, 102">
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem</small>
            </div>

            <div class="controle__formulario">
                <p class="informacao__extra--p">Mensagem (opcional)</p>
                <textarea class="informacao__extra" name="mensagem_cliente" id="mensagem__extra" cols="50" rows="10" maxlength="300" placeholder="Mensagem..."></textarea>
            </div>

            <input class="botao__enviar botao1" name="botao_cadastro" type="submit" value="cadastrar"></input>
        </form>
        
    </div>
    
    <script src="https://kit.fontawesome.com/34bbbc0df8.js" crossorigin="anonymous"></script> <!--Ao invés de utilizar uma imagem SVG para o icone. foi criado um KIT no site fontawesome com os icones que utilizei na verificação -->
    <script src="javaScript/main.js"></script> <!--Chama o arquivo javaScript (sempre tem que estar no final da página)-->
    
</body>
</html>