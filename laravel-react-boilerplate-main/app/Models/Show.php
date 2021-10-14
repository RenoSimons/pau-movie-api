<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;

class Show extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'show_id',
    ];

    public $timestamps = false;


    public static function searchShow($query) {

        $response = Http::get('https://api.tvmaze.com/search/shows?q=' . $query);

        return $response->failed() ? null : $response->json();
    }

    public static function getShow($id) {
        $response = Http::get('https://api.tvmaze.com/shows/' . $id);

        return $response->failed() ? null : $response->json();
    }

    public static function getSeasonWithEpisodes($id) {
        $seasons = Http::get('https://api.tvmaze.com/shows/' . $id .'/seasons')->json();

        for($i = 0; $i < count($seasons); $i++) {
            $episodes = Http::get('https://api.tvmaze.com/seasons/' . $seasons[$i]["id"] .'/episodes')->json();
            $seasons[$i]["episodes"] = $episodes;
        }
        
        return count($seasons) == 0 ? null : $seasons;
    }

    public static function checkIfShowIsFavorite($id) {
        $result = Show::where('show_id', $id)->get();

        return count($result) > 0 ? $result : null;
    }

    public static function getFavoriteShows() {
        $ids = DB::table('shows')->select('show_id')->get();
        $favorites = [];
        
        foreach($ids as $id) {
            $response = Http::get('https://api.tvmaze.com/shows/' . $id->show_id)->json();
            array_push($favorites, $response);
        }

        return count($favorites) > 0 ? $favorites : null;
    }

}
