<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::table()->insert([
            'firstname'=>'ebhud',
            'lastname'=>'kelvin',
            'phone'=>'0903782828',
            'password'=>bcrypt('090355245562'),
            'verified'=>false,

        ]);
    }
}


