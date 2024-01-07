<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\DBAL\TimestampType;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class Authentication extends Controller{

    // user registeration process
    public function createUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(), 
            [
                'firstname' => 'required',
                'lastname' => 'required',
                'email' => 'required|email|unique:users,email',
                'phone' => 'required',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = User::create([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password),
                'verified'=> false
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'token' => $user->createToken('tokenebneuuah373')->plainTextToken
            ], 201);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

//    login process
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(), 
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 403);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Email & Password does not match with our record.',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();

            return response()->json([
                'status' => true,
                'message' => 'User Logged In Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }


    // verify token
    public function verify(Request $request){
    $request->validate([
        'verification_code' => 'required|string',
    ]);

    // Retrieve the phone number from the session
    $phoneNumber = $request->session()->get('phone_number');

    if (!$phoneNumber) {
        return response()->json(['message' => 'Phone number not found in session'], 422);
    }

    // Find the user by phone number and verification code
    $user = User::where('phone', $phoneNumber)
                ->where('verification_code', $request->input('verification_code'))
                ->first();

    if (!$user) {
        return response()->json(['message' => 'Invalid verification code'], 422);
    }

    // Update the user's 'verified' status to true
    $user->update(['verified' => true, 'token' => null]);

    // Clear the phone number from the session
    $request->session()->forget('phone_number');

    return response()->json(['message' => 'Verification successful', 'user' => $user], 200);
}

    // get user details
    public function profile(){
        $user = auth()->user();
        if ($user) {
            return response()->json(['message' => 'successful', 'user' => $user], 200);
        }
        else{
            return response()->json(['message' => 'user not authenticated'], 401);
        }
    }

    // logout
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'logout successful'], 200);
    }
}
