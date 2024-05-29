# URL Shortener

## Description
This is a simple URL shortener service that allows you to shorten long URLs into shorter, more manageable links using NodeJS and Express Framework.

## Features
- Shorten long URLs into shorter links
- Redirect users to the original URL when they visit the shortened link
- Track the number of clicks on each shortened link

## Installation
1. Clone this repository: `git clone https://github.com/Riya-joseph/url-shortener.git`
2. Install the required dependencies: `npm install`
3. Add necessary configurations in `.env`
4. Start the server: `npm start`

## Usage
1. Access the URL shortener service in your web browser.
2. Enter the long URL that you want to shorten.
4. Click the "Shrink This" button to generate the short link.
5. Copy the generated short link and share it with others.

## API Documentation
The URL shortener service also provides an API for programmatically generating short links. Here are the available endpoints:

- `POST /short`: Generate a short link by providing the long URL in the request body.
- `GET /:shortId`: Retrieve information about a specific short link by providing its alias in the URL.
- `GET /`: Retrieve all urls.

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).