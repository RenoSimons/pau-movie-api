<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    use HasFactory;

    protected $fillable = [
        'episode_id',
    ];

    public $timestamps = false;


    public static function checkIfEpisodeIsFavorite($id) {
        $result = Episode::where('id', $id);

        return $result;
    }
}
