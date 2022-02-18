<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Bonus;
use App\Models\CapMarujo;
use App\Models\Missao;
use App\Models\Penalidades;
use App\Models\Premio;
use App\Models\Usuario;
use http\Env\Response;
use Illuminate\Http\Request;
use function Sodium\add;

class ApiController extends Controller
{
    public function index()
    {
        return Usuario::all();
    }

    public function login(Request $request)
    {

        $usuario = Usuario::where('email', $request->email)->where('password', $request->password)->first();
        if ($usuario) {
            return response()->json([
                "nmUsuario"=>$usuario->nmUsuario,
                "idCapitao"=> $usuario->id,
                "pontos"=>$usuario->pontos,
                "categoria"=>$usuario->categoria
            ],200);

        } else {
            return response()->json([
                "message" => "Usuario not found"
            ], 404);
        }

    }

    public function saveUser(Request $request)
    {
        if (Usuario::where("email", $request->email)->exists()) {
            return response()->json([
                "mensage" => "Email já cadastrado"
            ]);
        }
        if ($request->categoria == "marujo") {
            $user = new Usuario;
            $user->nomeCompleto = $request->nomeCompleto;
            $user->categoria = $request->categoria;
            $user->nmUsuario = $request->nmUsuario;
            $user->dtNascimento = $request->dtNascimento;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->pontos = $request->pontos;
            $user->save();
            $marujo = new CapMarujo();
            $marujo->idCapitao = $request->idCapitao;
            $marujo->idMarujo =  $user->id;
            $marujo->save();
            return response()->json(
                ['mensagem' => "Marujo aceito", 200]
            );
        } else {
            $user = new Usuario;
            $user->nomeCompleto = $request->nomeCompleto;
            $user->categoria = $request->categoria;
            $user->nmUsuario = $request->nmUsuario;
            $user->dtNascimento = $request->dtNascimento;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->pontos = $request->pontos;
            $user->save();
            return response()->json([
                "message" => "student record created"
            ], 201);
        }
    }
    public function usuarioId($id)
    {
        if (Usuario::where('id', $id)->exists()) {
            $usuario = Usuario::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($usuario, 200);
        } else {
            return response()->json([
                "message" => "Usuario not found"
            ], 404);
        }
    }

    public function savePremio(Request $request)
    {
        $item = new Premio();
        $item->premio = $request->premio;
        $item->pontosPremio = $request->pontosPremio;
        $item->idUsuario = $request->idUsuario;
        $item->save();
        $premio = Premio::where("idUsuario", $request->idUsuario)->get()->toJson(JSON_PRETTY_PRINT);
        return response($premio, 201);

    }

    public function saveMissao(Request $request)
    {
        $item = new Missao();
        $item->missao = $request->missao;
        $item->pontos_missao = $request->pontos_missao;
        $item->idUsuario = $request->idUsuario;
        $item->save();
        return response()->json([
            "message" => "Mission Saved"
        ], 201);
    }

    public function missionId($id)
    {
        if (Missao::where('idUsuario', $id)->exists()) {
            $missao = Missao::where('idUsuario', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($missao, 200);
        } else {
            return response()->json([
                "message" => "Mission not found"
            ], 404);
        }
    }

    public function premioId($id)
    {
        if (Premio::where('idUsuario', $id)->exists()) {
            $premio = Premio::where('idUsuario', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($premio, 200);
        } else {
            return response()->json([
                "message" => "Mission not found"
            ], 404);
        }
    }

    public function deleteMission($id)
    {
        $item = Missao::find($id);
        $item->delete();
        return response()->json([
            "Messagem" => "Item deletado com sucesso"
        ], 200);
    }

    public function deletePremio($id)
    {
        $item = Premio::find($id);
        $item->delete();
        return response()->json([
            "Messagem" => "Item deletado com sucesso"
        ], 200);
    }

    public function addPontos(Request $request)
    {
        $item = Usuario::find($request->id);
        $item->pontos = $request->pontos + $item->pontos;
        $item->save();
        return response($item->pontos, 200);
    }

    public function deletePontos(Request $request){
        $item = Usuario::find($request->id);
        $item->pontos = $item->pontos - $request->pontos  ;
        $item->save();
        return response($item, 200);
    }

    public function addPontosBonus(Request $request){
        $item = Usuario::find($request->id);
        $item->pontos = $item->pontos + $request->pontos_bonus;
        $item->save();
        $pontosbonus = new Bonus();
        $pontosbonus->idUsuario = $request->id;
        $pontosbonus->pontos_bonus = $request->pontos_bonus;
        $pontosbonus->bonus= $request->bonus;
        $pontosbonus->save();

        return response()->json([
            'messagem'=>'Pontos salvo com sucesso'
        ]);

    }
    public function getPontosBonus(Request $request){
        $item = Bonus::where('idUsuario', $request->id)->get()->toJson(JSON_PRETTY_PRINT);
        return response($item, 200);
    }

    public function addPontosPenalidade(Request $request){
        $item = Usuario::find($request->id);
        $item->pontos = $item->pontos - $request->pontos_penalidade;
        $item->save();
        $penalidade = new Penalidades();
        $penalidade->penalidade = $request->penalidade;
        $penalidade->pontos_penalidade = $request->pontos_penalidade;
        $penalidade->idUsuario = $request->id;
        $penalidade->save();
        return response()->json([
            'messagem' => 'Penalidade salva com sucesso'
        ]);

    }

    public function getPontosPenalidade(Request $request){
        $item = Penalidades::where('idUsuario', $request->id)->get()->toJson(JSON_PRETTY_PRINT);
        return response($item, 200);
    }

    public function  getCapMar($id){

        $marujo = CapMarujo::where('idCapitao', $id)->get();
         $usuario =  Array();

        foreach ($marujo  as $value){
           $assoc =  Usuario::where("id", $value->idMarujo)->get(['id', 'nmUSuario', 'pontos']);

            array_push($usuario, $assoc ) ;

        }
        $userDecode = json_encode($usuario);
        return response($userDecode, 200);
    }

    public function userCategoria($id){
        return response (Usuario::where("id",$id)->get('categoria')->toJson(JSON_PRETTY_PRINT), 200);
    }
}
