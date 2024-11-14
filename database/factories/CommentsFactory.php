<?php

namespace Database\Factories;

use App\Models\Articles;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

use function Pest\Laravel\post;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comments>
 */
class CommentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'content' => fake()->realText(200),
            'user_id' => User::factory(),
            'article_id' => Articles::factory()
        ];
    }
}
