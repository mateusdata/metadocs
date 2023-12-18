<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;


class DocController extends Controller
{
    public function index()
    {
        $docs = Document::all();
        return $docs;
    }

     public function create(Request $request)
    {
       $data =  $request->validate([
            'texto' => 'required',
            'quem_digita' => '',
        ]);

        $message = Document::create($data);

        return response()->json(['message' => 'Mensagem criada com sucesso', 'data' => $message], 201);
    }
}
