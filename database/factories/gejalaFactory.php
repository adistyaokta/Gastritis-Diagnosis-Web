<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\gejala>
 */
class gejalaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $counter = 1;

        return [
            'kode_gejala' => 'G' . str_pad($counter++, 2, '0', STR_PAD_LEFT),
            'nama_gejala' => $this->faker->sentence,
            // Add more columns as needed
        ];
    }
}
