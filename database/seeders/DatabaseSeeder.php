<?php

namespace Database\Seeders;

use App\Models\Articles;
use App\Models\Category;
use App\Models\Comments;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();


        Category::insert([
            ['name' => 'Hiking'],
            ['name' => 'Trail'],
            ['name' => 'Cycling'],
            ['name' => 'Camping'],
            ['name' => 'Fishing'],
            ['name' => 'Hunting'],
        ]);
       User::factory(10)->create();
       Articles::factory(10)->create();
       Comments::factory(10)->create();
    }
}
