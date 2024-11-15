<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticlesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    return Inertia::render('Welcome');
});
Route::get('/home', [ArticlesController::class, 'index'])->name('articles.index');
Route::get('/articles/{article}', [ArticlesController::class, 'show'])->middleware(['auth', 'verified'])->name('articles.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard/articles', [ArticlesController::class, 'getUserArticles'])->name('dashboard.articles');
    Route::get('/dashboard/{article}/edit', [ArticlesController::class, 'edit'])->name('articles.edit');
    Route::get('/dashboard/articles/create', [ArticlesController::class, 'create'])->name('articles.create');
    Route::put('/dashboard/{article}/update', [ArticlesController::class, 'update'])->name('articles.update');
    Route::delete('/dashboard/{article}/destroy', [ArticlesController::class, 'destroy'])->name('articles.destroy');
    Route::post('/dashboard/articles/store', [ArticlesController::class, 'store'])->name('articles.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
