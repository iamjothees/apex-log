<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

Route::get('/sw.js', function () {
    return response()->file(public_path('build/sw.js'), ['Content-Type' => 'application/javascript']);
});

Route::get('/manifest.webmanifest', function () {
    return response()->file(public_path('build/manifest.webmanifest'), ['Content-Type' => 'application/manifest+json']);
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/track', function () {
    return Inertia::render('Track');
})->middleware(['auth', 'verified'])->name('track');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
