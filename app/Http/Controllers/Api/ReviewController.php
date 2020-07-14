<?php

namespace App\Http\Controllers\Api;

use App\Review;
use App\Http\Resources\ReviewResource;
use App\Http\Controllers\Controller;

class ReviewController extends Controller
{
    public function show($id)
    {
        return new ReviewResource(Review::findOrFail($id));
    }
}
