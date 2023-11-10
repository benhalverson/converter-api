# Install

You can install the app locally or by using docker compose to run it in a container.

```bash
git clone https://github.com/benhalverson/converter-api-api
```

```bash
cd converter-api-api
```

```bash
npm install
```

```bash 
```

## Docker
    
Make sure you have docker installed on your machine.

 ```bash
  docker compose up
 ```

# Usage

- Make a post request to the /upload endpoint with a form-data field called csvFile containing a csv file.
- See the sample-data.csv file for an example of what the data should look like.


# Result

The response will be an array of strings that say if the row had the correct conversion or not.


```json
[
    "Question 1: correct",
    "Question 2: incorrect",
    "Question 3: incorrect",
    "Question 4: incorrect",
]

```

# Deployed demo
```bash
- GET https://converter-app-qj48.onrender.com/health
- GET https://converter-app-qj48.onrender.com/list
- POST https://converter-app-qj48.onrender.com/upload
```

# Improvements

- Add more endpoints to get the data in different formats.
- handle more edge cases.
- Add a UI to upload the file and display the results.
- Cache the results of the conversion so that the same file doesn't have to be converted twice.
- Setup IaaS to deploy the app to the cloud.
- Return an array of objects instead of an array of strings with the submitted data and the result of the conversion.

