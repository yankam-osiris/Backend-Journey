# HTTP Status Codes Guide

A brief overview of HTTP status codes and their meanings.

## What are HTTP Status Codes?

HTTP status codes are three-digit numbers returned by servers to indicate the result of a client's request. They help communicate whether a request was successful, failed, or requires further action.

## Status Code Categories

### 2xx - Success
These codes indicate that the request was successfully received, understood, and accepted.

- **200 OK** - Request succeeded. The most common success status.
- **201 Created** - Request succeeded and a new resource was created (common with POST requests).
- **202 Accepted** - Request accepted for processing, but not completed yet.
- **204 No Content** - Request succeeded but there's no content to return (common with DELETE requests).

### 4xx - Client Errors
These codes indicate that there was an error with the request from the client side.

- **400 Bad Request** - Server couldn't understand the request due to invalid syntax.
- **401 Unauthorized** - Authentication is required and has failed or not been provided.
- **403 Forbidden** - Client doesn't have permission to access this resource.
- **404 Not Found** - The requested resource doesn't exist on the server.
- **405 Method Not Allowed** - The HTTP method used is not supported for this resource.
- **409 Conflict** - Request conflicts with the current state of the server.
- **429 Too Many Requests** - User has sent too many requests in a given time (rate limiting).

### 5xx - Server Errors
These codes indicate that the server failed to fulfill a valid request.

- **500 Internal Server Error** - Generic server error. Something went wrong on the server side.
- **501 Not Implemented** - Server doesn't support the functionality required to fulfill the request.
- **502 Bad Gateway** - Server received an invalid response from an upstream server.
- **503 Service Unavailable** - Server is temporarily unable to handle the request (maintenance or overload).
- **504 Gateway Timeout** - Server didn't receive a timely response from an upstream server.

