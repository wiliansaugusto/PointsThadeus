<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index(){
    return Usuario::all();
}
    public function login(Request $request){
         $nmUsuario = Usuario::where('email',$request->email )->where('password', $request->password)->first();
        if($nmUsuario){
            return response($nmUsuario,200);

        }else{
            return response()->json([
                "message" => "Usuario not found"
            ], 404);
        }

    }

    public function saveUser(Request $request){
        $user = new Usuario;
        $user->nomeCompleto = $request->nomeCompleto;
        $user->categoria = $request->categoria;
        $user->nmUsuario = $request->nmUsuario;
        $user->dtNascimento = $request->dtNascimento;
        $user->email= $request->email;
        $user->password = $request->password;
        $user->pontos = $request->pontos;
        $user->save();
        return response()->json([
            "message" => "student record created"
        ], 201);
    }
    public function usuarioId($id) {
        if (Usuario::where('id', $id)->exists()) {
            $usuario = Usuario::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($usuario, 200);
        } else {
            return response()->json([
                "message" => "Usuario not found"
            ], 404);
        }
    }
}
