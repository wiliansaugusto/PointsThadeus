<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Points Thadeus</title>
    <!--Estilo propio-->
    <link rel="stylesheet" href="estilo.css" />
    <link rel="stylesheet" href="dashboard.css">
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
    <div class="corpodashboard  ">
        <div class="row primeiraLinha ">
            <div class="col-lg-10 col-sm-12  ">
                <h2>Olá <strong>Fulano</strong> seja bem vindo!</h2>
                <p>Esse é o nosso dashboard nele voce irá cadastrar as tarefas e acompamnhar as suas metas!</p>
            </div>
            <div class="col-lg-2 col-sm-12   ">
                <div class="card">
                    <div class="card-header">
                        <h4 class="text-center">Seus Pontos</h4>
                    </div>
                    <div class="card-body">
                        <p class="card-text text-center"><strong>Pontuação</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row linhaBotao">
        <div class="col-sm-12 col-lg-3">
            <button class="btn btnLarge " type="button" data-bs-toggle="collapse" data-bs-target="#segundaLInhaCollapse"
                aria-expanded="false" aria-controls="segundaLInhaCollapse">
                Suas Metas
            </button>
        </div>
        <div class="col-sm-12 col-lg-3">
            <button class="btn btnLarge " type="button" data-bs-toggle="collapse"
                data-bs-target="#terceiralinhaCollapse" aria-expanded="false" aria-controls="terceiralinhaCollapse">
                Meta Pupilos
            </button>
        </div>
        <div class="col-sm-12 col-lg-3"> <button class="btn btnLarge">Cadastrar Tarefa</button></div>
        <div class="col-sm-12 col-lg-3"> <button type="button" class="btn btnLarge">Cadastrar Meta</button>
        </div>
        <hr style="margin-top: 1.25rem;">
    </div>
    <div class="collapse" id="segundaLInhaCollapse">
        <div class="row segundaLinha ">
            <div class="col-lg-12 col-sm-12 linhaFechar">
                <h2 style="position:absolute; left:5%;"><strong>Fulano de tal</strong></h2>
                <button class="btn btnFechar " type="button" data-bs-toggle="collapse" data-bs-target="#segundaLInhaCollapse"
                    aria-expanded="false" aria-controls="segundaLInhaCollapse">
                    <span class="material-icons-round">
                        cancel
                    </span> fechar
                </button>
            </div>
            <div class="col-lg-6 col-sm-12  container">
                <hr>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Pontos</th>
                            <th class="text-center w30">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ir a academia 3x por semana</td>
                            <td>450 p</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Feito</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut voluptas, est odit
                                reiciendis, tenetur veritatis delectus cum temporibus architecto amet doloribus ab porro
                                quisquam veniam cupiditate molestias voluptatum doloremque! </td>
                            <td>450 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Feito</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>lorem</td>
                            <td>300 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Feito</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Lavar a louça</td>
                            <td>450 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Feito</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4 col-sm-12 container">
                <hr>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Meta</th>
                            <th>Pontos</th>
                            <th class="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid molestias
                                deleniti laboriosam repudiandae voluptatem ipsa ut ratione iusto hic, fugit, omnis porro
                                optio illum quod laudantium nihil dolorum. Aut?</td>
                            <td>1200 p</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Resgatar</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Compra jogo de video Game </td>
                            <td>800 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Resgatar</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Viajar final de semana</td>
                            <td>3000 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Resgatar</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="collapse " id="terceiralinhaCollapse">
        <div class="row">
            <div class="col-lg-12 col-sm-12 linhaFechar">
                <div class="card-pupilo">
                    <h2> <strong>Beltrano</strong> </h2>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="text-center">Seus Pontos</h4>
                        </div>
                        <div class="card-body">
                            <p class="card-text text-center"><strong>Pontuação</strong></p>
                        </div>
                    </div>
                </div>
                <button class="btn btnFechar " type="button" data-bs-toggle="collapse" data-bs-target="#terceiralinhaCollapse"
                    aria-expanded="false" aria-controls="terceiralinhaCollapse">
                    <span class="material-icons-round">
                        cancel
                    </span> fechar
                </button>
            </div>
            <div class="col-lg-6 col-sm-12  container">
                <hr>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Pontos</th>
                            <th class="text-center w30">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aulas de Karate</td>
                            <td>450 p</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Feito</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut voluptas, est odit
                                reiciendis, tenetur veritatis delectus cum temporibus architecto amet doloribus ab porro
                                quisquam veniam cupiditate molestias voluptatum doloremque! </td>
                            <td>450 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Feito</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit libero voluptatum asperiores dignissimos aspernatur aliquam sequi harum error, dolorem accusamus! Nostrum ipsa temporibus ut beatae voluptatem animi distinctio doloremque?</td>
                            <td>300 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Feito</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Lavar a louça</td>
                            <td>450 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Feito</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4 col-sm-12 container">
                <hr>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Meta</th>
                            <th>Pontos</th>
                            <th class="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>Compra Skate </td>
                            <td>800 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Resgatar</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Viajar final de semana</td>
                            <td>3000 points</td>
                            <td class="text-center">
                                <button class="btn btn-primary">Resgatar</button>
                                <button class="btn btn-danger">Apagar</button>
                                <button class="btn btn-warning">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div>
    </div>
    <footer>
        <?php @include("footer.html")?>
    </footer>


    <!--JS carrega paginas footer e nav-->
    <script src="https://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="dashboard.js" crossorigin="anonymous"></script>
</body>

</html>