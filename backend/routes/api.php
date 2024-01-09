<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookSearchController;
use App\Http\Controllers\TwilioSMSController;

// route without protection
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/verify', [TwilioSMSController::class, 'index']);

// protected route
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [AuthController::class, 'user']);
    Route::match(['post','get'],'/logout', [AuthController::class, 'logout']);
    Route::post('/book/search/specific', [BookSearchController::class, 'searchBooks']);
    Route::match(['post','get'],'/book/search/all', [BookSearchController::class, 'allBooks']);
});
