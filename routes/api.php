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

Route::post('/post/new',[PostController::class,'newPost']);
Route::post('/post/edit',[PostController::class,'getPost']);
Route::post('/post',[PostController::class,'getPost']);
Route::post('/post/recent',[PostController::class,'getRecentPosts']);
Route::post('/user/posts',[PostController::class,'getUserPosts']);
Route::post('/post/delete',[PostController::class,'deletePost']);
Route::post('/post/search',[PostController::class,'searchPost']);
Route::post('/post/like',[PostController::class,'likePost']);
Route::get('/post/{post_id}/comments',[CommentController::class,'getPostComments']);

Route::post('/comment/new',[CommentController::class,'addComment']);
Route::post('/comment/edit',[CommentController::class,'editComment']);
Route::get('/comment/{id}',[CommentController::class,'getComment']);
Route::post('/comment/delete',[CommentController::class,'deleteComment']);

Route::post('/follow',[FollowController::class,'follow']);
Route::post('/unfollow',[FollowController::class,'unfollow']);
Route::post('/user/suggestions',[FollowController::class,'getSuggestions']);

Route::get('/user/{username}',[UserController::class,'getUser']);
Route::get('/user/search/{search}',[UserController::class,'searchUser']);
Route::get('/user/delete/{username}',[UserController::class,'deleteUser']);