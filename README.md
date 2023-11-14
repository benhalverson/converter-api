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

## Docker
    
Make sure you have docker installed on your machine.

 ```bash
  docker compose up
 ```

# Usage

- Make a post request to the /upload endpoint with a form-data field called csvFile containing a csv file.
- See the sample-data.csv file for an example of what the data should look like.


# Result

The response will be an array of objects with the following format.


```json
[
    {
        "Question Number": 1,
        "Actual Value": 67.628,
        "Student Response": 67.628,
        "Correct?": "correct"
    },
    {
        "Question Number": 2,
        "Actual Value": 61.0237,
        "Student Response": 61.0237,
        "Correct?": "correct"
    },
    {
        "Question Number": 3,
        "Actual Value": 4.22675,
        "Student Response": 4.16667,
        "Correct?": "incorrect"
    }
]

```

# Deployed demo

Make sure to hit the health endpoint first to wake up the app. It should return 
    
```json
{
    "status": "ok"
}
```

```bash
- GET https://converter-app-qj48.onrender.com/health
- POST https://converter-app-qj48.onrender.com/upload
```

# Improvements

- Add more endpoints to get the data in different formats.
- handle more edge cases.
- Add a UI to upload the file and display the results.
- Cache the results of the conversion so that the same file doesn't have to be converted twice.
- Setup IaaS to deploy the app to the cloud.
- Protect the endpoints with an API Key.
- ~~Return an array of objects instead of an array of strings with the submitted data and the result of the conversion.~~

