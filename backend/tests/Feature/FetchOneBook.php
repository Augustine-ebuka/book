<?
use Illuminate\Foundation\Testing\RefreshDatabase;
use GuzzleHttp\Client;
use Tests\TestCase;

class BookSearchControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testSearchBooksEndpoint()
    {
        $mockedClient = $this->getMockBuilder(Client::class)
            ->setMethods(['get'])
            ->getMock();

        $searchQuery = 'your_search_query';
        $expectedBooks = [
            'name','numOfPages', 'authors','pages' ,'country', 'released', 'publisher'
        ];
        $mockedClient->method('get')->willReturn(json_encode(['books' => $expectedBooks]));
        $this->app->instance(Client::class, $mockedClient);
        $response = $this->getJson("/api/search-books?bookTitle={$searchQuery}");
        $response->assertSuccessful()
            ->assertJson([
                'books' => $expectedBooks,
            ]);
    }
}
