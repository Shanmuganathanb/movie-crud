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
                                "raw": "{\n    \"movieName\": \"Shan 4\", \"rating\": 5, \"cast\": [\"Shan\", \"shan B\"], \"genre\": \"Thriller\", \"releaseDate\": \"2022-04-05\"\n}"
                            },
                            "url": {
                                "raw": "localhost:3005/movie/add",
                                "host": [
                                    "localhost"
                                ],
                                "port": "3005",
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
                                    "key": "Cookie",
                                    "value": "session_token=eaa3360e-9b0f-4742-bac0-4237c45b4355"
                                }
                            ],
                            "url": {
                                "raw": "localhost:3005/movie/all",
                                "host": [
                                    "localhost"
                                ],
                                "port": "3005",
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
                                    "value": "session_token=eaa3360e-9b0f-4742-bac0-4237c45b4355; Path=/; Expires=Sun, 14 Aug 2022 18:51:17 GMT"
                                },
                                {
                                    "key": "Cookie",
                                    "value": "session_token=eaa3360e-9b0f-4742-bac0-4237c45b4355"
                                }
                            ],
                            "url": {
                                "raw": "localhost:3005/movie/62f93275d3a5b126defff64f/delete",
                                "host": [
                                    "localhost"
                                ],
                                "port": "3005",
                                "path": [
                                    "movie",
                                    "62f93275d3a5b126defff64f",
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
                                    "key": "Cookie",
                                    "value": "session_token=eaa3360e-9b0f-4742-bac0-4237c45b4355"
                                }
                            ],
                            "body": {
                                "mode": "raw",
                                "raw": "{\n    \"username\": \"testuser1\",\n    \"password\": \"password1\"\n}"
                            },
                            "url": {
                                "raw": "localhost:3005/login",
                                "host": [
                                    "localhost"
                                ],
                                "port": "3005",
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
                                    "value": "session_token=eaa3360e-9b0f-4742-bac0-4237c45b4355; Path=/; Expires=Sun, 14 Aug 2022 18:51:17 GMT"
                                },
                                {
                                    "key": "Cookie",
                                    "value": "session_token=eaa3360e-9b0f-4742-bac0-4237c45b4355; session_token=eaa3360e-9b0f-4742-bac0-4237c45b4355"
                                },
                                {
                                    "key": "Content-Type",
                                    "value": "application/json"
                                }
                            ],
                            "body": {
                                "mode": "raw",
                                "raw": "{\n    \"movieName\": \"Shan test\"\n}"
                            },
                            "url": {
                                "raw": "localhost:3005/movie/62f9320ec61b005dab375be7/update",
                                "host": [
                                    "localhost"
                                ],
                                "port": "3005",
                                "path": [
                                    "movie",
                                    "62f9320ec61b005dab375be7",
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
