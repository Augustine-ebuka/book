<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
  

    public function boot()
{
    Validator::extend('phone', function ($attribute, $value, $parameters, $validator) {
        // Your custom phone validation logic here
        // For example, you can use a regular expression to validate the phone format
        return preg_match('/^\d{10}$/', $value);
    });

    // Optionally, you can also add a custom error message for the validation rule
    Validator::replacer('phone', function ($message, $attribute, $rule, $parameters) {
        return str_replace(':attribute', $attribute, 'The :attribute must be a valid phone number.');
    });
}

}
