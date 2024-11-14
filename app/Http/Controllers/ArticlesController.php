<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    public function index()
    {
        $articles = Articles::query()
            ->select('articles.id', 'articles.title', 'articles.content', 'articles.created_at', 'users.name as author', 'categories.name as category')
            ->from('articles')
            ->leftJoin('users', 'articles.user_id', '=', 'users.id')
            ->leftJoin('categories', 'articles.category_id', '=', 'categories.id')
            ->get();

        return Inertia::render('Articles/Main', [
            'articles' => $articles,
        ]);
    }

    public function show($id)
    {
        $article = Articles::query()
            ->select('articles.id', 'articles.title', 'articles.content', 'articles.created_at', 'users.name as author', 'categories.name as category')
            ->where('articles.id', $id)
            ->leftJoin('users', 'articles.user_id', '=', 'users.id')
            ->leftJoin('categories', 'articles.category_id', '=', 'categories.id')
            ->first();

        return Inertia::render('Articles/Show', [
            'article' => $article,
        ]);

    }

    public function manageArticles()
    {
        $userId = auth()->user()->id;

        $articles = DB::query()
            ->select('id', 'title', 'content','user_id', 'created_at')
            ->from('articles')
            ->where('articles.user_id', $userId)
            ->get();

           return Inertia::render('Dashboard/Main', [
            'articles' => $articles
           ]);
    }




}
