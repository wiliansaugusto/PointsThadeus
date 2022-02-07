<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = "usuarios";
    protected $fillable =
        [
            'id',
            'nomeCompleto',
            'categoria',
            'nmUsuario',
            'dtNascimento',
            'pontos',
            'email',
            'password'
        ];
}
