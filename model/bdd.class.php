<?php
    class BDD{
        private $host;
        private $password;
        private $username;
        private $bdd;
        function __construct($username,$pass,$host){
            $this->host = $host;
            $this->password = $pass;
            $this->username = $username;
            try{
                $this->bdd = new PDO('mysql:host=' . $this->host . ';dbname=int_map',$this->username,$this->password);
            }
            catch(PDOException $e){
                echo "Problème lors de la connexion à la base de données -> " . $e->getMessage();
            }
        }

        function getMarkers(){
            $req = $this->bdd->prepare("SELECT * FROM `markers`");
            $req->execute();
            return $req;
        }
    }