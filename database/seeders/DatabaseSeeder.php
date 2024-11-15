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


        // Category::insert([
        //     ['name' => 'Hiking'],
        //     ['name' => 'Trail'],
        //     ['name' => 'Cycling'],
        //     ['name' => 'Camping'],
        //     ['name' => 'Fishing'],
        //     ['name' => 'Hunting'],
        // ]);
        Articles::insert([
            [
                'title' => 'Hiking in the mountains',
                'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies tincidunt.',
                'user_id' => 15,
                'category_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Exploring City Landmarks',
                'content' => 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam varius nunc ut feugiat.',
                'user_id' => 15,
                'category_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Tips for Road Trips',
                'content' => 'Aenean nec magna in nunc vehicula vehicula non nec risus. Integer maximus nisi sit amet nisi condimentum, in malesuada lectus.',
                'user_id' => 15,
                'category_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'The Best Beaches to Visit',
                'content' => 'Curabitur sit amet turpis eget dui ullamcorper eleifend. Maecenas pharetra nisl sit amet augue interdum scelerisque.',
                'user_id' => 15,
                'category_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Traveling on a Budget',
                'content' => 'Duis a ex id magna aliquet egestas nec a orci. Phasellus consectetur purus sed justo bibendum, ut scelerisque risus.',
                'user_id' => 15,
                'category_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    //    User::factory(4)->create();
    //    Articles::factory(10)->create();
    //    Comments::factory(10)->create();
    }
}
