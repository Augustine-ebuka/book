<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class BookSearchController extends Controller
{
    // find all books
    public function allBooks()
    {
        $client = new Client(['verify'=>false]);
            $apiEndpoint = getenv("API_ENDPOINT");

            try {
                $response = $client->get($apiEndpoint);
                $books = json_decode($response->getBody(), true);

                return response()->json(['books' => $books]);
            } catch (\Exception $e) {
                return response()->json(['error' => 'Failed to fetch data from the API'], 500);
            }
    }
    
    // find single book
    public function searchBooks(Request $request)
    {
        $searchQuery = $request->input('bookTitle');

        if ($searchQuery) {
            $client = new Client(['verify'=> false]);
            $apiEndpoint = getenv("API_ENDPOINT");
            $query = "?name={$searchQuery}";
            $rout = $apiEndpoint.$query;

            try {
                $response = $client->get($rout);
                $books = json_decode($response->getBody(), true);
                return response()->json(['books' => $books]);
            } catch (\Exception $e) {
                return response()->json(['error' => 'Failed to fetch data from the API'], 500);
            }
        }
    }

    
    }

