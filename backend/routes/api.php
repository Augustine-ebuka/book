<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Authentication;
use App\Http\Controllers\BookSearchController;
use App\Http\Controllers\TwilioSMSController;

// Route::post('/auth/register', [UserController::class, 'createUser']);
// Route::post('/auth/login', [UserController::class, 'loginUser']);

Route::post('/login', [Authentication::class, 'loginUser']);
Route::get('/login', [Authentication::class, 'checklogin']);
Route::post('/register', [Authentication::class, 'createUser']);
Route::post('/verify', [Authentication::class, 'verify']);
Route::get('/logout', [Authentication::class, 'logout']);
// Route::get('/login', function () {
//     return response()->json(['message' => 'Authentication required'], 401);
// })->name('login');

Route::get('/sendSMS', [TwilioSMSController::class, 'index']);

Route::get('/book/search',[BookSearchController::class, 'searchBooks'] );
Route::post('/book/search',[BookSearchController::class, 'searchBooks'] );
Route::middleware('auth:sanctum')->get('/profile',[Authentication::class, 'profile'] );
// Route::middleware('auth:sanctum')->get('/book/search',[BookSearchController::class, 'searchBooks'] );


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
