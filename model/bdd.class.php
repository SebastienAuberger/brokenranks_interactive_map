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
                $this->bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch(PDOException $e){
                echo "Problème lors de la connexion à la base de données -> " . $e->getMessage();
            }
        }

        function getMarkers(){
            try{
                $req = $this->bdd->prepare("SELECT * FROM `markers`");
                $req->execute();
                return $req->fetchAll();
            }catch(PDOException $e){
                echo("ERREUR:" . $e->getMessage());
            }
        }

        function addMarker($posX,$posY,$popup = "0",$html = ""){
            if(($posX > -200 && $posX < 200) && ($posY > -200 && $posY < 200)){
                try{
                    $req = $this->bdd->prepare("INSERT INTO `markers`(id,posX,posY,popup,html) VALUES (NULL,:posX,:posY,:popup,:html)");
                    $req->bindParam(':posX',$posX);
                    $req->bindParam(':posY',$posY);
                    $req->bindParam(':popup',$popup);
                    $req->bindParam(':html',$html);
                    $req->execute();
                }catch(PDOException $e){
                    echo("ERREUR: " . $e->getMessage());
                }
            }
            else{
                throw new RangeException("POSX or POSY is out of Range");
            }
        }
    }