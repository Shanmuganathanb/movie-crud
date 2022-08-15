import asyncHandler from 'express-async-handler'

// @desc    Welcome
// @route   GET /welcome
// @access  Public
export const welcomeHandler = asyncHandler(async (req, res) => {

    const response = {
        helpForPostmanCollection: "To get this collection entirely, You can copy the below postmanObject and import that in postman using Raw text",
        additionalImportantInformation: "Private endpoints like update and delete requires Cookie which you can hit login api and get",
        postmanObject: {
            "info": {
                "_postman_id": "32aafda4-6c2c-4c49-8c5a-d7babc723b10",
                "name": "Movie CRUD",
                "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
                "_exporter_id": "8263375"
            },
            "item": [
                {
                    "name": "Add movie",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Content-Type",
                                "value": "application/json"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"movieName\": \"Shan live 1\", \"rating\": 5, \"cast\": [\"Shan\", \"shan B\"], \"genre\": \"Thriller\", \"releaseDate\": \"2022-04-05\"\n}"
                        },
                        "url": {
                            "raw": "https://movie-app-crud-shan.herokuapp.com/movie/add",
                            "protocol": "https",
                            "host": [
                                "movie-app-crud-shan",
                                "herokuapp",
                                "com"
                            ],
                            "path": [
                                "movie",
                                "add"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Get All Movies",
                    "request": {
                        "method": "GET",
                        "header": [
                            {
                                "key": "",
                                "value": "",
                                "disabled": true
                            }
                        ],
                        "url": {
                            "raw": "https://movie-app-crud-shan.herokuapp.com/movie/all",
                            "protocol": "https",
                            "host": [
                                "movie-app-crud-shan",
                                "herokuapp",
                                "com"
                            ],
                            "path": [
                                "movie",
                                "all"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Delete Movie",
                    "request": {
                        "method": "DELETE",
                        "header": [
                            {
                                "key": "Set-Cookie",
                                "value": "session_token=e214d27a-d549-4eea-a730-c0fcd2d7d2c0; Path=/; Expires=Mon, 15 Aug 2022 08:22:32 GMT"
                            },
                            {
                                "key": "",
                                "value": "",
                                "disabled": true
                            }
                        ],
                        "url": {
                            "raw": "https://movie-app-crud-shan.herokuapp.com/movie/62f9fc52086b29a1f8d397be/delete",
                            "protocol": "https",
                            "host": [
                                "movie-app-crud-shan",
                                "herokuapp",
                                "com"
                            ],
                            "path": [
                                "movie",
                                "62f9fc52086b29a1f8d397be",
                                "delete"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Login Api",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Content-Type",
                                "value": "application/json"
                            },
                            {
                                "key": "",
                                "value": "",
                                "disabled": true
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"username\": \"testuser1\",\n    \"password\": \"password1\"\n}"
                        },
                        "url": {
                            "raw": "https://movie-app-crud-shan.herokuapp.com/login",
                            "protocol": "https",
                            "host": [
                                "movie-app-crud-shan",
                                "herokuapp",
                                "com"
                            ],
                            "path": [
                                "login"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Update API",
                    "request": {
                        "method": "PUT",
                        "header": [
                            {
                                "key": "Set-Cookie",
                                "value": "session_token=e214d27a-d549-4eea-a730-c0fcd2d7d2c0; Path=/; Expires=Mon, 15 Aug 2022 08:22:32 GMT"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"movieName\": \"Shan test 1\"\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "https://movie-app-crud-shan.herokuapp.com/movie/62f9fdf957e91df11fcff1af/update",
                            "protocol": "https",
                            "host": [
                                "movie-app-crud-shan",
                                "herokuapp",
                                "com"
                            ],
                            "path": [
                                "movie",
                                "62f9fdf957e91df11fcff1af",
                                "update"
                            ]
                        }
                    },
                    "response": []
                }
            ]
        }
    }
    res.status(201).json(response)
})
