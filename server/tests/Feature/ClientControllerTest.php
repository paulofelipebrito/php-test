<?php

namespace Tests\Feature;

use App\Models\Client;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ClientControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_get_all_clients()
    {
        $response = $this->get('/api/client');

        $response->assertStatus(200);
    }

    public function test_can_create_client()
    {
        $clientData = [
            'name' => 'John Doe',
            'cpf' => '12345678901',
            'birthday' => '1990-01-01',
            'gender' => 'M',
            'state' => 'CA',
            'city' => 'Los Angeles',
            'address' => '123 Main St'
        ];

        $response = $this->post('/api/client', $clientData);

        $response->assertStatus(201);
        $this->assertDatabaseHas('clients', $clientData);
    }

    public function test_can_update_client()
    {
        $client = Client::factory()->create();

        $updatedData = [
            'name' => 'John Doe',
            'cpf' => '12345678901',
            'birthday' => '1990-01-01',
        ];

        $response = $this->put("/api/client/{$client->id}", $updatedData);

        $response->assertStatus(200);
        $this->assertDatabaseHas('clients', $updatedData);
    }

    public function test_can_delete_client()
    {
        $client = Client::factory()->create();

        $response = $this->delete("/api/client/{$client->id}");

        $response->assertStatus(201);
        $this->assertDatabaseMissing('clients', ['id' => $client->id]);
    }


    public function test_can_filter_clients()
    {
        $client = Client::factory()->create(['name' => 'John Doe']);

        $response = $this->get('/api/client/filter?name=John Doe');

        $response->assertStatus(200)
            ->assertJsonFragment(['name' => 'John Doe']);
    }
}
