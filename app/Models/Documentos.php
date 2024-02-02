<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documentos extends Model
{
    use HasFactory;

    protected $table = 'documentos';

    protected $primaryKey = 'doc_id';

    protected $fillable = [
        'doc_usu',
        'doc_texto'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'doc_usu');
    }
}