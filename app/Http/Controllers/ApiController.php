<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getData()
    {
        // Replace with your data retrieval logic
        $data = ['message' => 'Hello from Laravel API'];

        return response()->json($data);
    }
}
