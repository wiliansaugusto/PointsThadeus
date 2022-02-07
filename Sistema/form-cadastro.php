<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Points Thadeus</title>
    <!--Estilo propio-->
    <link rel="stylesheet" href="form-css.css" />
    <link rel="stylesheet" href="estilo.css" />
    <!--Bootstrap-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!--Icones do Google fonts-->
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
      rel="stylesheet"
    />

    
    <meta http-equiv="Access-Control-Allow-Origin" content="*" />
    <meta http-equiv="Access-Control-Allow-Headers" content="X-Requested-With" /> 

    
    <!--favicon-->
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
    <link rel="icon" href="assets/favicon.ico" type="image/x-icon">
    
  </head>
<body>
<?php @include("navegador.html")?>

    <div class="row corpo ">
      <div class="col barraEsquerda"></div>
      <div class="col-lg-8 col-md-8 col-sm-12 container">
      <div class="card">
        <div class="card-header">
          Formulario de Cadastro 
        </div>
        <div class="card-body">
        <h5 class="card-title" > <span id="tpform" ></span> usuário &nbsp;<span class="material-icons-round">
        insert_emoticon
        </span></h5>
        <hr >
        <p class="card-text">informar todos os dados corretamente! <br>
        Todos os campos são obrigatórios</p>
        <hr>
        <form action="#" method="post" id="form">
          <div class="mb-3">
        <label for="nomeCompleto" c>Nome Completo</label>
        <input type="text" class="form-control" name="nome" id="nomeCompleto" placeholder="Insira o seu nome aqui" required >
        </div>  
        <label for="cpf" class="form-label">CPF</label>
        <input type="text" class="form-control cpf" name="cpf" id="cpf"
           maxlength="14" autocomplete="off" 
          placeholder="Insira o seu CPF" required >
        <label class="form-label" for="dtNascimento">Data de Nascimento</label>
        <input class="form-control" type="date" name="dtNascimento" id="dtNascimento" required>
        <label class="form-label" for="tpUsuario">Tipo de Usuário</label>
        <select class="form-select " name="tpUsuario"aria-label=".form-select-lg example" required>
        <option selected>Escolher Usuário</option>
          <option value="1">Mestre</option>
          <option value="2">Pupilo</option>
        </select>
        <hr>
        <p>A senha deve conter no minimo 8 e no máximo 16 caracteres e deve ser composta de numeros e letras</p>
        <label for="nmUsuario" class="form-label">Nome de Usuario</label>
        <input class="form-control" type="text" name="nmUsuaio" id="nmUsuario" required>
        <label for="email" class="form-label">Email</label>
        <input class="form-control" type="email" name="email" id="email" required>
        <label class="form-label" for="pwd1">Senha: </label>
        <input class="form-control" name="pwd1" id="pwd1" type="password" minlength="4" pattern="[0-9a-zA-Z]{4,12}"
        placeholder="Digite a senha" required >
        <label class="form-label" for="pwd2">Confirme a Senha:</label>
        <input class="form-control" name="pwd2" id="pwd2" type="password" pattern="[0-9a-zA-Z]{4,12}"
        placeholder="Confirme a senha" required>
        <br>
        </div> 
        <button class="btn btn-success" type="button" onclick="salvar()">Enviar</button>
        </form>
        
      </div>
      
      </div>
      <div class="col barraDireita"></div>
    </div>
<footer>
  <?php @include("footer.html")?>
</footer>


 <!--JS para as mascaras-->
 <script src="https://code.jquery.com/jquery-1.9.1.js"></script>
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.js"></script> <script src="mascaras.js"crossorigin="anonymous" ></script>
 <script type="text/javascript" src="form.js"></script>

</body>
</html>
