<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function addComment(Request $request)
    {
    	$inputs = $request->only("discussion","post_id");

    	$Comment = new Comment();

    	$Comment->discussion = $inputs['discussion'];
    	$Comment->post_id = $inputs['post_id'];

    	return ($Comment->save()?1:0);
    }

    public function deleteComment(Request $request)
    {
    	$id = $request->only('id')['id'];

    	$post = Comment::where('id',$id)->first();

    	return ($post->delete()?1:0);
    }

    public function getComment($id)
    {
    	return response()->Json(Comment::where('id',$id)->first()); 
    }

    public function getPostComments($post_id)
    {
    	$posts = Post::where('post_id',$id)->get();
		return response()->Json($posts);

    }
}
