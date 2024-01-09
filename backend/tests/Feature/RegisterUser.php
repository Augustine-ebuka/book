<?
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Tests\TestCase;

class RegisterControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_register()
    {
        $response = $this->postJson('/api/register', [
            'firstname' => 'John',
            'lastname' => 'Doe',
            'phone' => '1234567890',
            'email' => 'john.doe@example.com',
            'password' => 'password123',
        ]);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'user' => [
                    'id',
                    'firstname',
                    'lastname',
                    'phone',
                    'email',
                ],
                'token',
            ])
            ->assertCookie('token');

        $this->assertAuthenticated(); 
    }

    public function test_user_cannot_register_with_existing_email()
    {
        User::factory()->create([
            'email' => 'john.doe@example.com',
        ]);

        $response = $this->postJson('/api/register', [
            'firstname' => 'John',
            'lastname' => 'Doe',
            'phone' => '1234567890',
            'email' => 'john.doe@example.com',
            'password' => 'password123',
        ]);

        $response->assertStatus(401)
            ->assertJson([
                'message' => 'The given data was invalid.',
            ]);

        $this->assertGuest();

        // Add any additional assertions you need
    }
}
