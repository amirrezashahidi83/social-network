<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {

    	$login = $request->login;
    	$password = $request->password;

    	$fieldType = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

 		try {
                if (! $token = JWTAuth::attempt([$fieldType => $login,'password' => $password])) {
                    return response()->json(['error' => 'invalid_credentials'], 400);
                }

                return $this->respondWithToken($token);

        } catch (JWTException $e) {
                return response()->json(['error' => 'could_not_create_token'], 500);
        }
    }

    public function register(Request $request)
    {
    	$inputs = $request->only('username','displayname','email','password');
    	$user = new User();
    	$user->username = $inputs['username'];
    	$user->displayname = $inputs['displayname'];
    	$user->email = $inputs['email'];
    	$user->password = Hash::make($inputs['password']);
    	$user->save();
    	return response()->json(['id' => $user->id]);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
