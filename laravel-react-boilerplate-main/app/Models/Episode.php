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
    ];

    public $timestamps = false;

    public static function getFavorites() {
        $ids = DB::table('episodes')->select('episode_id')->get();
        $favorites = [];
        
        foreach($ids as $id) {
            $response = Http::get('https://api.tvmaze.com/episodes/' . $id->episode_id)->json();
            array_push($favorites, $response);
        }

        return count($favorites) > 0 ? $favorites : null;
    }


    public static function checkIfEpisodeIsFavorite($id) {
        $result = Episode::where('id', $id);

        return $result;
    }
}
