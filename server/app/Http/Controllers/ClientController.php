<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $clients = Client::all();

            return response()->json([
                'message' => 'Clients retrieved successfully.',
                'clients' => $clients
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error when retrieving clients.',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'cpf' => 'required|string|unique:clients,cpf|size:11',
                'birthday' => 'required',
                'gender' => 'required|string|in:M,F',
                'state' => 'required|string|max:2',
                'city' => 'required|string',
                'address' => 'required|string',
            ]);
            $birthday = date('Y-m-d H:i:s', strtotime($validatedData['birthday']));

            if (Client::where('cpf', $validatedData['cpf'])->exists()) {
                return response()->json([
                    'message' => 'Client with this CPF already exists.'
                ], 422);
            }

            $client = Client::create($validatedData);
            return response()->json([
                'message' => 'Client successfully registered.',
                'client' => $client
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error when registering client.',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $client)
    {
        try {
            $client = Client::findOrFail($client);

            return response()->json([
                'message' => 'Client found successfully.',
                'client' => $client
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error when finding client.',
                'error' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, string $client)
    {
        try {
            $client = Client::find($client);

            if (!$client) {
                return response()->json([
                    'message' => 'Client not found.'
                ], 404);
            }

            $rules = [
                'name' => 'sometimes|required|string',
                'cpf' => 'sometimes|required|string|size:11|unique:clients,cpf,' . $client->id,
                'birthday' => 'sometimes|required',
                'gender' => 'sometimes|required|string|in:M,F',
                'state' => 'sometimes|required|string|max:2',
                'city' => 'sometimes|required|string',
                'address' => 'sometimes|required|string',
            ];

            $validatedData = $request->validate($rules);

            $client->update($validatedData);

            return response()->json([
                'message' => 'Client successfully updated.',
                'client' => $client
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error when updating client.',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $client)
    {
        try {
            if (Client::destroy($client)) {
                return response()->json([
                    'message' => 'Client successfully deleted.'
                ], 201);
            } else {
                return response()->json([
                    'message' => 'Error when deleting client.'
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error when deleting client.',
                'error' => $e->getMessage()
            ], 422);
        }
    }


     /**
     * Filter clients based on the given criteria.
     */
    public function filter(Request $request)
    {
        try {
            $query = Client::query();

            foreach ($request->all() as $column => $value) {
                if (in_array($column, ['name', 'cpf', 'birthday', 'gender', 'state', 'city', 'address'])) {
                    if ($column === 'name') {
                        $query->where($column, 'LIKE', "%$value%");
                    } else {
                        $query->where($column, $value);
                    }
                }
            }

            $totalCount = $query->count();
            $size = $request->input('size', 20);
            $page = $request->input('page', 1);
            $clients = $query->paginate($size, ['*'], 'page', $page);

            $nextPage = null;
            if (($page * $size) < $totalCount) {
                $nextPage = $page + 1;
            }

            return response()->json([
                'message' => 'Clients filtered successfully.',
                'clients' => $clients,
                'total' => $totalCount,
                'nextPage' => $nextPage
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error when filtering clients.',
                'error' => $e->getMessage()
            ], 422);
        }
    }
}
