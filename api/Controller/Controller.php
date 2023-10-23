<?php 
require_once("Class/HttpRequest.php");

/**
 *  Class Controller
 * 
 *  C'est une classe abstraite. On ne peut donc pas l'instancier mais on peut
 *  créer des classes qui hériteront de Controller. 
 * 
 *  Ces classes filles devront (re)définir les méthodes process???Request
 *  pour que la méthode jsonResponse soit totalement fonctionnelle.
 * 
 *  Exemple : voir ProductController
 */
abstract class Controller {

     /**
     *  jsonResponse
     * 
     *  Process the Http request $request and return a json string in response 
     *  or false if it fails to process the request.
     */
    public function jsonResponse(HttpRequest $request): ?string{
        $json = false;
        $method = $request->getMethod();
       
        // according to the method, call the appropriate protected method to handle the request
        switch($method){
            case "GET":
                $data = $this->processGetRequest($request);
                break;
            
            case "POST":
                $data = $this->processPostRequest($request);
                break;

            case "DELETE":
                $data = $this->processDeleteRequest($request);
                break;

            case "PATCH":
                $data = $this->processPatchRequest($request);
                break;

            case "PUT": // a priori, vous pourrez vous passer de requêtes en PUT. A priori.
                $data = $this->processPutRequest($request);
                break;

            default:
                $data = false;
                break;
        }

        if ($data) { $json = json_encode($data); }
        return $json;
    }

    /**
     *  processGetRequest
     * 
     *  Process the following URI requested using GET method
     *  
     *  /api/ressources
     *  return all the ressources ojects (parameters may be used to filter the result)
     * 
     *  /api/ressources/{id}
     *  return the ressource object of id {id}
     */
    protected function processGetRequest(HttpRequest $request){
        return ["warning" => "processGetRequest is not defined in " . static::class ];
    }

    /**
     *  processPostRequest
     * 
     *  Process the following URI requested using POST method
     *  
     *  /api/ressources
     *  Create a new ressource using json data included in the Http request (see the HttpRequest class to access the json data)
     */
    protected function processPostRequest(HttpRequest $request){
        return ["warning" => "processPostRequest is not defined in " . static::class ];
    }

    /**
     *  processDeleteRequest
     * 
     *  Process the following URI requested using DELETE method
     *  
     *  /api/ressources/{id}
     *  Delete the ressource of id {id} 
     */
    protected function processDeleteRequest(HttpRequest $request){
        return ["warning" => "processDeleteRequest is not defined in " . static::class ];
    }

    /**
     *  processPatchRequest
     * 
     *  Process the following URI requested using PATCH method
     *  
     *  /api/ressources/{id}
     *  Update the ressource of id {id} using the json data in $request (see the HttpRequest class to access the json data)
     */
    protected function processPatchRequest(HttpRequest $request){
        return ["warning" => "processPatchRequest is not defined in " . static::class ];
    }

     /**
     *  processPutRequest
     * 
     *  Process the following URI requested using PUT method
     *  
     *  /api/ressources/{id}
     *  Replace the ressource of id {id} using the json data in $request (see the HttpRequest class to access the json data)
     */
    protected function processPutRequest(HttpRequest $request){
        return ["warning" => "processPutRequest is not defined in " . static::class ];
    }
}