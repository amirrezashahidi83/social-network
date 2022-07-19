<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login',[AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);

Route::post('/addpost',[PostController::class,'addPost']);
Route::post('/getpost',[PostController::class,'getPost']);
Route::post('/getuserposts',[PostController::class,'getUserPosts']);
Route::post('/deletepost',[PostController::class,'deletePost']);
Route::post('/searchpost',[PostController::class,'searchPost']);


Route::get('/user/{username}',[UserController::class,'getUser']);
Route::get('/searchuser/{search}',[UserController::class,'searchUser']);
Route::get('/deleteuser/{username}',[UserController::class,'deleteUser']);