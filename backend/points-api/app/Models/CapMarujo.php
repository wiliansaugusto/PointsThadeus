<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CapMarujo extends Model
{
    protected $table ="tbl_cap_marujo";
    protected $fillable=[
        'id',
        'idCapitao',
        'idMarujo'
    ];
}
