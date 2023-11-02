<?php

namespace App\Http\Controllers;

use App\Models\gejala;
use Illuminate\Http\Request;
use Inertia\Inertia;


class GejalaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        // Fetch the gejala data from your database or source
        $gejala = Gejala::all(); // Assuming you have an Eloquent model

        // Return the data as an associative array
        return [
            'gejala' => $gejala
        ];
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(gejala $gejala)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(gejala $gejala)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, gejala $gejala)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(gejala $gejala)
    {
        //
    }
}
