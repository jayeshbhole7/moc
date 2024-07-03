### Installing

Installing NPM modules on both client and server folders

Execute these commands from the project directory

```
cd client && npm install
```

```
cd server && npm install
```

### Running the app

Open a terminal on server directory

```
npm run start:dev
```

and open another terminal on client directory

```
npm run start
```

Access the web app at http://localhost:3000/

### .env

In the server > .env file, you can find some information. Please use your own API key for future use, as this key may not work in the future.

```
DATABASE=your_database_url
PORT=your_backend_port_number
BRAINTREE_MERCHANT_ID=your_id
BRAINTREE_PUBLIC_KEY=your_public_key
BRAINTREE_PRIVATE_KEY=your_private_key


```

### .env

In the client > .env file, you can find some information. Please use your own API key for future use, as this key may not work in the future.

```
REACT_APP_API_URL=<http://localhost:PORT_NUMBER>
```
