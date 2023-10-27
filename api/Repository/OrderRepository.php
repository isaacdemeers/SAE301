<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Product.php");
require_once("Class/Order.php");


/**
 *  Classe ProductRepository
 * 
 *  Cette classe représente le "stock" de Product.
 *  Toutes les opérations sur les Product doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class OrderRepository extends EntityRepository
{

    public function __construct()
    {
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function getOrders($id)
    {
        $requete = $this->cnx->prepare("SELECT O.*, OS.status_name FROM Orders AS O JOIN OrderStatus AS OS ON O.status_id = OS.status_id WHERE O.id =:value");
        $requete->bindParam(':value', $id);
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        if ($answer == true) {
            $orders = [];
            foreach ($answer as $obj) {
                array_push($orders, $obj);
            }
        }
        return $orders;
    }
}
