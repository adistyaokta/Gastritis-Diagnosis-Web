<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KodeGejalaController extends Controller
{
    public function index() {
        $kodeGejalaGroups = DB::table('KodeGejalaGroups')->get();
        return response()->json($kodeGejalaGroups);
    }
}
