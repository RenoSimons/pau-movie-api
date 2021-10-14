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

        return response($results);
    }

    public function show(Request $request) {
        $show = Show::getShow($request->id);
        $show_episodes = Show::getSeasonWithEpisodes($request->id);

        return inertia('Show', 
        ['showData' => $show,
        'episodeData' => $show_episodes]);
    }
}
