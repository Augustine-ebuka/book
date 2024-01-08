<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Authentication;
use App\Http\Controllers\BookSearchController;
use App\Http\Controllers\TwilioSMSController;

// Authentication
Route::post('/login', [Authentication::class, 'loginUser']);
Route::get('/login', [Authentication::class, 'checklogin']);
Route::post('/register', [Authentication::class, 'createUser']);
Route::post('/verify', [Authentication::class, 'verify']);
Route::get('/logout', [Authentication::class, 'logout']);


Route::get('/sendSMS', [TwilioSMSController::class, 'index']);

// Protected Route
Route::match(['get', 'post'],'/book/search/all',[BookSearchController::class, 'allBooks']);
Route::post('/book/search/specific',[BookSearchController::class, 'searchBooks']);
Route::middleware('auth:sanctum')->get('/profile',[Authentication::class, 'profile'] );
// Route::middleware('auth:sanctum')->get('/book/search',[BookSearchController::class, 'searchBooks'] );


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
