<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Points Thadeus</title>
    <!--Estilo propio-->
    <link rel="stylesheet" href="loginpage.css" />
    <link rel="stylesheet" href="estilo.css" />
    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>

    <!--Icones do Google fonts-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />


    <meta http-equiv="Access-Control-Allow-Origin" content="*" />
    <meta http-equiv="Access-Control-Allow-Headers" content="X-Requested-With" />


    <!--favicon-->
    <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
    <link rel="icon" href="assets/favicon.ico" type="image/x-icon">

</head>

<body>
    <?php @include("navegador.html")?>


    <div class="row corpoLogin">
        <div class="col "></div>
        <div class="col-lg-5 col-sm-12 container ">
            <div class="card">
                <img src="assets/entrada.jpg" class=" imagemEntrada img-thumbnail " alt="Foto do tio tadeus">
                <div class="card-body">
                    <h1 class="card-text text-center">Bem vindo</h1>
                    <hr>
                    <div class="container">
                        <form action="" method="post">
                          <h3 class="text-center">Login</h3>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="username" id="username" title="Iniira o seu CPF ou Email">
                                <label for="username">CPF ou Email</label><br>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" title="Insira a sua senha" name="password" id="password">
                                <label for="password">Senha</label>
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-primary btn-color" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="col "></div>

    </div>

    <footer>
        <?php @include("footer.html")?>
    </footer>

    <!--JS para as mascaras-->
    <script src="https://code.jquery.com/jquery-1.9.1.js"></script>

</body>

</html>