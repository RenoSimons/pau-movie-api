<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Show;
use App\Models\Episode;
use Illuminate\Support\Facades\Validator;

class homeController extends Controller
{
    public function index()
    {
        $favorites = Show::getFavoriteShows();
        return inertia('Home', ['favorites' => $favorites]);
    }

    public function search(Request $request) {
        $results = Show::searchShow($request->input('userInput'));

        return response($results);
    }

    public function show(Request $request) {
        $show = Show::getShow($request->id);
        $show_episodes = Show::getSeasonWithEpisodes($request->id);
        $seen_episodes = Episode::getSeenEpisodes($request->id);

        return inertia('Show', 
        ['showData' => $show,
        'seenEpisodes' => $seen_episodes,
        'episodeData' => $show_episodes]);
    }

    public function saveShow(Request $request) {
        $validator =  Validator::make($request->all(),[
            'id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return redirect()->route('show');
        } 
        
        if (! Show::checkIfShowIsFavorite($request->id) ) {
            Show::create(['show_id' => $request->id]);
        };

        return back();
    }
    
    public function saveEpisode(Request $request) {
        $validator =  Validator::make($request->all(),[
            'id' => 'required|integer',
            'show_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return redirect()->route('show');
        } 
        
        if (! Episode::checkIfEpisodeIsFavorite($request->id) ) {
            Episode::create(['episode_id' => $request->id,
                            'show_id' => $request->show_id]);
        };

        return back();
    }
}
