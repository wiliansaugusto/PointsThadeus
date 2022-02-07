<?php

use App\Http\Controllers\api\ApiController;

Route::get('usuarios',[ApiController::class,'index']);
Route::post('usuarionovo',[ApiController::class,'saveUser']);
Route::get('usuario/{id}', [ApiController::class,'usuarioId']);
Route::post('login',[ApiController::class,'login']);
