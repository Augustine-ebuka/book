<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class BookSearchController extends Controller
{
    public function searchBooks(Request $request)
    {
        $searchQuery = $request->input('search');

        if ($searchQuery) {
            // If a search query is provided, make a request to the API
            $client = new Client(['verify'=> false]);
            $apiEndpoint = "https://anapioficeandfire.com/api/books?name={$searchQuery}";

            try {
                $response = $client->get($apiEndpoint);
                $books = json_decode($response->getBody(), true);

                // Process and return the search results
                return response()->json(['books' => $books]);
            } catch (\Exception $e) {
                // Handle API request errors
                return response()->json(['error' => 'Failed to fetch data from the API'], 500);
            }
        } else {
            // If no search query is provided, get all books from the API
            $client = new Client(['verify'=>false]);
            $apiEndpoint = "https://anapioficeandfire.com/api/books/1";

            try {
                $response = $client->get($apiEndpoint);
                $books = json_decode($response->getBody(), true);

                // Process and return all books
                return response()->json(['books' => $books]);
            } catch (\Exception $e) {
                // Handle API request errors
                return response()->json(['error' => 'Failed to fetch data from the API'], 500);
            }
        }
    }

    
    }

