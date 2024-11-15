<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Container\Attributes\Auth;
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

    public function getUserArticles()
    {
        $userId = auth()->user();

        $articles = DB::table('articles')
            ->where('user_id', $userId->id)
            ->get();

        return Inertia::render('Dashboard/Main', [
            'articles' => $articles
        ]);
    }

    public function edit(Articles $article)
    {
        return Inertia::render('Dashboard/Edit', [
            'article' => $article
        ]);
    }

    public function update(Request $request, Articles $article)
    {

        $data = $request->validate([
            'title' => 'required | string',
            'content' => 'required | string',
            'category_id' => 'required | string'
        ]);
        if ($errors = $request->session()->get('errors')) {
            dd($errors); // Afficher les erreurs pour comprendre pourquoi la validation échoue
        }

        $categoryId = DB::table('categories')
            ->where('name', $data['category_id'])
            ->first()
            ->id;

        $data['category_id'] = $categoryId;
        $data['user_id'] = auth()->id();


        $article->update($data);
        return to_route('dashboard.articles')->with('success', 'Article updated with success');
    }

    public function destroy(Articles $article)
    {
        $article->delete();

        return to_route('dashboard.articles');
    }
    public function create()
    {
        return Inertia::render('Dashboard/Create');
    }
    public function store(Request $request)
    {

        $data = $request->validate([
            'title' => 'required | string ',
            'content' => 'required | string',
            'category_id' => 'required | string',
        ]);

        $categoryId = DB::table('categories')
            ->where('name', $request->category_id)
            ->first()
            ->id;

        $data['user_id'] = auth()->id();
        $data['category_id'] = $categoryId;

        Articles::create($data);
        return to_route('dashboard.articles');
    }
}
