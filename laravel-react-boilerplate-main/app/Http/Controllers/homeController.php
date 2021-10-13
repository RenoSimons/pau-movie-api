<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Show;

class homeController extends Controller
{
    public function index()
    {
        return inertia('Home');
    }

    public function search(Request $request) {
        $results = Show::searchShow($request->input('userInput'));
        $results = $results->json();

        return response($results);
    }
}
