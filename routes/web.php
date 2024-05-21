<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('login');
});
Auth::routes();
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::post('pusher/auth', function() {
    return auth()->user();
});
