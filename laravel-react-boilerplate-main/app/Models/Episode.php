<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class Episode extends Model
{
    use HasFactory;

    protected $fillable = [
        'episode_id',
        'show_id'
    ];

    public $timestamps = false;

    public static function getSeenEpisodes($showid) {
        
        $ids = DB::table('episodes')
        ->where('show_id', $showid)
        ->select('episode_id')
        ->get();
        $episodes = [];

        foreach($ids as $id) {
            $response = Http::get('https://api.tvmaze.com/episodes/' . $id->episode_id)->json();
            array_push($episodes, $response);
        }
        
        return count($episodes) > 0 ? $episodes : null;
    }

    public static function checkIfEpisodeIsFavorite($id) {
        $result = Episode::where('episode_id', $id)->get();

        return count($result) > 0 ? $result : null;
    }
}
