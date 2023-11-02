<?php

namespace Database\Seeders;

use Database\Factories\gejalaFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\gejala;

class gejalaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\gejala::factory(20)->create();
    }
}
