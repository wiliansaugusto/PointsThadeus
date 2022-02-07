<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Points Thadeus</title>
    <!--Estilo propio-->
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
        <h2>Bem vindo ao Points Thadeus</h2>
        <p>Desenvolvido por mim Willians Tadeu, ou tio Thadeus, é um pequeno sistema para gerenciamento de pontos!</p>
        <p>Esses pontos são atribuidos por tarefas realizadas para mim, por exemplo todos vez que os meus sobrinhos vem em minha casa,
             e realizam alguma tarefa ganham pontos, ou quando eu combino algo tipo escrever uma redação, ler um texto, até mesmo fazer um desenho,
            ganham pontos, resumindo cada tarefa realizada ganham pontos</p>
            <p>E juntos decidimos, metas! Isso mesmo METAS!</p>
            <p>Na vida nada vem de graça, eu troco os pontos por algo que eles desejam!</p>
            <p>Exemplo de pontuação</p>
            <table class="table table-striped">
                <tr class="centertr" scope="row">
                    <th>Tarefa</th>
                    <th   >Pontos</th>
                    
                </tr>
                <tr>
                    <td>Lavar a louça</td>
                    <td>5 pontos</td>
                </tr>
                
                <tr>
                    <td>Varrer a casa</td>
                    <td>5 pontos</td>
                </tr>
                
                <tr>
                    <td>Escrever uma redação(livro)</td>
                    <td>30 pontos</td>
                </tr>
              </table>

              <p>E por ai vai.......</p>
              <p>Até ai sem novidades, tarefa realizada pontos ganhos!</p>
              <p>Dai pra frente ou eles resgatam pessoalmente comigo ou através das metas</p>

              <table class="table table-striped">
                <tr class="centertr" scope="row">
                    <th>Premios</th>
                    <th>Pontos</th>
                    
                </tr>
                <tr>
                    <td>Capinha nova do celular</td>
                    <td>200 pontos</td>
                </tr>
                
                <tr>
                    <td>Jogo de video game novo</td>
                    <td>500 pontos</td>
                </tr>
                <tr>
                    <td>Cinema</td>
                    <td>100 pontos</td>
                </tr>
                <tr>
                    <td>Moeda de jogos</td>
                    <td>300 pontos</td>
                </tr>
              </table>
              <p>Somente os maiores de 18 anos farão as metas e definiram as tarefas</p>
              <p>Os adultos também poderam fazer os seus propios sistemas de pontos e metas</p>
              <h4>Pontos e metas dos adultos!</h4>
              <table class="table table-striped">
                <tr class="centertr" scope="row">
                    <th>Tarefas</th>
                    <th>Pontos</th>
                    <th class="cor2">Premios</th>
                    <th class="cor2">Pontos</th>
                    
                </tr>
                <tr>
                    <td>Manter a dieta - semana</td>
                    <td>50 pontos</td>
                    <td>Restaurante final de semana</td>
                    <td>200 pontos</td>
                </tr>
                
                <tr>
                    <td>Academia 4x semana</td>
                    <td>100 pontos</td>
                    <td>Cerveja com os amigos</td>
                    <td>1000 pontos</td>
                </tr>
                <tr>
                    <td>Não procrastinar</td>
                    <td>500 pontos</td>
                    <td>Ir ao cinema</td>
                    <td>100 pontos</td>
                </tr>
                <tr>
                    <td>Correr 5 km 3x semana</td>
                    <td>50 pontos</td>
                    <td>Tenis novo de corrida</td>
                    <td>1000 pontos</td>
                </tr>
              </table>
              <br>
              <p>E ai curtiu? basta se inscrever em nosso sistema e aproveitar para incentivar as crianças a 
                  educação financeira ou ussar para você mesmo controlando as suas própias metas! </p>
      </div>
      <div class="col barraDireita"></div>
    </div>
<footer>
  <?php @include("footer.html")?>
</footer>

</body>
</html>
