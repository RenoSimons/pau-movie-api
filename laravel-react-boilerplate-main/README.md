## Install instructions
- Clone the repo
- cd to the project root
- composer install
- npm i
- make .env file and add DB credentials

## Run the project
- php artisan migrate:fresh
- npm run watch
- php artisan serve

## Used libraries
- Inertia with Ziggy -> makes your web.php file routes accessable in front-end and no more page refresh on request
- Guzzlehttp for laravel api calls
- Jquery
- sass
- Bootstrap -> no prefab components used, only flex, margins & paddings, and grid system for efficient development
