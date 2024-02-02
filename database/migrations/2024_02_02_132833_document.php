<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('documentos', function (Blueprint $table) {
            $table->integer('doc_id')->autoIncrement();
            $table->integer('doc_usu');
            $table->foreign('doc_usu')->references('id')->on('users');
            $table->string('doc_texto')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documentos');
    }
};
