# Edgy API

This API is built in node js. You can easily integrate it with your front end apps. Currently it only supports GET method.
<p> Here is the <a href="https://edgyapi.vercel.app">preview</a> </p>

```txt
Note ⚠ : All jokes are GenZ and may offend you.
```

## Usage

```js
GET https://edgyapi.vercel.app/api/joke/random
```

## Example Code

```js
#!/usr/bin/env node

const axios = require("axios");

(async ()=>{
	const res = await axios.get("https://edgyapi.vercel.app/api/joke/random");
	const data = await res.data.body;
	console.log(data)
})();
```

## To Do
- [x] <a href="https://github.com/zerodayrat/edgy-cli">Creating a cli version of it</a>
- [ ] Query based searches
- [ ] Joke Submission
