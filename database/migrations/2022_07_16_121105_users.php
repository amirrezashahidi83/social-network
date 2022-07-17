<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
                Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('displayname');
            $table->string('email');
            $table->string('password');
            $table->string('info')->default('');
            $table->string('profilepic')->default('');
            $table->boolean('enabled_account')->default(False);
            $table->timestamp('created_at')->nullable();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
