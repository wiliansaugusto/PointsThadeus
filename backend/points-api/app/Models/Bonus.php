<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bonus extends Model
{
  protected $table = 'bonus';
  protected $fillable = [
      'id',
      'bonus',
      'pontos_bonus',
      'idUsuario'
  ];

}
