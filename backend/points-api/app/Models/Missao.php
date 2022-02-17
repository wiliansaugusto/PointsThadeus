<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Missao extends Model
{
    protected $table="missao";
    protected $fillable = [
        'id',
        'missao',
        'pontos_missao',
        'idUsuario'
    ];

}
