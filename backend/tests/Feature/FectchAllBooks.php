<?

use Illuminate\Foundation\Testing\RefreshDatabase;
use GuzzleHttp\Client;
use Tests\TestCase;

class BookSearchControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testAllBooksEndpoint()
    {
    
        $mockedClient = $this->getMockBuilder(Client::class)
            ->setMethods(['get'])
            ->getMock();

        $expectedBooks = [
            'name','numOfPages', 'authors','pages' 
        ];
        $mockedClient->method('get')->willReturn(json_encode(['books' => $expectedBooks]));

        $this->app->instance(Client::class, $mockedClient);
        $response = $this->getJson('/api/book/search/all');

        // Assert the response
        $response->assertSuccessful()
            ->assertJson([
                'books' => $expectedBooks,
            ]);
    }
}
