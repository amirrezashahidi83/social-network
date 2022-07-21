<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getUser($username)
    {
    	$user = User::where('id',$username)->first();
    	return response()->Json(['username'=>$username,'displayname'=>$user->displayname,'info'=>$user->info,'profile'=>$user->profilepic]);
    }

    public function deleteUser($username)
    {
    	return (User::where('username',$username)->delete() ? 1 : 0);
    }

    public function searchUser($search)
    {
    	$users = User::where('username','like',$search)->orWhere('displayname','like',$search)->get();

    	$response = array();

    	foreach($users as $user)
    	{
    		array_push($response,['username'=>$user->username,'displayname'=>$user->displayname,'info'=>$user->info,'profile'=>$user->profilepic]);
    	}

    	return response()->Json($response);
    }

    public function readNotifications(Request $request){

        $id = $request->only('id')['id'];

        $user = User::where('id',$id)->first();

        $notifications = $user->unreadNotifications();

        $user->notifications->markAsRead();

        return response()->Json($notifications);
    }
}
