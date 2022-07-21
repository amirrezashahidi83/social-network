<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Follow;

class FollowController extends Controller
{
    public function follow(Request $request)
    {
    	$inputs = $request->only('follower_id','following_id');

    	$follower_id = $inputs['follower_id'];
    	$following_id = $inputs['following_id'];

    	$followobj = new Follow();

    	$followobj->follower_id = $follower_id;
    	$followobj->following_id = $following_id;

    	return ( $followobj->save() ? 1 : 0 );
    }

    public function unfollow(Request $request)
    {
    	$inputs = $request->only('follower_id','following_id');

    	$follower_id = $inputs['follower_id'];
    	$following_id = $inputs['following_id'];

    	return (Follow::where('following_id',$following_id)->where('follower_id',$follower_id)->delete() ? 1 : 0);
    }

    public function getSuggestions(Request $request)
    {
    	$id = $request->only('id')['id'];

    	$follows = Follow::where('following_id',$id)->orWhere('follower_id',$id)->get()->random(10);

    	return response()->Json($follows);
    }
}
