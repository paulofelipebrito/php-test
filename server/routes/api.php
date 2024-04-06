<?php

use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;

Route::get('client/filter', [ClientController::class, 'filter']);
Route::apiResources([
    'client' => ClientController::class,
]);

