<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

class Show extends Model
{
    use HasFactory;
    
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
}
