<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Authentication;
use App\Http\Controllers\BookSearchController;

// Route::post('/auth/register', [UserController::class, 'createUser']);
// Route::post('/auth/login', [UserController::class, 'loginUser']);

Route::post('/login', [Authentication::class, 'loginUser']);
Route::post('/register', [Authentication::class, 'createUser']);
Route::post('/verify', [Authentication::class, 'verify']);
Route::get('/logout', [Authentication::class, 'logout']);
// Route::get('/login', function () {
//     return response()->json(['message' => 'Authentication required'], 401);
// })->name('login');



// Route::get('/book/search',[BookSearchController::class, 'searchBooks'] )->middleware('auth:api');
Route::middleware('auth:sanctum')->get('/profile',[Authentication::class, 'profile'] );
Route::middleware('auth:sanctum')->get('/book/search',[BookSearchController::class, 'searchBooks'] );


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
