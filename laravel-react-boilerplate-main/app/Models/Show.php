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

        return $response->failed() ? null : $response;
    }

    public static function getShow($id) {
        $response = Http::get('https://api.tvmaze.com/shows/' . $id);

        return $response->failed() ? null : $response;
    }
}
