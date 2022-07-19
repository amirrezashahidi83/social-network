<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
	public function addPost(Request $request)
	{
		$inputs = $request->only('discussion','media','sender_id');

		$post = new Post();

		$post->discussion = $inputs['discussion'];
		if($request->exists('media'))
			$post->media = $inputs['media'];
		$post->sender_id = $inputs['sender_id'];

		return ($post->save() ? 1 : 0);
	}

	public function editPost(Request $request)
	{
		$inputs = $request->only('id','discussion','media','sender_id');

		$post = Post::where('id',$inputs['id'])->first();

		$post->discussion = $inputs['discussion'];
		if($request->exists('media'))
			$post->media = $inputs['media'];
		$post->sender_id = $inputs['sender_id'];

		return ($post->save() ? 1 : 0);

	}

    public function getPost(Request $request)
    {

    	return response()->Json(Post::where('id',$request->only('id')['id'])->first()); 
    }

    public function deletePost(Request $request)
    {
    	$id = $request->only('id')['id'];

    	$post = Post::where('id',$id)->first();

    	return ($post->delete()?1:0);
    }

    public function searchPost(Request $request)
    {
   		$search = $request->only('search')['search'];

   		$posts = Post::where('discussion','like',$search)->get();

   		return response()->Json($posts);	
	}

	public function getUserPosts($id)
	{
		$posts = Post::where('sender_id',$id)->get();

		return response()->Json($posts);
	}

	public function likePost(Request $request)
	{
		$inputs = $request->only('post_id','user_id','dislike');

		$post_id = $inputs['post_id'];
		$user_id = $inputs['user_id'];
		$dislike = $inputs['dislike'];

		$post = Post::where('id',$post_id)->first();

		$likes_json = json_decode($post->likes);

		array_push($likes_json,array($user_id,$dislike));

		return ($post->save()?1:0);	
	}

}