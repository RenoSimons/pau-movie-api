<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Movie-app</title>

        <!-- Styles -->
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />

        <!-- Scripts -->
        <script src="{{ mix('/js/app.js') }}" defer></script>

    </head>
    <body>
        @routes
        @inertia
    </body>
</html>
