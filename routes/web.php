<?php

use App\Http\Controllers\GejalaController;
use App\Http\Controllers\KodeGejalaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RuleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/welcome', [GejalaController::class, 'index']);

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/diagnose', function () {
    $gejala = app(GejalaController::class)->index();
    $kodeGejalaGroups = app(KodeGejalaController::class)->index();

    return Inertia::render('Diagnose', [
        'gejala' => $gejala,
        'kode_gejala' => $kodeGejalaGroups,
    ]);
})->middleware(['auth', 'verified'])->name('diagnose');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/api/store-result', 'ResultController@store');



require __DIR__ . '/auth.php';
