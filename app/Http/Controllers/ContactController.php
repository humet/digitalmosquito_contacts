<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
    $contacts = Contact::orderBy('email', 'asc')
                        ->get();

    return $contacts->toJson();
    }

    public function store(Request $request)
    {
    $validatedData = $request->validate([
        'first_name' => 'required',
        'last_name' => 'required',
        'email' => 'bail|required|email:rfc',
        'telephone' => 'bail|required|digits_between:11,13'
    ]);

    $contact = Contact::create([
        'first_name' => $validatedData['first_name'],
        'last_name' => $validatedData['last_name'],
        'email' => $validatedData['email'],
        'telephone' => $validatedData['telephone']
    ]);

    return response()->json('Contact added sucessfully!');
    }

    public function show($email)
    {
        $contact = Contact::where('email', '=', $email)->firstOrFail();
        print_r($contact);
        return $contact->toJson();
    }
}
