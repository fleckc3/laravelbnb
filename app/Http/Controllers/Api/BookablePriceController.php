<?php

namespace App\Http\Controllers\Api;

use App\Bookable;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookablePriceController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($id, Request $request)
    {
        // fetch data
        $bookable = Bookable::findOrFail($id);

        // validate data
        $data = $request->validate([
            'from' => 'required|date_format:Y-m-d',
            'to' => 'required|date_format:Y-m-d|after_or_equal:from'
        ]);

        // claucalte on model and return somethinhg
        return response()->json([
            'data' => $bookable->priceFor($data['from'], $data['to'])
        ]);
    }
}
