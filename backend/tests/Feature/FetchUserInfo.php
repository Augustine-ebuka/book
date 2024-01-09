<?
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function testAuthenticatedUserCanBeRetrieved()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);
        $response = $this->getJson('/api/profile');

        $response->assertSuccessful()
            ->assertJson([
                'data' => [
                    'id' => $user->id,
                    'firstname' => $user->firstname,
                    'lastname' => $user->lastname,
                    'email' => $user->email,
                ],
            ]);
    }
}
