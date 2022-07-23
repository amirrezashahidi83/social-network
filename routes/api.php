<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FollowController;

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
Route::post('/editpost',[PostController::class,'getPost']);
Route::post('/post',[PostController::class,'getPost']);
Route::post('/getuserposts',[PostController::class,'getUserPosts']);
Route::post('/deletepost',[PostController::class,'deletePost']);
Route::post('/searchpost',[PostController::class,'searchPost']);

Route::post('/addcomment',[CommentController::class,'addComment']);
Route::post('/editcomment',[CommentController::class,'editComment']);
Route::get('/getcomment',[CommentController::class,'getComment']);
Route::get('/getpostcomments',[CommentController::class,'getPostComments']);
Route::post('/deletecomment',[CommentController::class,'deleteComment']);

Route::post('/follow',[FollowController::class,'follow']);
Route::post('/unfollow',[FollowController::class,'unfollow']);
Route::post('/getsuggestions',[FollowController::class,'getSuggestions']);

Route::get('/user/{username}',[UserController::class,'getUser']);
Route::get('/searchuser/{search}',[UserController::class,'searchUser']);
Route::get('/deleteuser/{username}',[UserController::class,'deleteUser']);