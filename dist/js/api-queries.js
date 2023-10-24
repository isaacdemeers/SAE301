/**
 *  Besoin de comprendre comment fonctionne fetch ?
 *  C'est ici : https://fr.javascript.info/fetch
 */

/**
 *  getRequest
 *
 *  Requête en GET l'URI uri.
 *  Une requête en GET correspond à une demande de "lecture" de la ressource d'URI uri.
 *
 *  Par exemple "http://.../products" pour lire tous les produits
 *  Ou "http://.../products/3" pour lire le produit d'identifiant 3
 *
 *  Le serveur renverra les données au format JSON.
 *  La fonction les retourne après conversion en objet Javascript (ou false si la requête a échoué)
 *
 *  ATTENTION : La fonction est asynchrone, donc quand on l'appelle il ne faut pas oublier "await".
 *  Exemple : let data = await getRequest(http://.../api/products);
 */
let getRequest = async function (uri) {
  let options = {
    method: "GET",
  };

  let response = await fetch(uri, options); // exécution (asynchrone) de la requête et attente de la réponse
  let obj = await response.json(); // extraction du json retourné par le serveur (opération asynchrone aussi)
  return obj; // et on retourne le tout (response.json() a déjà converti le json en objet Javscript)
};

/**
 *  postRequest
 *
 *  Requête en POST l'URI uri. Par exemple "http://.../products"
 *
 *  Une requête en POST correspond à une demande de création d'une ressource (dans l'exemple, création d'un produit)
 *  Pour créer la ressource, on fournit les données utiles via le paramètre data.
 *
 *  Le serveur retourne en JSON la nouvelle ressource créée en base avec son identifiant.
 *  La fonction retourne les données après conversion en objet Javascript (ou false si la requête a échoué)
 *
 *  ATTENTION : La fonction est asynchrone, donc quand on l'appelle il ne faut pas oublier "await".
 *  Exemple : let data = await postRequest(http://.../api/products, {name:"Pain", category:2});
 */
let postRequest = async function (uri, data) {
  // encodage des données au format JSON (à vous de bien transmettre ce que le serveur attend)
  let json = JSON.stringify(data);

  // Défition des options de la requêtes
  let options = {
    method: "POST",
    headers: { "Content-type": "application/json;charset=utf-8" }, // on précise que la requête contient du json
    body: json, // le json est placé dans le corps de la requête
  };

  let response = await fetch(uri, options); // exécution (asynchrone) de la requête et attente de la réponse
  let obj = await response.json(); // extraction du json retourné par le serveur (opération asynchrone aussi)
  return obj; // et on retourne le tout (response.json() a déjà converti le json en objet Javscript)
};

/**
 *  deleteRequest
 *
 *  Requête en DELETE l'URI uri. Par exemple "http://.../products/3"
 *
 *  Une requête en DELETE correspond à une demande de suppression d'une ressource.
 *  Par exemple : patchRequest("http://.../products/3") pour supprimer le produit d'identifiant 3
 *
 *  La fonction retourne true ou false selon le succès de l'opération
 */
let deleteRequest = async function (uri) {
  let options = {
    method: "DELETE",
  };

  let response = await fetch(uri, options); // exécution (asynchrone) de la requête et attente de la réponse
  let obj = await response.json(); // extraction du json retourné par le serveur (opération asynchrone aussi)
  return obj; // et on retourne le tout (response.json() a déjà converti le json en objet Javscript)
};

/**
 *  patchRequest
 *
 *  Requête en PATCH l'URI uri. Par exemple "http://.../products/3"
 *
 *  Une requête en PATCH correspond à une demande de modification/mise à jour d'une ressource.
 *  Pour modifier la ressource, on fournit les données utiles via le paramètre data.
 *  Par exemple : patchRequest("http://.../products/3", {category:1} ) pour modifier la catégorie du produit d'identifiant 3
 *
 *  La fonction retourne true ou false selon le succès de l'opération
 */
let patchRequest = async function (uri, data) {
  // encodage des données au format JSON (à vous de bien transmettre ce que le serveur attend)
  let json = JSON.stringify(data);

  // Défition des options de la requêtes
  let options = {
    method: "PATCH",
    headers: { "Content-type": "application/json;charset=utf-8" }, // on précise que la requête contient du json
    body: json, // le json est placé dans le corps de la requête
  };

  let response = await fetch(uri, options); // exécution (asynchrone) de la requête et attente de la réponse
  let obj = await response.json(); // extraction du json retourné par le serveur (opération asynchrone aussi)
  return obj; // et on retourne le tout (response.json() a déjà converti le json en objet Javscript)
};

class Product {
  #id;
  #name;
  #category;
  #price;

  constructor(id, name, category, price) {
    this.#id = id;
    this.#name = name;
    this.#category = category;
    this.#price = price;
  }

  getId() {
    return this.#id;
  }
}

class ProductCollection {
  #products;

  constructor() {
    this.#products = [];
  }

  addProduct(product) {
    if (product instanceof Product === true) this.#products.push(product);
  }

  getProducts() {
    return this.#products;
  }

  getProductById(id) {
    return this.#products.find((product) => product.getId() === id);
  }
}
