<?php

namespace App\Http\Controllers;

use App\Models\Documentos;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use League\CommonMark\Node\Block\Document;

class DocumentsController extends Controller
{
    //
    public function index(): Response
    {
        return Inertia::render('Doc');
    }
    public function create($id)
    {
        $ducument = Documentos::create([
            'doc_usu' => $id,
        ]);
        return $ducument;
    }
    public function editDocument(Request $request)
    {
        return Documentos::where('doc_usu', $request->doc_usu)
            ->update(['doc_texto' => $request->doc_texto]);
    }


}
