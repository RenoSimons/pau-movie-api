<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\homeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [homeController::class, 'index'])->name('index');

Route::post('/search', [homeController::class, 'search']);

Route::get('/show/{id}', [homeController::class, 'show'])->name('show');

Route::post('/show/seasons/episodesave', [homeController::class, 'saveEpisode'])->name('episodesave');
