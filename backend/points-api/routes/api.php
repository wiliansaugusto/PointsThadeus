<?php

use App\Http\Controllers\api\ApiController;

Route::get('usuarios',[ApiController::class,'index']);
Route::post('usuarionovo',[ApiController::class,'saveUser']);
Route::get('usuario/{id}', [ApiController::class,'usuarioId']);
Route::post('login',[ApiController::class,'login']);
Route::post('newpremio',[ApiController::class,'savePremio']);
Route::post('newmission',[ApiController::class,'saveMissao']);
Route::get('missionId/{id}',[ApiController::class,'missionId']);
Route::get('premioId/{id}',[ApiController::class,'premioId']);
Route::delete('mission_delete/{id}',[ApiController::class,'deleteMission']);
Route::delete('premio_delete/{id}',[ApiController::class,'deletePremio']);
Route::post('addpontos', [ApiController::class, 'addPontos']);
Route::post('deletepontos', [ApiController::class,'deletePontos']);
Route::post('addbonuspontos', [ApiController::class,'addPontosBonus']);
Route::post('addpenalidadepontos', [ApiController::class,'addPontosPenalidade']);
Route::get('getbonus/{id}', [ApiController::class,'getPontosBonus']);
Route::get('getpenalidades/{id}', [ApiController::class,'getPontosPenalidade']);
Route::get("cap-mar/{id}", [ApiController::class, 'getCapMar']);
Route::get("usercategoria/{id}", [ApiController::class, 'userCategoria']);
