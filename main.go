package main

import (
	"fmt"
	"net/http"
)

const (
	jwks = `
	{
      "keys": [
		{
		  "kty": "RSA",
		  "kid": "bafa4df017094783a2418477e6a963f7",
		  "alg": "RS256",
		  "use": "sig",
		  "n": "AMveSeHOKgI0GPEdHGxj1s3GpZBkr1ziAXDUGzdrd32taR7TRkFcGqIIhL-Ej-mV2Jyj-l3AjY6yTbpvYtXsflLQ8kK--_wjisYtI6qCuHYLiD2p5c-V32utuMMNx3E2qBqJ1EjaD5UFQu4e6PsWYbRIqIfrD1qJrdiPBpOkLHDMoUk1QOzGUZ4CiRJHxvriqlfyE0gzVI6jcx7iZfTRNvWsE8PgATv5IqFZEtXlRVquHK5OyFZTwKBVv58D9gRsU099K4s0gfTZJ72k6mnvsWjgj-7N-uh2UVX0AhucEnMuLblR0bJluNSdot8unvQk4Tw0P3quvzseLopEIc-Q0Rc",
		  "e": "AQAB"
	    }
	  ]
	}
	`
)

func main() {
	http.HandleFunc("/.well-known/jwks.json", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, jwks)
	})

	http.ListenAndServe(":8080", nil)
}
