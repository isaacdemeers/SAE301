<?php


/**
 *  Class HttpRequest
 * 
 *  Pour encapsuler toutes les informations utiles sur une requêtes Http.
 *  Toutes les propriétés sont privées et initialisées par le constructeur.
 *  Chaque propriété est ensuite accessible en lecture via une méthode "getter"
 * 
 */
class HttpRequest {
    private string $method; // métho de la requête (GET, POST, DELETE, PATCH, PUT)
    private string $ressources = "none"; // type de ressource ciblée, extrait de l'URI (par exemple "products"...)
    private string $id = ""; // identifiant de la ressource (pas forcément défini, notament en POST ou en GET)
    private ?array $params = null; // éventuels paramètres de la requête (on a bien dit "éventuel")
    private string $json = ""; // données json transmise par le client (seulement en cas de requête en POST, PATCH ou PUT)

    /**
     *  __construct
     * 
     *  Le constructeur analyse les données de la requête pour initialiser 
     *  toutes les propriétés
     */
    public function __construct(){
        
        $this->method = $_SERVER['REQUEST_METHOD'];

        $uri = $_SERVER["REQUEST_URI"];

        $tmp = explode("?", $uri); // pour "enlever" les éventuels paramètres en GETE
        $tmp = $tmp[0];
        $tmp = explode("/", $tmp);
       
        // selon la convention choisie, une requête est valide si elle 
        // est de la forme /api/ressources/{id} (plus éventuellement des paramètres)
        // donc $tmp doit être de la forme ['', 'api', 'ressources'] ou ['', 'api', 'ressources', {id}]
        if ($tmp[1]=="api" && count($tmp)>2){
            $this->ressources = $tmp[2];
            if (count($tmp)==4 && $tmp[3]!="")
                $this->id = $tmp[3];
        }
        $this->params = $_REQUEST;
        $this->json = file_get_contents("php://input"); // lecture des données reçues au format json (s'il y en a)
    }

    /**
     * Get the value of ressources
     */ 
    public function getRessources()
    {
        return $this->ressources;
    }

    /**
     * Get the value of the requested ressources id 
     * return "none" if no id was given
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the value of params
     */ 
    public function getParam(string $name)
    {
        if (isset($this->params[$name]) ){
            return $this->params[$name];
        }
        else {
            return false;
        }
    }

    /**
     * Get the value of method
     */ 
    public function getMethod()
    {
        return $this->method;
    }

    /**
     * Get the value of json
     */ 
    public function getJson()
    {
        return $this->json;
    }
}