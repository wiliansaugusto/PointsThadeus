<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penalidades extends Model
{

    protected  $table= "penalidades";
    protected  $fillable = [
        'id',
        'penalidade',
        'pontos_penalidade',
        'idIsuario'
];

}
