<?
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function testUserCanLogout()
    {
    
        $user = User::factory()->create();

        Sanctum::actingAs($user);
        $token = $user->createToken('test_token')->plainTextToken;

        $response = $this->postJson('/api/logout', [], [
            'Authorization' => 'Bearer ' . $token,
        ]);

        $response->assertJson([
            'message' => 'Logged out successfully!',
        ])->assertCookieMissing('token');
        $this->assertNull($user->tokens()->where('id', $user->currentAccessToken()->id)->first());
    }
}
